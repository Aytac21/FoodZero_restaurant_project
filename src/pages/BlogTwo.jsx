import db from "/db.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogTwo() {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setFoods(data.foods));
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = foods.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(foods.length / itemsPerPage);
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
  }
  return (
    <>
      <div className="blogtwo-header">
        <header className="container">
          <div className="blog_header">
            <h1>Blogs - Two Columns</h1>
            <p>It is easy way to create your beatiful blog for daily</p>
          </div>
        </header>
      </div>
      <section className="container">
        <div className="nav_bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/blogone">Blog /</a>
            </li>
            <li>
              <a href="#">Blog Two Columns /</a>
            </li>
          </ul>
        </div>

        <div className="blog_food_images">
          <div>
            {currentItems.map((food) => (
              <div className="blogtwo-images" key={food.id}>
                <div
                  className="bgimages"
                  style={{ backgroundImage: `url(${food.image})` }}
                >
                  <p>Fashion</p>
                </div>

                <div className="blog_person">
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
                <div className="blog_featuree_text">
                  <h1>{food.title}</h1>
                  <p className="blog_point">
                    ................................................................................
                  </p>
                  <p>{food.mean.slice(0, 56)}</p>
                  <Link to={`/details/${food.id}`} className="blog_read">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="pages">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {pageButtons}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default BlogTwo;
