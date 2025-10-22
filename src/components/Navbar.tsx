import { Link } from "react-router-dom";



const NavbarSectionTop = () => {
  return (
    <section id="top">
          <div className="container">
            <div className="row">
              <div className="top_i clearfix">
                <div className="col-sm-2">
                  <div className="top_i1 clearfix">
                    <select className=" form-control">
                      <option value="Country"> Language </option>
                      <option value="India"> English </option>
                      <option value="United states"> Spanish </option>
                      <option value="Afghanisthan"> Greek </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="top_i1 clearfix">
                    <h5>
                      <i className="fa fa-phone" /> 012345689
                    </h5>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="top_i1 clearfix">
                    <h5>
                      <a href="#">
                        <i className="fa fa-envelope" /> info@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="top_i2 clearfix">
                    <h5>
                      <i className="fa fa-lock" /> <a href="#">Log In</a> OR{" "}
                      <a href="#">Register</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
};


const NavbarSectionBottom = () => {
  return (
    <>
    <section id="header" className="clearfix">
          <nav className="navbar">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">
                  <i className="fa fa-copyright" /> SellEasy
                </a>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    {<Link className="tag_m " to="/">
                      Home
                    </Link>}
                  </li>
                  <li>
                    {<Link className="tag_m" to="/about">
                      About Us
                    </Link>}
                  </li>
                  <li>
                    {<Link className="tag_m" to="/importsection">
                      Import
                    </Link>}
                  </li>
                  <li>
                    {<Link className="tag_m" to="/exportsection">
                      Export
                    </Link>}
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle tag_m"
                      data-toggle="dropdown"
                    >
                      Product <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu drop_m">
                      <li>
                        <Link to="/products">Product</Link>
                      </li>
                      <li>
                        <Link to="/ProductDetails">Product Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle tag_m"
                      data-toggle="dropdown"
                    >
                      Blog <b className="caret" />
                    </Link>
                    <ul className="dropdown-menu drop_m">
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blogdetails">Blog Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="tag_m" to="/cart">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="tag_m" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="tag_m" to="/login">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link className="tag_m" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* /.container-fluid */}
          </nav>
        </section>
    </>
  )

}

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarSectionTop />
      <NavbarSectionBottom />
        </>
  );
};

export default Navbar;
