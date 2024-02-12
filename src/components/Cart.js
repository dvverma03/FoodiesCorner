import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartList from './itemList'
import { clearCarts } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import CartItems from './cartItems';

const Cart = () => {
    const dispatch =useDispatch();
    const handaleCart=()=>{
         dispatch(clearCarts())
    }
    const cartItems= useSelector((store)=>store.cart.items)
  return (
    <div className='w-[100%] bg-gray-100 my-0'>
      <div className='text-5xl font-bold text-center py-4'>Cart</div>
      <button className='bg-black text-white font-bold py-2 px-4 text-2xl rounded-sm text-center mx-auto block' onClick={handaleCart}>clear cart</button>
      <div className='w-[50%] mx-auto'><CartItems data={cartItems}/> </div>
      {cartItems.length==0?<Link className='style-none' to="/"><h1 className='text-2xl text-center py-4 '>Please add items to the cart </h1></Link>:""}
    </div>
  )
}

export default Cart
