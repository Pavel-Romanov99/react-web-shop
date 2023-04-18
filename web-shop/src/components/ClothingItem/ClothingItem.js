import "./ClothingItem.css";

export default function ClothingItem({ title, imgUrl, description, price }) {
  return (
    <div className="item-container">
      <div className="left-side">
        <img className="details-image" src={imgUrl} alt="" />
      </div>
      <div className="right-side">
        <div className="heading">
          <h3>{title}</h3>
          <h4>{price} лв.</h4>
          <p className="clothing-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
