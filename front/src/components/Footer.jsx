function Footer(){

  const date = new Date();
  let year = date.getFullYear();

  return (
      <footer className="bg-white text-black py-5 mt-5" id="footer">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-4">
                    <h5 className="fw-bold mb-4">Useful Info</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-black text-decoration-none">Other Tools</a></li>
                        <li className="mb-3"><a href="#" className="text-black text-decoration-none">Guide</a></li>
                        <li className="mb-3"><a href="#" className="text-black text-decoration-none">Privacy Policy</a></li>
                        <li className="mb-3"><a href="#" className="text-black text-decoration-none">Terms of Use</a></li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h5 className="fw-bold mb-4">About Us</h5>
                    <p className="text-muted">
                        We are a small company passionate about security tools. 
                        Our products are 100% safe and easy for you to use.<br/><br/>
                        Thank you for choosing us!</p>
                </div>

                <div className="col-md-4">
                    <h5 className="fw-bold mb-4">Connect With Us</h5>
                    <div className="d-flex gap-3 mb-4">
                        <a href="https://www.instagram.com" className="text-black fs-4" target="_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.x.com" className="text-black fs-4" target="_blank">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.youtube.com" className="text-black fs-4" target="_blank">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>

                    <h5 className="fw-bold mb-3">Newsletter</h5>
                    <form className="input-group">
                        <input type="email" className="form-control rounded-0" placeholder="Enter your email"/>
                        <button className="btn btn-dark rounded-0" type="submit">
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>

            <hr className="my-5"/>

            <div className="text-center text-muted">
                <p className="mb-0">© {year} MERO®. All rights reserved</p>
            </div>
        </div>
      </footer>
    )
}

export default Footer