import React from 'react';
const Product = (props) => {
    const { img, name, price, } = props.product;

    return (

        <div className="col">
            <div className="card h-300 shadow-sm">
                <img src={img} className="card-img-top w-50 mx-auto pt-2" alt="" />
                <div className="card-body h-400">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text pb-4">Price: {price}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn  p-2 d-flex align-items-center justify-content-center'>
                    <p className='btn-text fw-normal pe-2'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;