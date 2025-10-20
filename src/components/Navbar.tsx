import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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

  );
};

export default Navbar;
