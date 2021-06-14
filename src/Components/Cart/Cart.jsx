import React from 'react';

const Cart = ({cart}) => {

    const courseTotal = cart.reduce((sum,course)=> sum + course.price,0);
    return (
        <div>
            <h1>Total Item order: {cart.length}</h1>
            <p>Price: {courseTotal}</p>
        </div>
    );
};

export default Cart;