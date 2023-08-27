import { useState } from "react";
import CoomingSoon from "../components/CoomingSoon";
function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  const [showCoomingSoon, setShowCoomingSoon] = useState(false);
  const toggleCoomingSoon = () => {
    setShowCoomingSoon(!showCoomingSoon);
  };
  return (
    <>
      <div className="bg_image_about">
        <div className="container_full">
          <div className="about_title">
            <h1>Who We Are</h1>
            <p>
              The most important thing for us is to give you the comfortable
              dining experience
            </p>
          </div>
        </div>
      </div>

      <div className="containerS">
        <div className="restaurant_story">
          <div className="story_heading">
            <h1>Our Story</h1>
            <p>
            Tom Sellers tells his story and the story of British food through an ever-evolving tasting menu of seasonal dishes. The restaurant gained its first Michelin star after five months of opening in 2013 and its second Michelin star in 2021.
            </p>
          </div>
          <div className="tomato_img">
            <img src="./src/images/Tomato.png" alt="" />
          </div>
          <div className="story_image">
            <img src="./src/images/71.png" alt="" />
          </div>
        </div>
        <div className="organizations">
          <div className="restaurant_manager">
            <div className="manager_name">
              <h2>Restuarant Manager</h2>
              <p>Corson Hugn</p>
            </div>
            <div className="manager_image">
              <img src="./src/images/manager.png" alt="" />
            </div>
            <div className="manager_about">
              <p>
              Corson joined Restaurant Story in late 2017 his career has taken him through the kitchens of The Ritz in London, Per Se in New York and L’enclume in the Lake District. 
              </p>
            </div>
          </div>
          <div className="restaurant_chef">
            <div className="chef_about">
              <p>
              Native Peruvian Jane started his Story with us in 2016. Working from Demi Chef to Sous Chef, Jane has returned to us after a year of gaining experience and knowledge outside of Story, with a fellow Story Alumni.
              </p>
            </div>
            <div className="chef_name">
              <h2>Executive Chef</h2>
              <span>Jane Cooper</span>
            </div>
            <div className="chef_image">
              <img src="./src/images/chef.png" alt="Chef" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg_delicious">
        <div className="details">
          <h1>It looks delicious</h1>
          <p>The delicious smell of freshly made coffee came from the kitchen.</p>
          <i onClick={toggleVideo} className="fa-regular fa-circle-play"></i>
          {isVideoOpen && (
            <div className="modal">
              <iframe
                width="942"
                height="530"
                src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
                title="Mr Fox Restaurant Promo Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="containerS">
        <div className="process">
          <img src="./src/images/rosemary.png" alt="" />
          <h1>Sophisticated Process</h1>

          <div className="process_1">
            <img src="./src/images/1step.png" alt="" />
            <div className="step1">
              <h1>01.Slice</h1>
              <p>
              The boutique Az Meat Co shop offers the unbeatable product range and quality. Our all-natural veal puts a smile on a face of any food connoisseur or professional chef. Not sure what to choose? Our dedicated team of professionals is ready to guide you through the best offers available today. No meat-lover would leave disappointed!
              </p>
            </div>
          </div>
          <div className="process_2">
            <div className="step3">
              <h1>03.Bake</h1>
              <p>
              For thicker cuts of meat, in your 450° oven, you should expect about 10 minutes after searing on the stovetop. 
              </p>
              <img src="./src/images/stake.png" alt="Stake" />
            </div>
            <div className="step2">
              <img src="./src/images/meal.png" alt="" />
              <h1>02.Pickled</h1>
              <p>
              Pickling meat is a way of curing and preserving different types of meat. This method was developed before the days of refrigeration or easy access to ice for keeping meats cold. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="rosemory" src="./src/images/rosemary2.png" alt="" />
      <section className="reservation_sec bg_green_color ">
        <div className="container_full">
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
        </div>
      </section>
      {showCoomingSoon && <CoomingSoon toggleCoomingSoon={toggleCoomingSoon} />}
    </>
  );
}

export default About;
