import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Exclusive from "../components/Exclusive";
import Category from "../components/Category";
import NewArrivals from "../components/NewArrivals";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";

function Home() {
  return (
    <>
      <Navbar />
      <section className="py-11 bg-light-gradient border-bottom border-white border-5">
        <div
          className="bg-holder overlay overlay-light"
          style={{
            backgroundImage: "url('assets/img/gallery/header-bg.png')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="row flex-center">
            <div className="col-12 mb-10">
              <div className="d-flex align-items-center flex-column">
                
                <h1 className="fs-4 fs-lg-8 fs-md-6 fw-bold">
                  Enjoy With My Website
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Category products={[
        { id: 1, title: 'Product 1', image: 'path/to/image1.jpg', price: 29.99 },
        { id: 2, title: 'Product 2', image: 'path/to/image2.jpg', price: 39.99 },
        { id: 3, title: 'Product 3', image: 'path/to/image3.jpg', price: 49.99 },
      ]} />
      <Collections />
      {/* <BestSellers /> */}
      <Exclusive />
      <NewArrivals />
      
    </>
  );
}

export default Home;
