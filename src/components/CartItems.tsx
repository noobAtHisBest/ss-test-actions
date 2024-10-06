import { useSelector } from "react-redux";
import { CartItem, CartState } from "../store/cart-slice";

export default function CartItems() {

  const cartItems = useSelector((state: CartState) => state.items);
  const formattedTotalPrice = cartItems.reduce((val, item) => val+item.price*item.quantity, 0)
  const handleRemoveFromCart = (id: string) => {
    console.log(id);
  }
  const handleAddToCart = (item: CartItem) => {
    console.log(item)
  }
  return (
    <div id="cart">

      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
