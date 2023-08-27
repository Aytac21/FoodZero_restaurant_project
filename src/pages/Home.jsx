import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoomingSoon from "../components/CoomingSoon";
function Home() {
  const [foods, setFoods] = useState([]);
  const [showCoomingSoon, setShowCoomingSoon] = useState(false);
  const toggleCoomingSoon = () => {
    setShowCoomingSoon(!showCoomingSoon);
  };
  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setFoods(data.foods));
  }, []);

  return (
    <>
      <header className="home_header">
        <div className="container">
          <div className="header_food">
            <div className="header_food_left">
              <p>Healthy Eating is important part of lifestyle</p>
              <p>Healthy eating is an essential part of a healthy lifestyle.</p>
              <p>
                Scroll <span>-----------------------------------</span>
              </p>
            </div>
            <div className="header_food_right">
              <img className="header_img" src="/Image.png" alt="" />
              <div className="food_images">
                <img src="/spices1.png" alt="" />
                <img src="/spices2.png" alt="" />
                <img src="/spices3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="header_final">
            <div className="header_planfood_left">
              <img src="/Image (1).png" alt="" />
              <h1>Start to plan your diet today</h1>
              <p>
                Additionally, healthy eating habits can improve energy levels,
                enhance mental clarity, and promote better sleep.
              </p>
            </div>
            <div className="header_planfood_right">
              <p>
                Making healthy food choices and developing good eating habits
                can have a positive impact on our physical, mental, and
                emotional well-being.
              </p>
              <img src="/Image (2).png" alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className="menu_section container__full">
        <div className="container">
          <div className="menudiv">
            <h1>Our Menu</h1>
            <p>
              This is a section of your menu. Give your section a brief
              description
            </p>
          </div>
        </div>
        <div className="menu_img">
          <img src="/Image (3).png" alt="" />
        </div>
      </section>
      <section className="menu_price">
        <div className="container">
          <div className="menuset">
            <div>
              <p>$20</p>
              <p></p>
              <h1>Deep Sea Snow White Cod Fillet</h1>
              <p>
                Cod is a popular fish for cooking due to its versatility, and
                can be baked, grilled, fried, or used in stews and chowders.{" "}
              </p>
            </div>
            <div>
              <p>$22</p>
              <p></p>
              <h1>Steak With Rosemary Butter</h1>
              <p>
                {" "}
                The steak is typically cooked to the desired level of doneness,
                whether it's rare, medium-rare, medium, or well-done, and then
                topped with a generous dollop of rosemary butter that melts into
                a luscious sauce as it coats the steak.
              </p>
            </div>
            <div>
              <p>$18</p>
              <p></p>
              <h1>Cucumber Salad</h1>
              <p>
                The salad is made by slicing cucumbers thinly and tossing them
                with a dressing made of vinegar, sugar, salt, and pepper.
              </p>
            </div>
            <div>
              <p>$90</p>
              <p></p>
              <h1>Natural Wine Pairing</h1>
              <p>
                Natural wine is wine made from organic or biodynamically grown
                grapes, with minimal intervention in the winemaking process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cook_bgcolor container__full">
        <div className="container">
          <div className="cooksection">
            <div className="cookimages">
              <img src="/Leaf.png" alt="" />
              <img src="/brown-wooden-round-plate-with-food 1.png" alt="" />
              <img src="/man-in-black-crew-neck-t-shirt-eating 1.png" alt="" />
            </div>
            <div className="cooktext">
              <h1>Excellent cook</h1>
              <p>
                Americana brings incredible blends of various cultures to the
                Desert Shores community in Las Vegas. The restaurant offers fine
                dining with a blended cultural theme of modern American cuisine.
              </p>
              <img src="/Leaf (1).png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="foodsort">
          <div>
            <i className="fa-solid fa-fish-fins"></i>
            <h3>Premium Quality</h3>
            <p>
              A sum over and above a regular price paid chiefly as an inducement
              or incentive
            </p>
          </div>
          <div>
            <i className="fa-solid fa-carrot"></i>
            <h3>Seasonal Vegetables</h3>
            <p>
              A usually herbaceous plant (such as the cabbage, bean, or potato)
              grown for an edible part that is usually eaten as part of a meal
            </p>
          </div>
          <div>
            <img src="/lemon.png" alt="" />
            <h3>Fresh Fruit</h3>
            <p>
              Fruit destined only for fresh consumption and moving in normal
              fresh fruit channels.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="foodimage">
          {foods.slice(0, 2).map((food) => (
            <div className="home_food_images">
              <div key={food.id}>
                <div
                  className="bgimages"
                  style={{ backgroundImage: `url("${food.image}")` }}
                >
                  <p>Fashion</p>
                </div>
                <div className="person">
                  <img src={food.personimage} alt="" />
                  <span>{food.personname}</span>
                  <span className="point">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span>October 17,2021</span>
                  <span className="point">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span>3:33 pm</span>
                  <span className="point">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span>2 comments</span>
                </div>
                <div className="feature_text">
                  <h1>{food.title}</h1>
                  <p className="home_point"></p>
                  <p>{food.mean.slice(0, 56)}</p>
                  <Link to={`/details/${food.id}`} className="read">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="reservation_sec container__full">
        <div className="reservation_div container">
          <h1>Make a Reservation</h1>
          <p>Get in touch with restaurant</p>
          <div>
            <input type="date" name="" defaultValue="2021-06-22" id="" />
            <div className="selectdiv">
              <div className="selectdiv">
                <input type="time" name="" className="select" />
              </div>
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
      </section>
      {showCoomingSoon && <CoomingSoon toggleCoomingSoon={toggleCoomingSoon} />}

      <section className="calories_section container">
        <div className="calories_text">
          <h1>
            Calories Energy <br />
            Balance
          </h1>
          <p>
            The balance of calories consumed through eating and drinking
            compared to calories burned through physical activity.
          </p>
        </div>
        <div className="calories_images">
          <div>
            <img src="/Image (4).png" alt="" />
            <Link to={`/starters`}>
              <h2>Starters</h2>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div>
            <img src="/Image (5).png" alt="" />
            <Link to={`/mains`}>
              <h2>Mains</h2>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div>
            <img src="/drink.png" alt="" />
            <Link to={`/drinks`}>
              <h2>Drinks</h2>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        <div className="calories_lorem">
          <p className="calories_lorem_text">
            “ Breakfast was delicious. Like a good homestyle country savory
            breakfast and Im from the south, thats saying a lot… Enjoyed the
            whole experience and definitely recommend this place for a place to
            eat on the cape.
          </p>
          <img src="/quotes.png" alt="" />
        </div>
        <div className="calories_person">
          <div className="calories_person_img">
            <img src="/Avatar 1.png" alt="" />
            <div>
              <p>John Doe</p>
              <span>homeer</span>
            </div>
          </div>
          <div className="calories_person_i">
            <i className="fa-solid fa-arrow-left-long"></i>
            <span>2/3</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
