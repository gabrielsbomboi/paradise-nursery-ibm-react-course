import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { formatAsCurrency } from '../../utils/formatNumber';
import './ProductCard.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>
        <p className="price">{formatAsCurrency(product.price)}</p>

        <button
            onClick={() => handleAddToCart(product)}
            disabled={isInCart(product.id)}
            className="button"
        >
            {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
        </button>
    </div>
  );
}

export default ProductCard;