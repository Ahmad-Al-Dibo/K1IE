import { useRef } from "react";
import emailjs from "@emailjs/browser";



const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/contact.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};



const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
      () => alert("Bericht verzonden!"),
      (err) => alert("Fout bij verzenden: " + err.text)
      );
      };

      return (
<>
  <Importsection />
  <section id="center" className="center_about clearfix">
    <div className="container">
      <div className="row">
        <div className="center_about_1 text-center clearfix">
          <h2 className="mgt">CONTACT US</h2>
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
                  <a href="#">Contact Us</a>{" "}
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
  <section id="contact_page">
    <div className="container">
      <div className="row">
        <div className="contact_page_1 clearfix">
          <div className="col-sm-4">
            <div className="contact_page_1i text-center clearfix">
              <span>
                <i className="fa fa-map" />
              </span>
              <div className="about_h clearfix">
                <h4>Visit My Place</h4>
                <hr />
              </div>
              <p className="mgt">
                217 The Semper porta, Taciti Sociosqu,
                <br /> Delhi, F7 7EZ
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact_page_1i text-center clearfix">
              <span>
                <i className="fa fa-clock-o" />
              </span>
              <div className="about_h clearfix">
                <h4>Office Schedule</h4>
                <hr />
              </div>
              <p className="mgt">
                Monday to Saturday: 9AM - 5PM <br /> Sunday: 9AM - 12PM
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="contact_page_1i text-center clearfix">
              <span>
                <i className="fa fa-phone" />
              </span>
              <div className="about_h clearfix">
                <h4>Contact Us</h4>
                <hr />
              </div>
              <p className="mgt">
                01233456789
                <br />
                info@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact_page_2 clearfix">
          <div className="col-sm-6">
            <div className="blog_d_page_li3 clearfix">
              <div className="about_h clearfix">
                <h3 className="mgt">Send Your Message</h3>
                <hr />
              </div>
              <div className="blog_d_page_li3i cleafix">
                <div className="col-sm-6 space_left">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="col-sm-6 space_right">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="blog_d_page_li3i cleafix">
                <div className="col-sm-6 space_left">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="col-sm-6 space_right">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="blog_d_page_li3i cleafix">
                <div className="col-sm-12 space_all">
                  <textarea
                    placeholder="Message"
                    className="form-control form_1"
                    defaultValue={""}
                  />
                  <h5>
                    <a className="button_1" href="#">
                      <span>SEND MESSAGE</span>{" "}
                      <i className="fa fa-chevron-right" />
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="contact_page_2i clearfix">
              <h3 className="mgt">News Letters</h3>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitursodales ligula in
                libero.
              </p>
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Your Email"
              />
              <h5>
                <a className="button_2" href="#">
                  <span>SEND MESSAGE</span>{" "}
                  <i className="fa fa-chevron-right" />
                </a>
              </h5>
            </div>
            <div className="contact_page_2ii clearfix">
              <ul className="social-network social-circle mgt">
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
        </div>
        <div className="contact_page_3 clearfix">
          <div className="col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788"
              width="100%"
              height="450px"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
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

      export default Contact;