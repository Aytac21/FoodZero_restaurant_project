function Drinks() {
  return (
    <div className="drinks_page">
      <div className="drinks-heading">
        <h1>Pastries & Drinks</h1>
        <p>
          This is a section of your menu. Give your section a brief description
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
            <p>
              The restaurant owner is the forerunner of the restaurant business.
            </p>
          </div>
          <div className="eat_kind">
            <span className="price"> $168</span>
            <h1>Natural Wine Pairing</h1>
            <p>
              Nation’s Restaurant News ranks the chains where we’re spending the
              most money.
            </p>
          </div>
          <div className="eat_kind">
            <span className="price"> $98</span>
            <h1>Whisky Flyer</h1>
            <p>
              Even the smallest changes in your routine can have a big impact on
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
