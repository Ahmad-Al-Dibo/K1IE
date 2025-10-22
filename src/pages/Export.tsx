const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/import.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};

const Export: React.FC = () => {

  return (
<>
  <Importsection />
  <section id="center" className="center_about clearfix">
    <div className="container">
      <div className="row">
        <div className="center_about_1 text-center clearfix">
          <h2 className="mgt">EXPORT</h2>
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
                  <a href="#">Export</a>{" "}
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
      </div>
    </div>
  </section>
  <section id="import">
    <div className="container">
      <div className="row">
        <div className="import_m clearfix">
          <div className="about_h text-center clearfix">
            <div className="col-sm-12">
              <h3>EXPORT PRODUCT</h3>
              <hr />
            </div>
          </div>
          <div className="import_i clearfix">
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/50.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Lorem Ipsum
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/51.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Sed Cursus{" "}
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/52.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Nulla Quis
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="import_i clearfix">
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/53.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Lorem Ipsum
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/54.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Sed Cursus{" "}
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="import_ii text-center clearfix">
                <img src="img/55.jpg" className="iw" alt="abc" />
                <h4>
                  <a className="c_text" href="#">
                    Nulla Quis
                  </a>
                </h4>
                <p>
                  Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh
                  elementum imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="import_i1 text-center clearfix">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-long-arrow-left" />
                </a>
              </li>
              <li>
                <a className="act_tab" href="#">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-long-arrow-right" />
                </a>
              </li>
            </ul>
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

export default Export;
