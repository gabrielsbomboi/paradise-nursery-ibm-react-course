import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import '../styles/ProductsPage.css';

function ProductsPage() {
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;
    }, {});

    Object.values(groupedProducts).forEach(arr => {
        arr.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    });

    return (
        <div className="page products-page">
            <div className="products-content content-wrapper">
                <h1>Our Plants</h1>

                {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                    <div key={category} className="category-section">
                        <h2>{category}</h2>
                        
                        <div className="products-grid">
                            {categoryProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;