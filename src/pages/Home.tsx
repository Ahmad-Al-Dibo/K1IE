import { Link } from "react-router-dom";

const Importsection = () => {
  return (
    <>
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/global.css" />
  <link rel="stylesheet" href="/css/index.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css" />
</>
  )
};


const Home: React.FC = () => {
  return (
      <>
      <Importsection />

        <section id="center" className="center_home">
          <div className="center_hm clearfix">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="center_h1 clearfix">
                    <h4>Lorem Ipsum Dolor Sit, Praesent Libero</h4>
                    <h3 className="bold">Consectetur Adipiscing Elit</h3>
                    <h2 className="bold">Sed Cursus Ante Dapibus Diam</h2>
                    <h5>
                      <a className="button" href="#">
                        <span>CONTACT ME</span> <i className="fa fa-chevron-right" />
                      </a>
                    </h5>
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
              </div>
            </div>
          </div>
        </section>
        <section id="keywords" className="clearfix">
          <div className="keywords_m clearfix">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="keywords_1 clearfix">
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer
                      nec odio Praesent libero
                    </p>
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
        <section id="about_home">
          <div className="container">
            <div className="row">
              <div className="about_h text-center clearfix">
                <div className="col-sm-12">
                  <h3>ABOUT ME</h3>
                  <hr />
                </div>
              </div>
              <div className="about_h1 clearfix">
                <div className="col-sm-6">
                  <div className="about_h1lm clearfix">
                    <div className="about_h1l clearfix">
                      <img src="img/3.jpg" className="iw" alt="abc" />
                    </div>
                    <div className="about_h1l1 clearfix">
                      <img src="img/4.jpg" className="iw" alt="abc" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about_h1r clearfix">
                    <h4 className="bold">Lorem Ipsum Dolor Sit, Praesent Libero</h4>
                    <h3 className="bold">
                      I Have Working From 15 Years in World Business
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed
                      nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                      ipsum.Praesent mauris. Fusce nec tellus sed augue semper porta.
                      Mauris massa. Vestibulum lacinia arcu eget nulla.Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Curabitursodales ligula in libero.Sed
                      dignissim lacinia nunc.
                    </p>
                    <h5>
                      <a className="button_1" href="#">
                        <span>READ MORE</span> <i className="fa fa-chevron-right" />
                      </a>
                    </h5>
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
        <section id="category">
          <div className="container">
            <div className="row">
              <div className="about_h text-center clearfix">
                <div className="col-sm-12">
                  <h3 className="mgt">FEATURED CATEGORIES</h3>
                  <hr />
                </div>
              </div>
              <div className="cat_1 clearfix">
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/6.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/7.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/8.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmg">
              <div className="about_h text-center clearfix">
                <div className="col-sm-12">
                  <h3 className="mgt">POPULAR CATEGORIES</h3>
                  <hr />
                </div>
              </div>
              <div className="cat_1 clearfix">
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/9.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/10.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cat_1im clearfix">
                    <div className="cat_1i clearfix">
                      <img src="img/11.jpg" className="iw mgt" alt="abc" />
                    </div>
                    <div className="cat_1i1 text-center clearfix">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <h3 className="bold">Lorem ipsum dolor</h3>
                      <p>
                        {" "}
                        Vestibulum lacinia arcu eget nulla.Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos
                        himenaeos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="specialist" className="clearfix">
          <div className="container">
            <div className="row">
              <div className="partner clearfix">
                <div className="col-sm-5">
                  <div className="specialist_left clearfix">
                    <img src="img/12.jpg" width="100%" />
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="specialist_right clearfix">
                    <h2>Semper Porta</h2>
                    <h5>Services</h5>
                    <p className="para_1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer
                      nec odio Praesent libero Sed cursus ante dapibus diam…
                    </p>
                    <p className="para_2">
                      Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                      sagittis ipsum.Praesent mauris. Fusce nec tellus sed augue
                      semper porta. Mauris massa. Vestibulum lacinia arcu eget
                      nulla.Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Curabitursodales ligula
                      in libero.Sed dignissim lacinia nunc.Sed nisi. Nulla quis sem at
                      nibh elementum imperdiet. Duis sagittis ipsum.Praesent mauris!
                    </p>
                    <h4>Services of Import and Export :</h4>
                    <ul>
                      <li>
                        <i className="fa fa-chevron-right" />{" "}
                        <a href="#">Elementum Imperdiet</a>
                      </li>
                      <li>
                        <i className="fa fa-chevron-right" />{" "}
                        <a href="#">Praesent Mauris</a>
                      </li>
                      <li>
                        <i className="fa fa-chevron-right" />{" "}
                        <a href="#">Dignissim Lacinia</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="consultation">
          <div className="container">
            <div className="row">
              <div className="consultation_1 clearfix">
                <div className="col-sm-6">
                  <div className="consultation_1_l clearfix">
                    <div className="about_h clearfix">
                      <h3 className="mgt">QUESTIONS</h3>
                      <hr />
                    </div>
                    <div className="panel panel-success">
                      <div className="panel-heading clickable panel-collapsed">
                        <h3 className="panel-title">
                          01. Lorem ipsum dolor sit amet?
                        </h3>
                        <span className="pull-right ">
                          <i className="glyphicon glyphicon-minus" />
                        </span>
                      </div>
                      <div className="panel-body clearfix">
                        <div className="col-sm-4">
                          <div className="panel_i">
                            <img src="img/13.jpg" className="iw" alt="abc" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="panel_i1">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio.Praesent libero. Sed cursus ante
                              dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                              imperdiet. Duis sagittis ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-success">
                      <div className="panel-heading clickable">
                        <h3 className="panel-title">
                          02. Sed cursus ante dapibus diam?
                        </h3>
                        <span className="pull-right ">
                          <i className="glyphicon glyphicon-minus" />
                        </span>
                      </div>
                      <div className="panel-body clearfix">
                        <div className="col-sm-4">
                          <div className="panel_i">
                            <img src="img/14.jpg" className="iw" alt="abc" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="panel_i1">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio.Praesent libero. Sed cursus ante
                              dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                              imperdiet. Duis sagittis ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-success">
                      <div className="panel-heading clickable">
                        <h3 className="panel-title">
                          03. Integer nec odio Praesent libero?
                        </h3>
                        <span className="pull-right ">
                          <i className="glyphicon glyphicon-minus" />
                        </span>
                      </div>
                      <div className="panel-body clearfix">
                        <div className="col-sm-4">
                          <div className="panel_i">
                            <img src="img/15.jpg" className="iw" alt="abc" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="panel_i1">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio.Praesent libero. Sed cursus ante
                              dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                              imperdiet. Duis sagittis ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-success">
                      <div className="panel-heading clickable">
                        <h3 className="panel-title">
                          04. Nulla quis sem at nibh elementum?
                        </h3>
                        <span className="pull-right ">
                          <i className="glyphicon glyphicon-minus" />
                        </span>
                      </div>
                      <div className="panel-body clearfix">
                        <div className="col-sm-4">
                          <div className="panel_i">
                            <img src="img/16.jpg" className="iw" alt="abc" />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="panel_i1">
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Integer nec odio.Praesent libero. Sed cursus ante
                              dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                              imperdiet. Duis sagittis ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="consultation_1_l clearfix">
                    <div className="about_h clearfix">
                      <h3 className="mgt">FREE CONSULTATION</h3>
                      <hr />
                    </div>
                  </div>
                  <div className="consultation_1_li clearfix">
                    <p className="mgt">I Would Like To Discuss</p>
                    <select className=" form-control">
                      <option value="Country"> Import </option>
                      <option value="India"> Export </option>
                      <option value="United states"> Spanish </option>
                      <option value="Afghanisthan"> Greek </option>
                    </select>
                  </div>
                  <div className="consultation_1_li clearfix">
                    <p className="mgt">Your Name</p>
                    <input className="form-control" placeholder="Name" type="text" />
                  </div>
                  <div className="consultation_1_li clearfix">
                    <p className="mgt">Your Email</p>
                    <input className="form-control" placeholder="Email" type="text" />
                    <h5>
                      <a className="button_1" href="#">
                        <span>SUBMIT</span> <i className="fa fa-chevron-right" />
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="supplyer">
          <div className="supplyer_m clearfix">
            <div className="container">
              <div className="row">
                <div className="about_h text-center clearfix">
                  <div className="col-sm-12">
                    <h3>USER FEEDBACK</h3>
                    <hr />
                  </div>
                </div>
                <div className="supplyer_i clearfix">
                  <div className="col-sm-6">
                    <div className="supplyer_il clearfix">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio.Praesent libero. Sed cursus ante dapibus
                        diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                        Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta.
                      </p>
                      <h4> Conubia Nostra</h4>
                      <div className="supplyer_ili clearfix">
                        <div className="col-sm-6 space_left">
                          <div className="clearfix supplyer_ili1">
                            <i className="fa fa-quote-left" />
                          </div>
                        </div>
                        <div className="col-sm-6 space_right">
                          <div className="clearfix supplyer_ili2 text-right">
                            <img src="img/13.jpg" className="mgt" alt="abc" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="supplyer_il clearfix">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio.Praesent libero. Sed cursus ante dapibus
                        diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                        Duis sagittis ipsum.Praesent mauris. Fusce nec tellus sed
                        augue semper porta.
                      </p>
                      <h4> Conubia Nostra</h4>
                      <div className="supplyer_ili clearfix">
                        <div className="col-sm-6 space_left">
                          <div className="clearfix supplyer_ili1">
                            <i className="fa fa-quote-left" />
                          </div>
                        </div>
                        <div className="col-sm-6 space_right">
                          <div className="clearfix supplyer_ili2 text-right">
                            <img src="img/14.jpg" className="mgt" alt="abc" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="news_home">
          <div className="container">
            <div className="row">
              <div className="about_h text-center clearfix">
                <div className="col-sm-12">
                  <h3 className="mgt">LATEST NEWS</h3>
                  <hr />
                </div>
              </div>
              <div className="news_h1 clearfix">
                <div className="col-sm-6">
                  <div className="news_h1l clearfix">
                    <div className="news_h1li clearfix">
                      <img src="img/18.jpg" alt="abc" className="iw" />
                    </div>
                    <div className="news_h1li1 clearfix">
                      <div className="col-sm-4">
                        <div className="news_h1li1l">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-calendar" /> 28 Mar 20
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-user" /> By Dapibus{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-tags" /> Comments (14)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="news_h1li1r">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Integer nec odio.
                          </p>
                          <h6>
                            <a href="#">Continue Reading...</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="news_h1l clearfix">
                    <div className="news_h1li clearfix">
                      <img src="img/19.jpg" alt="abc" className="iw" />
                    </div>
                    <div className="news_h1li1 clearfix">
                      <div className="col-sm-4">
                        <div className="news_h1li1l">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-calendar" /> 28 Mar 20
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-user" /> By Dapibus{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-tags" /> Comments (14)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="news_h1li1r">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Integer nec odio.
                          </p>
                          <h6>
                            <a href="#">Continue Reading...</a>
                          </h6>
                        </div>
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

export default Home;
