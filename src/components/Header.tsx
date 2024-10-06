import { useState } from 'react';

import Cart from './Cart.tsx';
import { useSelector } from 'react-redux';
import { CartState } from '../store/cart-slice.ts';


export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartQuantity = useSelector((state: CartState) => state.items.reduce((val, item) => val + item.quantity, 0))

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
