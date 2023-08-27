import db from "/db.json";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function BlogOne() {
  const [foods, setFoods] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 2);
  };

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.foods);
        setFilteredData(data.foods);
      });
  }, []);

  return (
    <>
      <div className="bg_image_blog_one ">
        <div className="container_full">
          <div className="titles">
            <div className="title_blog_one ">Blog List - One Column</div>
            <div className="subtitle_blog_one ">
              It is easy way to create your beatiful blog for daily
            </div>
          </div>
        </div>
      </div>

      <div className="containerS">
        <div className="nav_bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Blog /</a>
            </li>
            <li>
              <a href="#">Blog List One Column /</a>
            </li>
          </ul>
        </div>

        <div>
          {filteredData.slice(0, displayCount).map((food) => (
            <div className="fruit_vegetables">
              <div className="fruit_image">
                <img src={food.image} alt="" />
                <div className="box">Fashion</div>
              </div>
              <div className="fruiet_details">
                <div className="blogger_blog_one">
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
                <h1>{food.title}</h1>
                <p className="fruiet_text">{food.mean.slice(0, 56)} </p>
                <Link to={`/details/${food.id}`} className="read_more_blog_one">
                  <span>Read More</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {displayCount < filteredData.length && (
          <div>
            <button className="loading_btn book" onClick={handleLoadMore}>
              Loading...
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogOne;
