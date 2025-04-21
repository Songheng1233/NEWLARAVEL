import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { total = 0, carts = [] } = state || {}; // Fallback values to prevent errors
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleApprove = (orderId) => {
    // Save payment and cart data to history
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const updatedHistory = [...history, { orderId, items: carts, total }];
    localStorage.setItem("history", JSON.stringify(updatedHistory));

    // Clear cart
    localStorage.removeItem("cart");

    setPaymentCompleted(true);
    setShowModal(true); // Show modal after payment completion
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home page after closing the modal
  };

  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Acp1Csrm2lgkPdhF9WNKKglMd-1KnxG1jY2chJ2AFgSHIse6RWW3SxRTExk4zIx6R10a1YfT31HnWXo0",
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "60vh", paddingTop: "100px" }}
        >
          <div className="container">
            <div className="card shadow-lg border-0 rounded-lg mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-header text-center bg-primary text-white">
                <h2 className="mb-0">Complete Your Payment</h2>
              </div>
              <div className="card-body">
                <div className="text-center mb-4">
                  <h4 className="text-secondary">
                    Total Amount: <span className="text-dark">${(total + 10).toFixed(2)}</span>
                  </h4>
                  <p className="text-muted">(Includes a flat $10 shipping fee)</p>
                </div>
                <div className="d-flex justify-content-center">
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: (total + 10).toFixed(2),
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        handleApprove(details.id); // Pass the order ID
                      });
                    }}
                    onError={(err) => {
                      console.error("Payment Error:", err);
                      alert("An error occurred during the payment process.");
                    }}
                  />
                </div>
              </div>
              {paymentCompleted && (
                <div className="card-footer bg-success text-white text-center">
                  <h5>Payment Successful!</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </PayPalScriptProvider>

      {/* Modal Popup for Thank You Message */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-labelledby="thankYouModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="thankYouModalLabel">
                  Thank You for Your Purchase!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body">
                <p>Your order has been successfully placed. Thank you for shopping with us!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={closeModal}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    
    </>
  );
};

export default Payment;
