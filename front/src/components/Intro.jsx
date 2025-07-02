import { HashLink } from 'react-router-hash-link';
import { Outlet } from 'react-router-dom';
import logo from "../assets/cool_img.png";

function Info() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <img
              src={logo}
              alt="cool img"
              className="img-fluid"
              style={{ maxWidth: 500, width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <div className="ps-md-5">
              <h2 className="display-4 fw-bold mb-3">Hashcat Web</h2>
              <p className="lead mb-4">
                At our core, we believe password recovery shouldn’t be a hassle.
                With Hashcat Web, we make unlocking your lost credentials feel less
                like a chore, and more like flipping a switch.
              </p>
              <HashLink smooth to="home#recover" className="btn btn-outline-dark rounded-pill px-4 py-2 btn-custom">
                Crack Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Info;
