import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import RestaurantItemList from './RestaurantItemList'



const Cart = () => {


    const cartItems = useSelector((store) =>  store.cart.items );

  return (
    <>
    <Header></Header>
    <div className='text-center m-5 p-5' >
        <RestaurantItemList items={cartItems}></RestaurantItemList>
    </div>
    </>
  )
}

export default Cart