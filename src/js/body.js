// Module for major contents on the page

// <div className="frontpic"><img src="./img/header_0.jpg" id="body_bg" /></div>

React = require('react');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                      <span className="fa fa-bars"></span>
                  </button>
                  <a className="navbar-brand page-scroll" href="#page-top">
                      <img className="nav-logo" src="./img/logo.png" /> <span className="light">COMING IN SUMMER 2016 </span>
                  </a>
              </div>

              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                  <ul className="nav navbar-nav">
                      <li className="hidden">
                          <a className="page-scroll" href="#page-top"></a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#product">Product</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
              <div className="signup-box">
                <input type="text" className="form-control email-input" placeholder="Enter Your Email Here" />
                <div className="btn email-submit" type="button">Get Notified!</div>
              </div>
      </div>
    );
  }
});

var Front = React.createClass({
  render: function() {
    return (
        <header className="intro" >
            <div className="intro-body">
                <div className="container">
                    <div className="row slideBtn">
                        <div className="col-md-8 col-md-offset-2">
                            <a href="#about" className="btn btn-circle page-scroll">
                                <i className="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
        <section id="about" className="container content-section about text-center">
          <div className="row" >
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="redFont">About W.E.</h2>
              <p><span className="redFont">W</span>omen and <span className="redFont">E</span>mpowerment is the core of our mission.</p>

              <p>We met a group of female Maasai beadwork artisans in 2014. For these women, being a good wife is the only life mission.</p>
              <p className="redFont">And, like may of us, wishing life could be more than that. </p>
              <p>This the beginning of W.E., we want to provide the opportunity to empower them to achieve something meaningful. In 2015, we established a local partnership with Gloria, a dedicated Maasai woman who resonated the same W.E. vision.</p>
              <p>Together, we co-create a line of culturally inspired artisan accessories that can empower the women and their communities.</p>
              <p>W.E. will continue to work tirelessly towards our mission in 2016.</p>
            </div>
          </div>
        </section>
    );
  }
});

var Product = React.createClass({
  render: function() {
    return (
        <section id="product" className="container content-section product text-center">
          <div className="row" >
            <div className="col-md-6" id="product_0-img">
            </div>
            <div className="col-md-6">
              <h2 className="product-title light">Product</h2>

              <p className="text-left">
              W.E. values heritage and craftsmanship that brings values socially and economically. W.E. cares about where it came from and how is it being made.

              Our Collections tell stories of a rich culture and women’s attitudes. You will never find the exactly same piece. Each was carefully crafted by hand, and the unique pattern represents the expressive artwork of each artisan woman.

              It is exclusively handmade, the one and only.
              </p>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-6">
              <h2 className="product-title light">Social Impact</h2>
              <p className="text-left">
                Women Empowerment is the very reason of why W.E. exists. W.E. believes in the hard work and capabilities of these artisan women.

                Therefore, W.E. opens this door for them.

                We connect female artisans in developing countries to the international market. Every product sold will provide a sustainable income for W.E. women, it will help them to support their families and children education. A percentage of the product sales will return to the same community to empowering the local women.
              </p>  
            </div>
            <div className="col-md-6" id="product_1-img">
            </div>
          </div>
        </section>

    )
  }
});

var Contact = React.createClass({
  render: function() {
    return (
      <section className="container content-section contact text-center">
          <div id="contact" className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  <p><b>Sign-up to get updates and early special offers! </b></p>

                  <div>
                    <input type="text" className="form-control email-input" placeholder="Enter Your Email Here" />
                    <div className="btn email-submit" type="button">Get Notified!</div>
                  </div>

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  
                  <p>Follow us on social media </p>
                  <ul className="list-inline ">
                      <li>
                          <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><img src="./img/fb.png" /></a>
                      </li>
                      <li>
                          <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><img src="./img/insta.png" /></a>
                      </li>
                      <li>
                          <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><img src="./img/pinter.png" /></a>
                      </li>
                      <li>
                          <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><img src="./img/twitter.png" /></a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="row footer" >
          </div>


      </section>
    );
  }
});

var End = React.createClass({
  render: function() {
    return (
      <section className="container content-section end text-center">

        <div className="row end-img">
          <p className="end-img-text">Exclusively Handmade, the One and Only.</p>
        </div>

        <div className="end-questions ">
          <p>Questions, Suggestions, or just to say HI? </p>
          <p><a href="mailto:womenempowerment@gmail.com"><b>Email: weforwe@gmail.com</b></a></p>
          <div className="btn questions-submit end-questions-btn" type="button">Contact W.E.</div>
          <br/>
          <br/>
          <br/>
        </div>

        <footer className="end-questions">
            <div className="container text-center banner-social-buttons">
                <p>Copyright &copy; W.E. 2016</p>
                <p>Developed by <a href="mailto:wanhao.maple@gmail.com?subject=Hey!">Maple7sha</a></p>
            </div>
        </footer>
      </section>
    );
  }
});

/*
        <div className="end-questions">
          <p>Questions, Suggestions, or Just to say HI</p>
          <button className="btn btn-default btn-lg"></button>
        </div>


                          <br/>
                  <a href="mailto:womenempowerment@gmail.com">womenempowerment@gmail.com</a>
*/

var Body = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Front />
        <About />
        <Product />
        <Contact />
        <End />
      </div>
    );
  }
});

module.exports = Body;

