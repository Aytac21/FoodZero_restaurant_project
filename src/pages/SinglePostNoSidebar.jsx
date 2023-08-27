import db from "/db.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function SinglePostNoSidebar() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setFoods(data.foods));
  }, []);

  return (
    <>
      <div className="bg_image_single_post_no">
        <div className="containerS">
          <div className="titles">
            <div className="title_single_post_no">
              <button className="fashion_btn">Fashion</button>
              Three Ideas for Cooking Goat Meat at Home
            </div>
          </div>
          <div className="blogger">
            <img src="./src/images/Avatar.png" alt="" />
            <ul>
              <li>Julie Christie</li>
              <li className="circle">.</li>
              <li>
                <span>October 17,2021</span>
              </li>
              <li className="circle">.</li>
              <li>
                <span>3:33 pm</span>
              </li>
              <li className="circle">.</li>
              <li>
                <span>3 comments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="containerS">
        <div className="breadcrumbs">
          <p>
            Home / Blog / <span>Vegan baked oatmeal with fresh berries</span>
          </p>
          <h3>
            This Vegan Baked Oatmeal is an easy breakfast perfect to feed a
            crowd on the weekend or to meal prep a week of healthy
            breakfast.Plus, this baked oatmeal is ready in less than 30 minutes
            and easy to tweak to create a variety of flavors.
          </h3>
        </div>
        <div className="meat_photos">
          <img src="./src/images/Image (6).png" />
          <img src="./src/images/Image (7).png" />
        </div>
        <div className="content">
          <p>
            Moist vegan baked oatmeal naturally sweetened with a dash of maple
            syrup and made with simple and healthy ingredients like rolled oats,
            bananas, and fresh fruit. This vegan baked oats recipe is the best
            breakfast with 10 different variations. Made gluten free, egg free,
            dairy free, and refined sugar free.Baked oatmeal is the best. I am
            simply obsessed on every level! It is easy to make, super moist,
            always tasty, healthy, and nourishing.Most baked oatmeal recipes
            call for eggs, which makes this baked oats recipe so special…. it is
            100% VEGAN and PLANT-BASED! That means there are no eggs, no animal
            products, and no dairy in this healthy oatmeal recipe. I cannot
            recommend this oatmeal bake recipe enough. First, it tastes like you
            are eating cake for breakfast, but is naturally sweetened with
            bananas and a dash of maple syrup. Second, it only uses healthy and
            real ingredients that can be found in any grocery store. Third, any
            level cook can make this recipe.
          </p>
        </div>
      </div>

      <div className="bg_image_meat">
        <p>
          “ This recipe is such a treat in the morning. It is moist on the inside with a bit of crunch on the outside. Meal prep this fresh fruit vegan baked oatmeal early in the week and enjoy the best breakfast every morning!
        </p>
      </div>

      <div className="content">
        <p>
        Vegan baked oatmeal is incredibly easy to make and is the best for meal prep breakfast. All you need to do is mix all the ingredients together in one bowl, top with some fresh fruit, and bake in the oven. Here are step by step instructions on how to make your new favorite oatmeal bake breakfast recipe: First, preheat your oven to 375°F and lightly grease a 9-inch square dish with cooking oil or avocado oil spray. Then, in a large bowl, combine the mashed banana, almond milk, maple syrup, melted coconut oil, and vanilla extract. Whisk together the wet ingredients to fully combine. In another bowl, mix together the rolled oats, ground flaxseed, baking powder, cinnamon, salt, and nuts.Next, pour the dry ingredients into the wet ingredients and hand fold in your mix-in of choice (blueberries, strawberries, chocolate chips, raspberries, blackberries) and nut of choice (almonds, walnuts, pecans, peanuts).Finally, pour the mixture into the greased baking dish and bake for 35 – 40 minutes, until the top is golden and the center is done.Enjoy with peanut butter, almond butter, greek yogurt, or maple syrup, and top with fresh berries!
        </p>
      </div>

      <div className="containerS">
        <div className="tags">
          <h2>Tags :</h2>
          <ul>
            <li>Design</li>
            <li>Photography</li>
            <li>Images</li>
            <li>Video</li>
            <li>Music</li>
            <li>Travel</li>
          </ul>
        </div>
        <div className="blogger_about">
          <img src="./src/images/Avatar.png" alt="" />
          <div className="blogger_details">
            <h1>Julie Christie</h1>
            <p>
            Julie Frances Christie (born 14 April 1940) is a British actress. An icon of the Swinging Sixties, Christie is the recipient of numerous accolades including
            </p>
          </div>
        </div>

        <div className="related_posts">
          <div className="dashed"></div>
          <h1>Related Posts</h1>

          <div className="posts">
            {db.foods.slice(0, 2).map((food) => (
              <div className="fruit_vegt">
                <img src={food.image} alt="" />
                <p>Fashion</p>
                <div className="blogger_dtl">
                  <img src={food.personimage} alt="" />
                  <ul>
                    <li>{food.personname}</li>
                    <li className="circle">.</li>
                    <li>
                      <span>October 17,2021</span>
                    </li>
                    <li className="circle">.</li>
                    <li>
                      <span>3:33 pm</span>
                    </li>
                    <li className="circle">.</li>
                    <li>
                      <span>3 comments</span>
                    </li>
                  </ul>
                </div>
                <div className="blogger_heading">
                  <h1>{food.title}</h1>
                  <h5>{food.mean.slice(0, 56)}</h5>
                  <Link
                    to={`/details/${food.id}`}
                    className="read_more_no_sidebar"
                  >
                    <h2>Read More</h2>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePostNoSidebar;
