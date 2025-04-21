import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  // Use useEffect to fetch product details
  useEffect(() => {
    async function fetchProductData() {
      setLoading(true);  // Always set loading state to true when fetching
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);  // Set the fetched product
        setLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        setLoading(false);
      }
    }
    
    fetchProductData();
  }, [id]);

  // Handle quantity increment and decrement
  const handleIncrement = () => setQuantity((prev) => Math.min(prev + 1, 10)); // Max 10
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1)); // Min 1

  // Handle Add to Cart action
  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div className="error-message">Product not found</div>;

  return (
    <>
      <div className="product-details section-padding mt-5">
        <div className="container">
          <div className="row product-inner">
            {/* Product Image */}
            <div className="col-lg-7 col-xl-7 product-image">
              {/* Lazy loading the image */}
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                loading="lazy"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            {/* Product Info */}
            <div className="col-lg-5 col-xl-4 product-info">
              <h3 className="product-title">{product.title}</h3>
              <h2 className="product-price">${product.price}</h2>
              <ul className="product-meta">
                <li>
                  <span>Category:</span> {product.category}
                </li>
                <li>
                  <span>Availability:</span> In Stock
                </li>
              </ul>
              <p className="product-description">{product.description}</p>

              {/* Quantity and Add to Cart */}
              <div className="product-actions">
                <div className="quantity-control">
                  <button className="btn-decrement" onClick={handleDecrement}>
                    -
                  </button>
                  <input type="text" value={quantity} readOnly />
                  <button className="btn-increment" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button className="btn-add-to-cart mt-3" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Added to Cart Message */}
        {showMessage && (
          <div className="cart-message">
            Added to shopping cart successfully!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
