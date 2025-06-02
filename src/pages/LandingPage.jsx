import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="page landing-page">
        <div className="landing-content content-wrapper">
            <h1>Paradise Nursery</h1>
            <p>
                Welcome to Paradise Nursery, your one-stop destination for beautiful houseplants. 
                We specialize in bringing nature into your home with our carefully curated selection 
                of indoor plants, succulents, and flowering varieties. Transform your living space 
                into a green paradise with our healthy, vibrant plants.
            </p>
            <Link to="/products" className="button get-started-btn">
                Get your plants! 🌱
            </Link>
        </div>
    </div>
  );
}

export default LandingPage;