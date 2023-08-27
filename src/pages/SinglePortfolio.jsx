import { Link } from "react-router-dom";
function SinglePortfolio() {
  return (
    <>
      <div className="bg_image_singP">
        <div className="containerS">
          <div className="titles">
            <div className="title_singP">Deep Sea Snow White Cod Fillet</div>
          </div>
        </div>
      </div>

      <div className="containerS">
        <div className="melt">
          <div className="melt_image">
            <img src="./src/images/61.png" alt="" />
          </div>
          <div className="melt_details">
            <h1>Melt in Your Mouth</h1>
            <p>
              {" "}
              The meat is juicy and salty, peppery around the edges, and just
              soft enough to melt in your mouth.
            </p>
            <p>
              Taste very good, as in This cake is wonderful-it just melts in
              one's mouth.{" "}
            </p>
          </div>
        </div>
        <div className="taste">
          <div className="taste_image">
            <img src="./src/images/62.png" alt="" />
          </div>
          <div className="taste_details">
            <h1>The Best Taste</h1>
            <p> My steak is so tender it could melt in my mouth.</p>
          </div>
        </div>
        <div className="lorem_text">
         <div className="container__full">
         <p>
            Of food, to be soft or tender, and, typically, delicious. The phrase
            is often quite literal. This decadent chocolate cake positively
            melts in the mouth. I've never had such a perfect steak in my life!
            I swear, it melted in my mouth
          </p>
          <h1>Cooking Suggestions</h1>
          <span>
            Find a new favorite recipe and easy inspiration with our collection
            of seasonal recipes.{" "}
          </span>
       
          <img src="./src/images/63.png" alt="" />
         
         </div>
        </div>
      </div>

      <div className="bg_light_green">
        <div className="containerS">
          <div className="previous_next_pages">
            <div className="previous_page">
              <Link to="/portfolio">
                {" "}
                <i className="fa-solid fa-arrow-left-long"></i>
              </Link>

              <span>previous Page</span>
              <p>Strip Steak With Rosemary Butter</p>
            </div>
            <div className="table-cells">
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
              <div className="cells">.</div>
            </div>
            <div className="next_page">
              <span>Next page</span>
              <Link to="/blogtwo">
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>

              <p>Option of natural wine available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePortfolio;
