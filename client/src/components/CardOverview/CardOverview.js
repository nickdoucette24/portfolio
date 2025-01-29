import React from "react";
import "./CardOverview.scss";

const CardOverview = ({ overview }) => {
  return (
    <div className="card-overview">
      <div className="card-overview__text">{overview.intro}</div>
      <div className="card-overview__text">{overview.para1}</div>
      <div className="card-overview__text">{overview.para2}</div>
      <div className="card-overview__text">{overview.para3}</div>
    </div>
  );
};

export default CardOverview;
