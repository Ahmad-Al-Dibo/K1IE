const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/cart.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};


const Cart: React.FC = () => {

  return (
    <>
      <Importsection />
  <section id="center" className="center_about clearfix">
    <div className="container">
      <div className="row">
        <div className="center_about_1 text-center clearfix">
          <h2 className="mgt">SHOPPING CART</h2>
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
                  <a href="#">Shopping Cart</a>{" "}
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
        <div className="cart clearfix">
          <div className="cart_i clearfix">
            <table>
              <tbody>
                <tr>
                  <th className="big_p">
                    <h4>PRODUCT NAME</h4>
                  </th>
                  <th className="big_p">
                    <h4>PRICE &amp; QUANTITY</h4>
                  </th>
                  <th className="big_p">
                    <h4>ORDER DATE</h4>
                  </th>
                  <th className="big_p">
                    <h4>TOTAL PRICE</h4>
                  </th>
                </tr>
                <tr>
                  <td className="text-left">
                    <img
                      className="mgt"
                      src="img/41.jpg"
                      style={{
                        width: 60,
                        height: 80,
                        float: "left",
                        marginRight: 10
                      }}
                    />
                    <h5 className="mgt bold">PRODUCT NAME</h5>
                    <p>Lorem ipsum dolor sit amet</p>
                  </td>
                  <td>
                    <i className="fa fa-rupee font_b" /> 300x2
                  </td>
                  <td>18-04-19</td>
                  <td>
                    <span>
                      <i className="fa fa-rupee font_b" /> 800
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart_i1 clearfix">
            <div className="col-sm-9 space_left">
              <div className="cart_i1l clearfix">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Code Enter"
                />
                <h5 className="mgt">
                  <a className="button_1 mgt" href="#">
                    <span>SUBMIT COUPON</span>{" "}
                    <i className="fa fa-chevron-right" />
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cart_i1r clearfix">
                <h5 className="mgt cart_b text-center">
                  <a href="#">UPDATE CART</a>
                </h5>
                <h4>CART TOTALS</h4>
                <hr />
                <h6>
                  Cart Subtotal <span className="pull-right">13,000.00</span>
                </h6>
                <h6>
                  Shipping and Handling{" "}
                  <span className="pull-right">Free Shipping</span>
                </h6>
                <h5>
                  <a className="button_1" href="#">
                    <span>CHECKOUT</span> <i className="fa fa-chevron-right" />
                  </a>
                </h5>
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

export default Cart;
