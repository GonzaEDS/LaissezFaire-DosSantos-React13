import React, { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([])
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
