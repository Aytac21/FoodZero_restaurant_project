import { useState } from "react";
import CoomingSoon from "../components/CoomingSoon";

function Menu() {
  const [showCoomingSoon, setShowCoomingSoon] = useState(false);

  const toggleCoomingSoon = () => {
    setShowCoomingSoon(!showCoomingSoon);
  };
  return (
    <>
      <div className="bg_image_menu">
        <div className="container__full">
          <div className="titles">
            <div className="title_menu">
              View Our <br />
              New Menu
            </div>
            <div className="subtitle_menu">
              The freshest ingredients for you every day
            </div>
          </div>
        </div>
      </div>

      <div className="containerS">
        <div className="startes_heading">
          <img src="./src/images/65.png" alt="Blueberry" />

          <h1>Starters</h1>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="starters_menu">
          <div className="eat_img">
            <img src="./src/images/66.png" alt="Salad" />
          </div>

          <div className="eats">
            <div className="eat_kind">
              <span className="price"> $20</span>
              <h1>Grilled Okra and Tomatoes</h1>
              <p>Oil grill grates then place kabobs on hot grill grates.</p>
            </div>
            <div className="eat_kind">
              <span className="price"> $18</span>
              <h1>Cucumber Salad</h1>
              <p>
                Stir in the vinegar and onion. Refrigerate for 10 minutes, then
                serve.
              </p>
            </div>
            <div className="eat_kind">
              <span className="price"> $12</span>
              <h1>Basil Pancakes</h1>
              <p>
                Whisk flour, milk, eggs, 1 tablespoon oil, baking powder, salt
                and pepper.
              </p>
            </div>
          </div>
        </div>

        <div className="mains_heading">
          <h1>Mains</h1>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="mains_menu">
          <div className="eats">
            <div className="eat_kind main_eat_kind">
              <span className="price"> $20</span>
              <h1>Deep Sea Snow White Cod Fillet</h1>
              <p>The most incredibly luscious cod fish we have ever tasted. </p>
            </div>
            <div className="eat_kind main_eat_kind">
              <span className="price"> $22</span>
              <h1>Steak With Rosemary Butter</h1>
              <p>Rub the paste over both sides of each steak.</p>
            </div>
            <div className="eat_kind main_eat_kind">
              <span className="price"> $20</span>
              <h1>Steaks with Grilled Kimchi</h1>
              <p>
                Meanwhile, grill kimchi on rack, turning once, until lightly
                charred,{" "}
              </p>
            </div>
          </div>
          <div className="eat_img main_eat_img">
            <img src="./src/images/67.png" alt="Salad" />
          </div>
        </div>

        <div className="drinks_heading">
          <img className="avocodo" src="./src/images/68.png" alt="Avocado" />
          <h1>Pastries & Drinks</h1>
          <p>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>
        <div className="drinks_menu">
          <div className="eat_img">
            <img src="./src/images/69.png" alt="Drinks" />
          </div>

          <div className="eats">
            <div className="eat_kind">
              <span className="price"> $158</span>
              <h1>Wine Pairing</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="eat_kind">
              <span className="price"> $168</span>
              <h1>Natural Wine Pairing</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="eat_kind">
              <span className="price"> $98</span>
              <h1>Whisky Flyer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="reservation_sec rsv">
        <div className="container__full ">
          <div className="reservation_div container">
            <h1>Make a Reservation</h1>
            <p>Get in touch with restaurant</p>
            <div>
              <input type="date" name="" defaultValue="2021-06-22" id="" />

              <div className="selectdiv">
                <input type="time" name="" className="select" />
              </div>
              <div className="selectdiv">
                <input
                  type="number"
                  placeholder="Number of people"
                  className="select"
                />
              </div>
            </div>

            <button className="book" onClick={toggleCoomingSoon}>
              Book Now
            </button>
          </div>
        </div>
      </section>
      {showCoomingSoon && <CoomingSoon toggleCoomingSoon={toggleCoomingSoon} />}
    </>
  );
}

export default Menu;
