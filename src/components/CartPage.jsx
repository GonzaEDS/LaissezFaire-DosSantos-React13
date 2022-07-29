import React, { useContext } from 'react'

import { CartContext } from '../contexts/cartContext'

function CartPage() {
  const context = useContext(CartContext)
  console.log(context)
  return (
    <>
      <div className="greeting">Cart</div>
      <div>{JSON.stringify(context)}</div>
    </>
  )
}

export default CartPage
