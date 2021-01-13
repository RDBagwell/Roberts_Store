import React from 'react';

import CustomButton from '../Buttons/CustomButton/CustomButton';

import './cartdropdown.scss';

const CartDropDown = ()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown