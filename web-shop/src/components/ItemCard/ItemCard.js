import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import "./ItemCard.css";
import { useForm } from "../../hooks/useForm";

export default function ItemCard({
  imgUrl,
  title,
  price,
  _id,
  onClothingDeleteClick,
  onCartAddSubmit,
}) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  var id;
  if (user === null) {
    id = "";
  } else {
    id = user._id;
  }

  const { values, onChange, onSubmit } = useForm(
    {
      size: "",
      imgUrl: imgUrl,
      title: title,
      price: price,
      user_id: id,
    },
    onCartAddSubmit
  );

  const redirectToDetails = () => {
    navigate("/clothing/" + `${_id}`);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();

    onClothingDeleteClick(id);
  };

  return (
    <div className="clothing-card">
      <div
        className="clothing-card__image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="clothing-card__details">
        <h2 className="clothing-card__title">{title}</h2>
        <p className="clothing-card__price">{price}лв.</p>
      </div>
      {values.user_id !== "" && (
        <form className="cart-form" onSubmit={onSubmit}>
          <select
            className="form-control form-control-sm"
            name="size"
            value={values.size}
            onChange={onChange}
          >
            <option disabled selected>
              Size
            </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <button type="submit" class="btn btn-dark submit-button">
            Add to Cart
          </button>
        </form>
      )}

      {user && user.email === "admin@abv.bg" && (
        <button
          type="button"
          class="btn btn-danger details"
          onClick={(e) => deleteHandler(e, _id)}
        >
          Delete Item
        </button>
      )}
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
