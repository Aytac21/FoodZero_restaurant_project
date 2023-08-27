function Mains() {
  return (
    <div className="mains_page">
      <div className="mains-heading">
        <h1>Mains</h1>
        <p>
          This is a section of your menu. Give your section a brief description
        </p>
      </div>

      <div className="mains_menu">
        <div className="eats">
          <div className="eat_kind main_eat_kind">
            <span className="price"> $20</span>
            <h1>Deep Sea Snow White Cod Fillet</h1>
            <p>Depending on the cut of goatmeat, it can be prepared by grilling, rotisserie, broiling, roasting, sautéing, pan-frying, braising, and stewing.</p>
          </div>
          <div className="eat_kind main_eat_kind">
            <span className="price"> $22</span>
            <h1>Steak With Rosemary Butter</h1>
            <p>Even the smallest changes in your routine can have a big impact on your health.</p>
          </div>
          <div className="eat_kind main_eat_kind">
            <span className="price"> $20</span>
            <h1>Steaks with Grilled Kimchi</h1>
            <p>These two types of dough work perfectly when the dumplings are either steamed or pan-fried.</p>
          </div>
        </div>
        <div className="eat_img main_eat_img">
          <img src="./src/images/67.png" alt="Salad" />
        </div>
      </div>
    </div>
  );
}

export default Mains;
