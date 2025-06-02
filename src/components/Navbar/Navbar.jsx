import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="navbar">
      <div className="navbar-content content-wrapper">
        <Link to="/" className="logo">Paradise Nursery</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-icon">
            📦 <span className="cart-count">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;