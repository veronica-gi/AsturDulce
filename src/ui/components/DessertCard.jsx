import React from "react";

const DessertCard = ({ name = "Postre", description = "Descripción breve" }) => {
  return (
    <div className="dessert-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DessertCard;
