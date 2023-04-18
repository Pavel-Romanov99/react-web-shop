import ItemCard from "../ItemCard/ItemCard";

import "./ClothingPage.css";

export default function ClothingPage({ clothing }) {
  return (
    <div className="clothing-container">
      <h1>Clothing page</h1>

      <div className="clothing-items">
        {clothing.map((x) => (
          <ItemCard className="item" key={x._id} {...x}></ItemCard>
        ))}
      </div>
    </div>
  );
}
