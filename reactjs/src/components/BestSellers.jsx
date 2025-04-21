import React from 'react'

function BestSellers() {
  return (
    <>
        <section>
  <div className="container">
    <div className="row h-100">
      <div className="col-lg-7 mx-auto text-center mb-6">
        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Best Sellers</h5>
      </div>
      <div className="col-12">
        <div
          className="carousel slide"
          id="carouselBestSellers"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            {/* First Carousel Item */}
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row h-100 align-items-center g-2">
                {[
                  {
                    img: "assets/img/gallery/handbag.png",
                    title: "Marie Claire Handbag",
                    oldPrice: "$399",
                    newPrice: "$365",
                  },
                  {
                    img: "assets/img/gallery/earrings.png",
                    title: "Red Gem Earrings",
                    oldPrice: "$489",
                    newPrice: "$466",
                  },
                  {
                    img: "assets/img/gallery/lathered-wristwatch.png",
                    title: "Black Leathered Wristwatch",
                    oldPrice: "$799",
                    newPrice: "$745",
                  },
                  {
                    img: " assets/img/gallery/tie.png",
                    title: "Red-White Stripped Tie",
                   
                    oldPrice: "$299",
                    newPrice: "$243",
                  },
                ].map((item, index) => (
                  <div
                    className="col-md-3 mb-3 mb-md-0 h-100"
                    key={`carousel-item-1-${index}`}
                  >
                    <div className="card card-span h-100 text-white">
                      <img
                        className="img-fluid h-100"
                        src={item.img}
                        alt={item.title}
                      />
                      <div className="card-img-overlay ps-0"></div>
                      <div className="card-body ps-0 bg-200">
                        <h5 className="fw-bold text-1000 text-truncate">
                          {item.title}
                        </h5>
                        <div className="fw-bold">
                          <span className="text-600 me-2 text-decoration-line-through">
                            {item.oldPrice}
                          </span>
                          <span className="text-danger">{item.newPrice}</span>
                        </div>
                      </div>
                      <a className="stretched-link" href="#"></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Carousel Items */}
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  className={`carousel-item`}
                  data-bs-interval={`${(index + 2) * 5000}`}
                  key={`carousel-item-${index + 2}`}
                >
                  <div className="row h-100 align-items-center g-2">
                    {[
                      {
                        img: "assets/img/gallery/handbag.png",
                        title: "Marie Claire Handbag",
                        oldPrice: "$399",
                        newPrice: "$365",
                      },
                      {
                        img: "assets/img/gallery/earrings.png",
                        title: "Red Gem Earrings",
                        oldPrice: "$489",
                        newPrice: "$466",
                      },
                      {
                        img: "assets/img/gallery/lathered-wristwatch.png",
                        title: "Black Leathered Wristwatch",
                        oldPrice: "$799",
                        newPrice: "$745",
                      },
                      {
                        img: "assets/img/gallery/tie.png",
                        title: "Red-White Stripped Tie",
                        oldPrice: "$299",
                        newPrice: "$243",
                      },
                    ].map((item, subIndex) => (
                      <div
                        className="col-md-3 mb-3 mb-md-0 h-100"
                        key={`carousel-item-${index + 2}-${subIndex}`}
                      >
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src={item.img}
                            alt={item.title}
                          />
                          <div className="card-img-overlay ps-0"></div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              {item.title}
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                {item.oldPrice}
                              </span>
                              <span className="text-danger">
                                {item.newPrice}
                              </span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Carousel Controls */}
          <div className="row">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselBestSellers"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselBestSellers"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default BestSellers
