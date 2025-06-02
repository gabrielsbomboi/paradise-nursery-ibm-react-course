import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="navbar">
      <div className="navbar-content content-wrapper">
        <NavLink to="/" className="logo">Paradise Nursery</NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-icon">
            📦 <span className="cart-count">{totalQuantity}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;