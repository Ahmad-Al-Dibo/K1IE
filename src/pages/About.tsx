

const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/about.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};


const About: React.FC = () => {
  return (
    <>
      <Importsection />
  <section id="center" className="center_about">
    <div className="container">
      <div className="row">
        <div className="center_about_1 text-center clearfix">
          <h2 className="mgt">ABOUT US</h2>
        </div>
      </div>
    </div>
  </section>
  <section id="about_page">
    <div className="container">
      <div className="row">
        <div className="about_page_t clearfix">
          <div className="col-sm-12">
            <div className="col-sm-6 space_left">
              <ul className="mgt">
                <li>
                  Home <i className="fa fa-chevron-right" />{" "}
                </li>
                <li>
                  <a href="#">About Us</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-sm-6 space_right">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Keywords"
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    SEARCH
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="about_page_1 clearfix">
          <div className="col-sm-2 space_left">
            <div className="about_page_1l clearfix">
              <ul className="nav nav-tabs mgt">
                <li className="active">
                  <a data-toggle="tab" href="#tab_1">
                    WHAT I DO
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab_2">
                    MY MISSION
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab_3">
                    MY VISION
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab_4">
                    MY GOAL
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-10 space_right">
            <div className="tab-content clearfix">
              <div
                id="tab_1"
                className="tab-pane fade clearfix active in about_page_1r"
              >
                <img src="img/26.jpg" className="iw mgt" alt="abc" />
                <h4>
                  Vestibulum lacinia arcu eget nulla aptent taciti sociosqu ad
                  litora torquent per conubia nostra{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitursodales
                  ligula in libero.Sed dignissim lacinia nunc.
                </p>
              </div>
              <div id="tab_2" className="tab-pane fade clearfix about_page_1r">
                <img src="img/27.jpg" className="iw mgt" alt="abc" />
                <h4>
                  Vestibulum lacinia arcu eget nulla aptent taciti sociosqu ad
                  litora torquent per conubia nostra{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitursodales
                  ligula in libero.Sed dignissim lacinia nunc.
                </p>
              </div>
              <div id="tab_3" className="tab-pane fade clearfix about_page_1r">
                <img src="img/28.jpg" className="iw mgt" alt="abc" />
                <h4>
                  Vestibulum lacinia arcu eget nulla aptent taciti sociosqu ad
                  litora torquent per conubia nostra{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitursodales
                  ligula in libero.Sed dignissim lacinia nunc.
                </p>
              </div>
              <div id="tab_4" className="tab-pane fade clearfix about_page_1r">
                <img src="img/29.jpg" className="iw mgt" alt="abc" />
                <h4>
                  Vestibulum lacinia arcu eget nulla aptent taciti sociosqu ad
                  litora torquent per conubia nostra{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla.Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitursodales
                  ligula in libero.Sed dignissim lacinia nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="timeline" className="clearfix">
    <div className="timeline_m clearfix">
      <div className="container">
        <div className="row">
          <div className="about_h text-center clearfix">
            <div className="col-sm-12">
              <h3>WHAT I DO</h3>
              <hr />
            </div>
          </div>
          <div className="about_h1 clearfix">
            <div className="col-sm-6">
              <div className="col-sm-12 space_all time_col_1">
                <div className="col-sm-10 about_h1ll">
                  <h4 className="bold mgt">IMPORT</h4>
                  <p>
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla.Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitursodales ligula in libero.Sed dignissim
                    lacinia nunc.
                  </p>
                </div>
                <div className="col-sm-2 about_h1lr">
                  <span>
                    <i className="fa fa-share-square-o" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12 space_all time_col">
                <div className="col-sm-2 about_h1lr">
                  <span>
                    <i className="fa fa-shopping-cart" />
                  </span>
                </div>
                <div className="col-sm-10 about_h1ll">
                  <h4 className="bold mgt">BUY</h4>
                  <p>
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla.Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitursodales ligula in libero.Sed dignissim
                    lacinia nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about_h1 clearfix">
            <div className="col-sm-6">
              <div className="col-sm-12 space_all time_col">
                <div className="col-sm-10 about_h1ll">
                  <h4 className="bold mgt">EXPORT</h4>
                  <p>
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla.Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitursodales ligula in libero.Sed dignissim
                    lacinia nunc.
                  </p>
                </div>
                <div className="col-sm-2 about_h1lr">
                  <span>
                    <i className="fa fa-ship" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12 space_all time_col_1">
                <div className="col-sm-2 about_h1lr">
                  <span>
                    <i className="fa fa-shopping-bag" />
                  </span>
                </div>
                <div className="col-sm-10 about_h1ll">
                  <h4 className="bold mgt">SALES</h4>
                  <p>
                    Fusce nec tellus sed augue semper porta. Mauris massa.
                    Vestibulum lacinia arcu eget nulla.Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitursodales ligula in libero.Sed dignissim
                    lacinia nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="footer_1 clearfix">
          <div className="col-sm-4">
            <div className="footer_1i clearfix">
              <h4 className="mgt">Emergency Contact</h4>
              <div className="clearfix footer_1ii">
                <div className="col-sm-1 space_all">
                  <span>
                    <i className="fa fa-phone" />
                  </span>
                </div>
                <div className="col-sm-11 space_all">
                  <h6 className="mgt">+91(1234)5678</h6>
                  <h6 className="mgt">+91(1234)5678</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_1i clearfix">
              <h4 className="mgt">Location</h4>
              <div className="clearfix footer_1ii">
                <div className="col-sm-1 space_all">
                  <span>
                    <i className="fa fa-map-marker" />
                  </span>
                </div>
                <div className="col-sm-11 space_all">
                  <h6 className="mgt">
                    {" "}
                    40, 27th Street, Elementum Imperdiet, DB{" "}
                  </h6>
                  <h6 className="mgt"> 05231, United Kingdom</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer_1i clearfix">
              <h4 className="mgt">Emergency Contact</h4>
              <div className="clearfix footer_1ii">
                <div className="col-sm-1 space_all">
                  <span>
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <div className="col-sm-11 space_all">
                  <h6 className="mgt">info@gmail.com</h6>
                  <h6 className="mgt">info@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_2 clearfix">
          <div className="col-sm-3">
            <div className="footer_2i clearfix">
              <a className="navbar-brand" href="index.html">
                <i className="fa fa-copyright" /> SELLER
              </a>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio.Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoRss" title="Rss">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icoTwitter" title="Twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icoGoogle" title="Google +">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer_2i1 clearfix">
              <h4 className="mgt">QUICK LINK</h4>
              <hr />
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-arrow-right" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-arrow-right" /> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-arrow-right" /> Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-arrow-right" /> Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer_2i1 clearfix">
              <h4 className="mgt">SUBSCRIPTION</h4>
              <hr />
              <p>Praesent libero Sed cursus ante dapibus diam.</p>
              <input className="form-control" placeholder="Email" type="text" />
              <h5>
                <a className="button_2" href="#">
                  <span>SUBSCRIBE</span> <i className="fa fa-chevron-right" />
                </a>
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer_2i1 clearfix">
              <h4 className="mgt">INSTAGRAM</h4>
              <hr />
              <div className="footer_2i1i clearfix">
                <div className="col-sm-4 space_left">
                  <img src="img/20.jpg" alt="abc" className="iw" />
                </div>
                <div className="col-sm-4 space_left">
                  <img src="img/21.jpg" alt="abc" className="iw" />
                </div>
                <div className="col-sm-4 space_left">
                  <img src="img/22.jpg" alt="abc" className="iw" />
                </div>
              </div>
              <div className="footer_2i1i clearfix">
                <div className="col-sm-4 space_left">
                  <img src="img/23.jpg" alt="abc" className="iw" />
                </div>
                <div className="col-sm-4 space_left">
                  <img src="img/24.jpg" alt="abc" className="iw" />
                </div>
                <div className="col-sm-4 space_left">
                  <img src="img/25.jpg" alt="abc" className="iw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer_bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="footer_bottom_1 text-center">
            <p className="mgt">
              {" "}
              © 2013 Your Website Name. All Rights Reserved | Design by{" "}
              <a href="http://www.templateonweb.com">TemplateOnWeb</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    id="toTop"
    className="btn btn-info"
    style={{
      display: "block",
      background: "#000",
      color: "#fff",
      border: "none"
    }}
  >
    <span className="fa fa-chevron-up" />
  </div>
</>

  );
};

export default About;
