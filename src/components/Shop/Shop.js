import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addToCart } from '../../redux/actions/cartActions';

const Shop = (props) => {
    const {products, addToCart} = props;

    return (
        <div>
            <h5>this is shop</h5>
            {
                products.map(pd => 
                    <Products 
                        product={pd} 
                        key={pd.id} 
                        addToCart={addToCart}
                    ></Products>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// https://react-redux.js.org/introduction/getting-started
// https://react-redux.js.org/tutorials/connect

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop)
// export default Shop;
// ---------- or -----------
// connect(mapStateToProps, mapDispatchToProps)(Shop)
// export default Shop;

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
