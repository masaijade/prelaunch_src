var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');


var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    CSS: ['src/css/*.css'],
    IMG: ['src/img/*.*'],

    ENTRY_POINT: './src/js/main.js',

    OUT: 'bundle.js',
    MINIFIED_OUT: 'bundle.min.js',

    DEST_DEV: 'dist/dev',
    DEST_DEV_CSS: 'dist/dev/css',
    DEST_DEV_STATIC: 'dist/dev/static',
    DEST_DEV_IMG: 'dist/dev/img',
    // TO ADD NEW

    DEST_PROD: 'dist/prod',
    DEST_PROD_CSS: 'dist/prod/css',
    DEST_PROD_STATIC: 'dist/prod/static',
    DEST_PROD_IMG: 'dist/prod/img'
    // TO ADD NEW
};

//////////////
// DEVELOPMENT
//////////////
gulp.task('copy-dev', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST_DEV));
    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_DEV_CSS));    
    gulp.src(path.IMG)
        .pipe(gulp.dest(path.DEST_DEV_IMG));
    console.log('Copied');  
    // TO ADD NEW
});

gulp.task('watch-dev', function(){
    gulp.watch([path.CSS, path.HTML, path.IMG], ['copy-dev']);

    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {} , packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_DEV_STATIC))
            console.log('Updated');
    })
        .bundle().on('error', function(err){
            console.log(err.message);
        })
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_DEV_STATIC));
});

// type 'gulp' will invoke the default task 
gulp.task('default', ['copy-dev', 'watch-dev']);

/////////////
// PRODUCTION
/////////////
gulp.task('copy-prod', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST_PROD));
    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_PROD_CSS));
    gulp.src(path.IMG)
        .pipe(gulp.dest(path.DEST_PROD_IMG));  
    // TO ADD NEW
});

gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
          'js': 'prod/static/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST_PROD));
});

gulp.task('prod', function(){
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify]
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_PROD_STATIC));
      
});

gulp.task('production', ['copy-prod', 'replaceHTML', 'prod']);