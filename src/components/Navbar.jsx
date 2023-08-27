import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";

function Navbar() {
  const [scrolled, setScrolled] = useState(window.scrollY > 200);
  const [showNavigation, setShowNavigation] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(1);
      setScrolled(window.scrollY > 200);
    });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <section
        style={{
          background: scrolled ? "rgb(1, 39, 1)" : "transparent",
          padding: scrolled ? "20px 80px" : "30px 80px",
          margin: scrolled ? "20px" : "0",
          width: scrolled ? " 97%" : "100%",
        }}
        className="navigation"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src="/Logo.png" alt="" />
          </Link>
          <i onClick={toggleNavigation} className="fa-solid fa-bars"></i>
          {windowWidth < 800 && (
            <a href="tel:+86 852 346 000">
              <i className="fa-solid fa-phone-alt"></i>
            </a>
          )}
        </div>
        <div className="reservAtion">
          {windowWidth >= 800 && (
            <>
              <p>+86 852 346 000</p>
              <p>Reservations</p>
            </>
          )}
        </div>
      </section>
      {showNavigation && <Navigation toggleNavigation={toggleNavigation} />}
    </>
  );
}

export default Navbar;
