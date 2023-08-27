import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7777/foods/${id}`)
      .then((response) => response.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <div className="details_page">
      <div className="container">
        <div className="det_image">
          <img src={food.image} alt={food.title} />
        </div>
        <div className="det_text">
          <h2>{food.title}</h2>
          <p>{food.mean}</p>
          <div className="det_person_details">
            <img src={food.personimage} alt={food.personname} />
            <span>{food.personname}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
