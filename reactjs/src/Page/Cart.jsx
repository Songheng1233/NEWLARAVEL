import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Cart() {
  const { cart, totalItem, totalPrice, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before proceeding to checkout.");
      return;
    }
    navigate('/payment', { state: { carts: cart, total: totalPrice } }); // Pass cart data as state
  };

  return (
    <section className="py-5">
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold">Your Cart</h3>
        </div>
        {cart.length > 0 ? (
          <>
            <div className="row gx-3 gy-3">
              {cart.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card h-100"
                    style={{ borderRadius: '10px', overflow: 'hidden' }}
                  >
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt={item.title}
                      style={{
                        objectFit: 'contain',
                        height: '150px',
                        background: '#f9f9f9',
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-truncate">{item.title}</h5>
                      <p className="fw-bold text-primary">${item.price.toFixed(2)}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-end">
              <h5>Total Items: {totalItem}</h5>
              <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
              <button
                className="btn btn-primary mt-3"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    
    </section>
  );
}

export default Cart;
