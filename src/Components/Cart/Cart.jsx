import React from 'react';

const Cart = ({cart}) => {
    const courseTotal = cart.reduce((sum,course) => sum + course.price, 0);
    const tax = courseTotal/10;

    return (
        <div>
            <h1>Total Item order: {cart.length}</h1>
            <p>Price: {courseTotal}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {courseTotal + tax}</p>
            <button>Place Oder{}</button>
        </div>
    );
};

export default Cart;