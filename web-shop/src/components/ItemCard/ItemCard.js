import { Link, useNavigate } from "react-router-dom";
import "./ItemCard.css";

export default function ItemCard({ imgUrl, title, price, _id }) {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate("/clothing/" + `${_id}`);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={imgUrl} alt="Not found" />
      </div>
      <div className="item-info">
        <h4>{title}</h4>
        <span>
          Price: <span className="price">{price}</span>
        </span>
      </div>
      <div className="cart-container">
        <select className="form-control form-control-sm">
          <option disabled selected>
            Size
          </option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button type="button" class="btn btn-link">
          Add Cart
        </button>
      </div>
      <button
        type="button"
        class="btn btn-dark details"
        onClick={redirectToDetails}
      >
        Details
      </button>
    </div>
  );
}
