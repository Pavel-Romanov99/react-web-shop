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
          <h4>{price}</h4>
        </div>
        <div className="sizes">
          <select className="form-control form-control-sm">
            <option disabled selected>
              Size
            </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <button type="button" class="btn btn-dark">
            Add to Cart
          </button>
        </div>
        <p className="clothing-description">{description}</p>
      </div>
    </div>
  );
}
