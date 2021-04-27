import React from 'react';

const Products = (props) => {
    const {addToCart, product} = props;

    return (
        <div style={{backgroundColor: 'lightseagreen', width: '30%', padding: '10px', marginBlock: '15px'}}>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product.id, product.name)}>add to  cart</button>
        </div>
    );
};

export default Products;