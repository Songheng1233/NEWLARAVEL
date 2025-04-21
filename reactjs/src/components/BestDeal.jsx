import React from 'react'

function BestDeal() {
  return (
    <>
        <section className="py-0">
  <div className="container">
    <div className="row h-100">
      <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
      </div>
      <div className="col-12">
        <div
          className="carousel slide"
          id="carouselBestDeals"
          data-bs-touch="true"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            {/* Carousel items */}
            {[...Array(4)].map((_, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <div className="row h-100 align-items-center g-2">
                  {[...Array(4)].map((_, colIndex) => (
                    <div
                      className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100"
                      key={colIndex}
                    >
                      <a href={`/product/${colIndex}`} className="text-decoration-none">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src={`assets/img/gallery/${
                              colIndex % 4 === 0
                                ? 'flat-hill.png'
                                : colIndex % 4 === 1
                                ? 'blue-ring.png'
                                : colIndex % 4 === 2
                                ? 'wallet.png'
                                : 'wrist-watch.png'
                            }`}
                            alt="..."
                          />
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              {colIndex % 4 === 0
                                ? 'Flat Hill Slingback'
                                : colIndex % 4 === 1
                                ? 'Ocean Blue Ring'
                                : colIndex % 4 === 2
                                ? 'Brown Leathered Wallet'
                                : 'Silverside Wristwatch'}
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $200
                              </span>
                              <span className="text-primary">$175</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBestDeals"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselBestDeals"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <a className="btn btn-lg btn-dark" href="#!">View All</a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default BestDeal
