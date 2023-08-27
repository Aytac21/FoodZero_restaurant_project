import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation({ toggleNavigation }) {
  useEffect(() => {
    if (toggleNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [toggleNavigation]);
  return (
    <>
      <div className="navigations">
        <div className="overlay container__fulls">
          <div className="close">
            <i onClick={toggleNavigation} className="fa-solid fa-xmark"></i>
          </div>
          <div className="navbardiv">
            <div className="pages">
              <ul>
                <li>
                  <Link to="/" onClick={toggleNavigation}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" onClick={toggleNavigation}>
                    MENU
                  </Link>
                </li>
                <li>
                  <a href="#">BLOGS </a>
                </li>
                <ol type="1">
                  <li>
                    <Link to="/portfolio" onClick={toggleNavigation}>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/singleportfolio" onClick={toggleNavigation}>
                      Single Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogtwo" onClick={toggleNavigation}>
                      Blog Two
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogone" onClick={toggleNavigation}>
                      Blog One
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/singlepostwithsidebar"
                      onClick={toggleNavigation}
                    >
                      Single Post with sidebar
                    </Link>
                  </li>
                  <li>
                    <Link to="/singlepostnosidebar" onClick={toggleNavigation}>
                      Single Post no sidebar
                    </Link>
                  </li>
                </ol>
                <li>
                  <Link to="/contact" onClick={toggleNavigation}>
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleNavigation}>
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h1>Contact</h1>
              <div>
                <p>+86 852 346 000</p>
                <a href="#">info@foodzero.com</a>
              </div>
              <div>
                <p>1959 Sepulvade Blvd</p>
                <span>Culver City, CA, 90230</span>
              </div>
              <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
