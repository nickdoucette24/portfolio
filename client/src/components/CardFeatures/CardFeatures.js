import React from "react";
import "./CardFeatures.scss";

const CardFeatures = ({ features }) => {
  return (
    <div className="card-features">
      <div>
        <ul className="card-features__list">
          {features?.map((name, index) => (
            <li key={index} className="card-features__item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardFeatures;
