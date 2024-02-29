import React, {useState} from "react";

function PlantCard({plant}) {

  const [stock, setStock] = useState(true)

  function handleSold() {
    setStock(!stock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={handleSold}className="primary">In Stock</button>) : (<button onClick={handleSold} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
