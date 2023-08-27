import { Link } from "react-router-dom";
function CoomingSoon({ toggleCoomingSoon }) {
  return (
    <>
      <div className="coomingSoon">
        <div className="overlayCooming">
          <div className="coomingSoonDetails">
            <div className="close">
              <i onClick={toggleCoomingSoon} className="fa-solid fa-xmark"></i>
            </div>
            <div className="coomingSoonHeading">
              <h1>COOMING SOON</h1>
              <div className="openingDates">
                <div className="openingDate">
                  <h3>02</h3>
                  <p>Month</p>
                </div>
                <div className="openingDate">
                  <h3>03</h3>
                  <p>Date</p>
                </div>
                <div className="openingDate">
                  <h3>21</h3>
                  <p>Hours</p>
                </div>
                <div className="openingDate">
                  <h3>35</h3>
                  <p>Minutes</p>
                </div>
                <div className="openingDate">
                  <h3>23</h3>
                  <p>Second</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reservedText">
            <h2>
              Booked Successfully
              <br /> Thanks <i className="fa-solid fa-heart-circle-check"></i>
            </h2>
          </div>
          <div className="viewMenu">
            <Link to="/portfolio" >
              <h2>View Menu</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoomingSoon;
