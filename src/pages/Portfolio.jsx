import db from "/db.json";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Portfolio() {
  const [objects, setObject] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredData(objects);
    } else {
      const filtered = objects.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 2);
  };

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setObject(data.objects);
        setFilteredData(data.objects);
      });
  }, []);

  return (
    <>
      <header className="portfolio-header">
        <div className="container portfolio_header">
          <div className="portfolio_header_text">
            <h1>Portfolio - Grids</h1>
          </div>
          <div className="portfolio_header_point">
            <p>Scroll</p>
            <p className="portfolio_headpoint">----------------</p>
          </div>
        </div>
      </header>
      <section className="container">
        <div>
          <ul className="portfolio_list">
            <li className="list-prtf" onClick={() => handleCategoryClick("All")}>All</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Starter")}>Starter</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Launch")}>Launch</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Dinner")}>Dinner</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Drink")}>Drinks</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Sweets")}>Sweets</li>
            <li className="list-prtf" onClick={() => handleCategoryClick("Fruit")}>Fruits</li>
          </ul>
          <div>
            <div className="portfolio_images">
              {filteredData.slice(0, displayCount).map((object) => (
                <div
                  style={{
                    backgroundImage: `url("${object.image}")`,
                  }}
                  className="portfolio_images_img"
                >
                  <div className="portfolio_text">
                    <h1>{object.title}</h1>
                    <div className="right">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div>
                      <div className="meal">
                        <p>{object.category}</p>
                        <i className="fa-solid fa-circle"></i>
                        <p>{object.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {displayCount < filteredData.length && (
              <div className="loading_btnn">
                <button className="book" onClick={handleLoadMore}>Loading...</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
