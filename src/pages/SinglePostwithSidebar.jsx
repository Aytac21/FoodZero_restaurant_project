import { Link } from "react-router-dom";
import { useEffect } from "react";
import db from "/db.json";

import { useState } from "react";
function SinglePostwithSidebar({ categories }) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchModalDatas, setSearchModalDatas] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setFoods(data.foods));
    setLoading(false);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  if (selectedProduct) {
    return <div>Product details page</div>;
  }

  const toggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
    setSearchModalDatas([
      ...foods.filter((a) => a.title.includes(searchValue)),
    ]);
    searchModalDatas.map((a) => console.log(a));
  };
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          <header className="singlepostheader">
            <div className="container">
              <div className="single_post_header">
                <button>Fashion</button>
                <h1>
                  Three Ideas for Cooking <br />
                  Goat Meat at Home
                </h1>
                <div className="single_post_person">
                  <img src="/Avatar.png" alt="" />
                  <span>Julie Christie</span>
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
              </div>
            </div>
          </header>
          <main className="container">
            <section className="right_section">
              <div>
                <div>
                  <div className="nav_bar single_post_select">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <a href="/blogone">Blog /</a>
                      </li>
                      <li>
                        <a href="#">
                          Three Ideas for Cooking Goat Meat at Home /
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="single_post_lorem">
                    Goat meat, also known as a kid or chevon, is a type of red
                    meat from the domestic goat. Goats are one of the earliest
                    domesticated animals that efficiently produce both milk and
                    meat. Goat is one of the most popular red meats globally and
                    is a mainstay in Asian, African, Middle Eastern, Indian,
                    Latin, and Caribbean cuisines. Goat meat is naturally lean,
                    containing less saturated fat and cholesterol than beef or
                    chicken. Due to its leanness, goat tends to dry out during
                    the cooking process, so it is often cooked in a marinade or
                    stew to retain its moisture. Braising or stewing goat meat
                    low and slow with liquid can yield succulent results. In the
                    United States, goat meat is available from halal butchers
                    and Latin American grocery stores, where it may be labeled
                    as cabrito.
                  </p>
                </div>
                <div className="single_post_foodimages">
                  <div>
                    <img src="/Image 16.png" alt="" />
                  </div>
                  <div>
                    <img src="/Image 17.png" alt="" />
                    <img src="/Image 18.png" alt="" />
                  </div>
                </div>
                <div>
                  <p className="single_post_lorem">
                    Goat meat has a bold, gamey flavor. Marinating the meat or
                    pairing it with other strong flavors can tone down this
                    gaminess. Compared to other red meats, goat is sweeter than
                    lamb but less sweet than beef and is leaner than both
                    options
                  </p>
                </div>
              </div>
              <div className="single_post_greenlorem">
                <p>
                  “ Depending on the cut of goatmeat, it can be prepared by
                  grilling, braising, and stewing. The simple rule is for tender
                  cuts use dry cooking methods and for less tender cuts use
                  moist heat such as braising and stewing.
                </p>
                <img src="/simvol.png" alt="" />
              </div>
              <div>
                <p className="single_post_lorem_long">
                  Often referred to as mutton or chevon (which sounds slightly
                  more appealing than goat meat), goat is appearing more and
                  more on supermarket shelves and is making its way into
                  Australian home kitchens. If you have spotted it on the shelf
                  but are unsure of what to do with it, why not turn to some of
                  these recipes for inspiration?
                </p>
              </div>
              <div className="single_post_tags">
                <h3>Tags:</h3>
                <ul>
                  <li>Design</li>
                  <li>Photography</li>
                  <li>Images</li>
                  <li>Video</li>
                  <li>Music</li>
                  <li>Travel</li>
                </ul>
              </div>
              <div className="single_post_avatar">
                <div>
                  <img src="/Avatar.png" alt="" />
                </div>
                <div>
                  <h4>Julie Christie</h4>
                  <p>
                    A good restaurant sets a high standard for its food quality
                    and ensures that guests receive the same quality with every
                    meal.
                  </p>
                </div>
              </div>
            </section>
            <aside>
              <i onClick={toggleSection} className="fa-solid fa-sliders"></i>

              <section className={isSectionOpen ? "section open" : "section"}>
                <div className="single_post_search">
                  <div className="single_postsearch">
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => handleChangeSearch(e)}
                      placeholder="Search....."
                    />
                    {searchModalDatas.length ? (
                      <ul className="search__modal">
                        {searchModalDatas.map((a) => (
                          <Link key={a.id} to={`/details/${a.id}`}>
                            {a.title}
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      <></>
                    )}
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <p></p>
                  <ul>
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                      >
                        {product.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single_post_categories">
                  <h4>Categories</h4>
                  <p className="single_post_point"></p>
                  <ul>
                    {db.categories.map((category) => (
                      <li>
                        <p>{category.name}</p>
                        <p>{category.number}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="single_post_comment">
                  <p className="single_comment">Recent Comments</p>
                  <p className="single_post_point"></p>
                  <div>
                    {db.comments.map((comment, index) => (
                      <p key={index}>
                        <span>{comment.name}</span> {comment.comment}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="single_post_achives">
                  <h4>Archives</h4>
                  <p className="single_post_point"></p>
                  <ul>
                    {db.achives.map((archive, index) => (
                      <li key={index}>
                        <p>{archive.time}</p>
                        <p>{archive.number}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="recent_posted">
                  <h1>Recent Posted</h1>
                  <p className="single_post_point"></p>
                  <div>
                    <div className="recent_posted_div">
                      <div>
                        <img src="/fruit.png" alt="" />
                      </div>
                      <div>
                        <p>Vegan baked oatmeal with fresh berries</p>
                        <p>
                          <span>Julie Christie</span>
                          <span>October 17,2021</span>
                        </p>
                      </div>
                    </div>
                    <div className="recent_posted_div">
                      <div>
                        <img src="/Feature Image (1).png" alt="" />
                      </div>
                      <div>
                        <p>Vegan baked oatmeal with fresh berries</p>
                        <p>
                          <span>Julie Christie</span>
                          <span>October 17,2021</span>
                        </p>
                      </div>
                    </div>
                    <div className="recent_posted_div">
                      <div>
                        <img src="/image 11.png" alt="" />
                      </div>
                      <div>
                        <p>Vegan baked oatmeal with fresh berries</p>
                        <p>
                          <span>Julie Christie</span>
                          <span>October 17,2021</span>
                        </p>
                      </div>
                    </div>
                    <div className="recent_posted_div">
                      <div>
                        <img src="/image (9).png" alt="" />
                      </div>
                      <div>
                        <p>Vegan baked oatmeal with fresh berries</p>
                        <p>
                          <span>Julie Christie</span>
                          <span>October 17,2021</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tags">
                  <h3>Tags:</h3>
                  <p className="single_post_point"></p>
                  <ul>
                    <li>Design</li>
                    <li>Photography</li>
                    <li>Images</li>
                    <li>Video</li>
                    <li>Music</li>
                    <li>Travel</li>
                  </ul>
                </div>
              </section>
            </aside>
          </main>
          <section className="single_post_bgimage container__full">
            <div style={{ backgroundImage: "url('/Image (10).png')" }}>
              <Link to={"/singlepostnosidebar"}>
                <i className="fa-solid fa-arrow-left-long"></i>
                <p>PREVIOUS POST</p>
              </Link>
              <p>
                7 Reasons to Start Your Day With Lemon <br />
                Water
              </p>
            </div>
            <div style={{ backgroundImage: "url('/Image (8).png')" }}>
              <Link to={"/about"}>
                <p>NEXT POST</p>
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <p>
                12 Sparkling Wines We're Loving This <br />
                Summer
              </p>
            </div>
          </section>
          <section className="people_comments container">
            <h1>5 Comments</h1>
            <ul>
              <li>
                <div>
                  <img src="/Avatar (5).png" alt="" />
                </div>
                <div>
                  <p>
                    <span>Leslie Alexander</span>
                    <span>Reply</span>
                  </p>
                  <p>March 12,2020,7:08 pm</p>
                  <p>
                    One of the key characteristics of a successful restaurant is
                    a positive customer experience, explains The Restaurant
                    Times.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="/Avatar (2).png" alt="" />
                </div>
                <div>
                  <p>
                    <span>Jenifier Lopez</span>
                    <span>Reply</span>
                  </p>
                  <p>March 12,2020,7:08 pm</p>
                  <p>
                    The staff who interact with your guests should be courteous
                    and maintain a positive attitude.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="/Avatar (7).png" alt="" />
                </div>
                <div>
                  <p>
                    <span>Jane Cooper</span>
                    <span>Reply</span>
                  </p>
                  <p>March 12,2020,7:08 pm</p>
                  <p>
                    All staff should help to keep the restaurant clean at all
                    times, including the kitchen, food preparation areas and any
                    areas that guests come into contact with.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <img src="/Avatar (5).png" alt="" />
                </div>
                <div>
                  <p>
                    <span>Jenny Wilson</span>
                    <span>Reply</span>
                  </p>
                  <p>March 12,2020,7:08 pm</p>
                  <p>
                    Make sure you check your online reviews on a regular basis
                    to learn what customers think of the experience they
                    received at your restaurant.
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="container reply_section">
            <div className="reply_div">
              <h2>Leave a Reply</h2>
              <label htmlFor="">
                Comment
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </label>
              <label htmlFor="">
                Name*
                <input type="text" />
              </label>
              <label htmlFor="">
                Email*
                <input type="email" />
              </label>
              <label htmlFor="">
                Website
                <input type="url" />
              </label>
            </div>
            <button>Post Comment</button>
          </section>
        </>
      )}
    </>
  );
}

export default SinglePostwithSidebar;
