import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart Length: {cart.length}</h3>
            
            <div className="cart-container">
                {
                    cart.map(bottle => 
                    <div className='cart-info' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}

export default Cart;