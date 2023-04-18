import CartItem from "../CartItem/CartItem";
import "./CartComponent.css";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function CartComponent({ cartItems, onCartDeleteClick }) {
  const { user } = useContext(AuthContext);

  const userItems = cartItems.filter((x) => x.user_id === user._id);

  const totalPrice = (items) => {
    var total = 0.0;
    items.forEach((element) => {
      total += parseFloat(element.price);
    });

    return total;
  };

  const total = totalPrice(userItems);

  return (
    <div className="cart-card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {userItems.length} items
              </div>
            </div>
          </div>
          {userItems.map((x) => (
            <CartItem
              key={x._id}
              {...x}
              onCartDeleteClick={onCartDeleteClick}
            ></CartItem>
          ))}
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>

          <div
            className="cart-row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; {total}</div>
          </div>
          <button className="cart-button">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
