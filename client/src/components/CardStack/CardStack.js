import React from "react";
import "./CardStack.scss";

const CardStack = ({ stack }) => {
  return (
    <div className="card-stack">
      <div>
        <ul className="card-stack__list">
          {stack?.map((name, index) => (
            <li key={index} className="card-stack__item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardStack;
