import ItemCard from "../ItemCard/ItemCard";

import "./ClothingPage.css";

export default function ClothingPage({
  clothing,
  onClothingDeleteClick,
  onCartAddSubmit,
}) {
  return (
    <div className="clothing-container">
      <h1>Clothing page</h1>
      <hr />

      <div className="clothing-items">
        {clothing.map((x) => (
          <ItemCard
            className="item"
            key={x._id}
            {...x}
            onClothingDeleteClick={onClothingDeleteClick}
            onCartAddSubmit={onCartAddSubmit}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
}
