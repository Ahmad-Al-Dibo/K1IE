const Importsection = () => {
  return (
    <>
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/global.css" rel="stylesheet" />
  <link href="css/product_detail.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />

</>
  )
};

const ProductDetails: React.FC = () => {

  return (
    <>
      <Importsection />
  <section id="center" className="center_about clearfix">
    <div className="container">
      <div className="row">
        <div className="center_about_1 text-center clearfix">
          <h2 className="mgt">PRODUCT DETAIL</h2>
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
                  <a href="#">Product Detail</a>{" "}
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
  <section id="blog">
    <div className="container">
      <div className="row">
        <div className="blog clearfix">
          <div className="col-sm-3">
            <div className="blog_left clearfix">
              <div className="blog_left_1">
                <h3>CLASSIFICATION</h3>
                <h4>
                  <a href="#">All Templates</a>
                </h4>
                <p>
                  <a href="#">Online Shops</a>
                </p>
                <p>
                  <a href="#">Craft &amp; Templates</a>
                </p>
                <p>
                  <a href="#">Social &amp; Business</a>
                </p>
                <p>
                  <a href="#">Our Works</a>
                </p>
                <p>
                  <a href="#">Entertainment World</a>
                </p>
                <p>
                  <a href="#">People &amp; Fashion</a>
                </p>
                <p>
                  <a href="#">Food &amp; Health</a>
                </p>
                <p>
                  <a href="#">Health &amp; Hotels</a>
                </p>
                <p>
                  <a href="#">Outdoor &amp; Indoor</a>
                </p>
                <p>
                  <a href="#">Media</a>
                </p>
                <p>
                  <a href="#">Nature World</a>
                </p>
                <p>
                  <a href="#">Business Zone</a>
                </p>
                <p>
                  <a href="#">Tour &amp; Travel</a>
                </p>
                <p>
                  <a href="#">Wedding Planner</a>
                </p>
              </div>
              <div className="blog_left_2">
                <p>
                  <a href="#">
                    Your Selected <i className="fa fa-heart-o pull-right" />
                  </a>
                </p>
              </div>
              <div className="blog_left_1">
                <h3>FOLLOWED BY</h3>
                <h4>
                  <a href="#">Trending</a>
                </h4>
                <p>
                  <a href="#">Popular</a>
                </p>
                <p>
                  <a href="#">Most Liked</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="blog_right clearfix">
              <div className="col-sm-12">
                <div className="blog_right_inner clearfix">
                  <div className="blog_right_inner_1">
                    <img src="img/56.jpg" className="iw" alt="abc" />
                  </div>
                </div>
                <div className="blog_right_1">
                  <h3>
                    CONSECTETUR <i className="fa fa-heart-o" />
                  </h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Duis sagittis ipsum. Praesent mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="blog_right_detail col-sm-12 clearfix">
              <h3>Nibh Elementum</h3>
              <p>
                Integer nec odio.Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa.{" "}
                <a href="#">Vestibulum lacinia arcu</a> eget nulla.Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a href="#">Integer nec odio</a>.Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum.Praesent mauris. Fusce nec tellus
                sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                eget nulla.Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Curabitursodales ligula
                in libero.Sed dignissim lacinia nunc.
              </p>
              <p>
                Sed cursus ante dapibus diam. Sed nisi.{" "}
                <a href="#">Nulla quis sem</a> at nibh elementum imperdiet. Duis
                sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue
                semper porta. Mauris massa. Vestibulum lacinia arcu eget
                nulla.Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Curabitursodales ligula
                in libero.Sed dignissim lacinia nunc.
              </p>
            </div>
            <div className="detail_comments col-sm-12">
              <h3 className="heading_1">Latest Comments</h3>
              <div className="article_page_left_inner_5 clearfix">
                <div className="article_page_left_inner_5_inner clearfix">
                  <div className="col-sm-2">
                    <div className="article_page_left_inner_5_inner_left">
                      <img className="img-circle" src="img/57.jpg" />
                    </div>
                  </div>
                  <div className="col-sm-10">
                    <div className="article_page_left_inner_5_inner_right">
                      <div className="clearfix">
                        <div className="col-sm-6 space_left">
                          <h6>
                            Dapibus <span>May 21, 2013</span>
                          </h6>
                        </div>
                        <div className="col-sm-6 text-right">
                          <h5>
                            <i className="fa fa-thumbs-up" />
                            <span>8</span>
                            <i className="fa fa-thumbs-down" />
                          </h5>
                        </div>
                      </div>
                      <p>
                        Nulla quis sem at nibh elementum imperdiet. Duis
                        sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta Vestibulum lacinia arcu eget nulla.
                      </p>
                      <h3>
                        <a href="#">Reply</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="article_page_left_inner_5_inner clearfix">
                  <div className="col-sm-2">
                    <div className="article_page_left_inner_5_inner_left">
                      <img className="img-circle" src="img/58.jpg" />
                    </div>
                  </div>
                  <div className="col-sm-10">
                    <div className="article_page_left_inner_5_inner_right">
                      <div className="clearfix">
                        <div className="col-sm-6 space_left">
                          <h6>
                            Litora Torquent <span>May 21, 2013</span>
                          </h6>
                        </div>
                        <div className="col-sm-6 text-right">
                          <h5>
                            <i className="fa fa-thumbs-up" />
                            <span>1</span>
                            <i className="fa fa-thumbs-down" />
                          </h5>
                        </div>
                      </div>
                      <p>
                        Nulla quis sem at nibh elementum imperdiet. Duis
                        sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta Vestibulum lacinia arcu eget nulla.
                      </p>
                      <h3>
                        <a href="#">Reply</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="article_page_left_inner_5_inner clearfix">
                  <div className="col-sm-2">
                    <div className="article_page_left_inner_5_inner_left">
                      <img className="img-circle" src="img/59.jpg" />
                    </div>
                  </div>
                  <div className="col-sm-10">
                    <div className="article_page_left_inner_5_inner_right">
                      <div className="clearfix">
                        <div className="col-sm-6 space_left">
                          <h6>
                            Conubia <span>May 21, 2013</span>
                          </h6>
                        </div>
                        <div className="col-sm-6 text-right">
                          <h5>
                            <i className="fa fa-thumbs-up" />
                            <span>2</span>
                            <i className="fa fa-thumbs-down" />
                          </h5>
                        </div>
                      </div>
                      <p>
                        Nulla quis sem at nibh elementum imperdiet. Duis
                        sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta Vestibulum lacinia arcu eget nulla.
                      </p>
                      <h3>
                        <a href="#">Reply</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="article_page_left_inner_5_inner clearfix">
                  <div className="col-sm-2">
                    <div className="article_page_left_inner_5_inner_left">
                      <img className="img-circle" src="img/60.jpg" />
                    </div>
                  </div>
                  <div className="col-sm-10">
                    <div className="article_page_left_inner_5_inner_right">
                      <div className="clearfix">
                        <div className="col-sm-6 space_left">
                          <h6>
                            Per Inceptos <span>May 21, 2013</span>
                          </h6>
                        </div>
                        <div className="col-sm-6 text-right">
                          <h5>
                            <i className="fa fa-thumbs-up" />
                            <span>5</span>
                            <i className="fa fa-thumbs-down" />
                          </h5>
                        </div>
                      </div>
                      <p>
                        Nulla quis sem at nibh elementum imperdiet. Duis
                        sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta Vestibulum lacinia arcu eget nulla.
                      </p>
                      <h3>
                        <a href="#">Reply</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment_1 col-sm-12 clearfix">
              <h3 className="heading_1">Post Comments</h3>
              <textarea
                className="form-control select_1"
                placeholder="Comment Text*"
                defaultValue={""}
              />
              <input
                type="text"
                placeholder="Name*"
                className="form-control text_1_box"
              />
              <input
                type="text"
                placeholder="Email*"
                className="form-control text_1_box"
              />
              <input
                type="text"
                placeholder="Website"
                className="form-control text_1_box"
              />
              <h5>
                <a className="button_2" href="#">
                  <span>SUBMIT</span> <i className="fa fa-chevron-right" />
                </a>
              </h5>
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

export default ProductDetails;
