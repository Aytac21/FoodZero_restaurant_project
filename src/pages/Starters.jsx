function Starters() {
  return (
    <div className="starters_page">
      <div className="container">
        <div className="startes-heading">
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
              <p>
                The restaurant owner is the forerunner of the restaurant
                business.
              </p>
            </div>
            <div className="eat_kind">
              <span className="price"> $18</span>
              <h1>Cucumber Salad</h1>
              <p>
                These two types of dough work perfectly when the dumplings are
                either steamed or pan-fried.
              </p>
            </div>
            <div className="eat_kind">
              <span className="price"> $12</span>
              <h1>Basil Pancakes</h1>
              <p>
                Nation’s Restaurant News ranks the chains where we’re spending
                the most money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starters;
