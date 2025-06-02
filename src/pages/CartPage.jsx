import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} from '../features/cart/cartSlice';
import { formatAsCurrency } from '../utils/formatNumber';
import '../styles/CartPage.css';

function CartPage() {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const Checkout = () => {
        alert('Your order has been placed successfully and will be at your door soon! 🌱😃✨');
        dispatch(clearCart());
    }

    return (
        <div className="page cart-page">
            <div className="cart-content content-wrapper">
                <h1>Shopping Cart</h1>
             
                {items.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
                ) : (
                <div className="cart-items">
                    {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>Unit Price: {formatAsCurrency(item.price)}</p>
                            <p>Total: {formatAsCurrency(item.totalPrice)}</p>
                        </div>

                        <div className="quantity-controls">
                            <button
                                className="button"
                                onClick={() => dispatch(decrementQuantity(item.id))}
                                disabled={item.quantity <= 1}
                            >-</button>
                            <span>{item.quantity}</span>
                            <button className="button" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                        </div>

                        <button 
                            className="button delete-btn"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            Delete
                        </button>
                    </div>
                    ))}
                </div>
                )}

                <div className="cart-summary">
                    <p>Total Items: {totalQuantity}</p>
                    <p>Total Cost: {formatAsCurrency(totalAmount)}</p>
                </div>

                <div className="cart-actions">
                    <Link to="/products" className="button continue-shopping">
                        ← Continue Shopping
                    </Link>
                    <button className="button checkout-btn" onClick={Checkout} disabled={items.length === 0}>
                        Checkout 🌱
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;