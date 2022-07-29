import React, { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([])
  function clearCart() {
    setCartItems([])
  }
  function isInCart(id) {
    cartItems.find(product => product.id === id)
  }

  function removeProduct(id) {
    setCartItems(cartItems.filter(product => product.id !== id))
  }

  function addProduct(item, quantity) {
    let newCart
    let product = cartItems.find(product => product.id === item.id)
    if (product) {
      product.quantity += quantity
      newCart = [...cartItems]
    } else {
      product = { ...item, quantity: quantity }
      newCart = { ...cartItems, product }
    }
    setCartItems(prevState => [...prevState, { newCart }])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        clearCart,
        setCartItems,
        isInCart,
        removeProduct,
        addProduct
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
