import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
	return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
          <div className="container">
              <Link to="/" className="navbar-brand fw-bold">
                  #Cat Web
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto gap-5">
                      <li className="nav-item">
                          <Link to="/" className="nav-link" href="#">Home</Link>
                      </li>
                      <li className="nav-item">
                          <HashLink smooth to="/db#db_table" className="nav-link">Recovered</HashLink>
                      </li>
                      <li className="nav-item">
                          <HashLink smooth to="/home#recover" className="nav-link">Recover</HashLink>
                      </li>
                      <li className="nav-item">
                          <HashLink smooth to="/home#footer" className="nav-link">Contact</HashLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <Outlet />
    </>
    
  )
}

export default Navbar