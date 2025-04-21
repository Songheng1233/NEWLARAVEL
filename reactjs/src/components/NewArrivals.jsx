import React from 'react'

function NewArrivals() {
  return (
    <>
        <section className="py-0">
  <div className="container">
    <div className="row h-100">
      <div className="col-lg-7 mx-auto text-center mb-6">
        <h5 className="fs-3 fs-lg-5 lh-sm mb-3">New Arrivals</h5>
      </div>
      <div className="col-12">
        <div className="carousel slide" id="carouselNewArrivals" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First carousel item */}
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row h-100 align-items-center g-2">
                {["full-body.png", "formal-coat.png", "ocean-blue.png", "sweater.png"].map((imgSrc, idx) => (
                  <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100" key={idx}>
                    <div className="card card-span h-100 text-white">
                      <img className="card-img h-100" src={`assets/img/gallery/${imgSrc}`} alt="..." />
                      <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                        <h6 className="text-primary">$175</h6>
                        <p className="text-400 fs-1">Jumper set for Women</p>
                        <h4 className="text-light">
                          {imgSrc.includes("full-body")
                            ? "Flat Hill Slingback"
                            : imgSrc.includes("formal-coat")
                            ? "Ocean Blue Ring"
                            : imgSrc.includes("ocean-blue")
                            ? "Brown Leathered Wallet"
                            : "Silverside Wristwatch"}
                        </h4>
                      </div>
                      <a className="stretched-link" href="#"></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Additional carousel items */}
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div className="carousel-item" data-bs-interval={5000 - idx * 2000} key={idx}>
                  <div className="row h-100 align-items-center g-2">
                    {["full-body.png", "formal-coat.png", "ocean-blue.png", "sweater.png"].map((imgSrc, idx) => (
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100" key={idx}>
                        <div className="card card-span h-100 text-white">
                          <img className="card-img h-100" src={`assets/img/gallery/${imgSrc}`} alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">
                              {imgSrc.includes("full-body")
                                ? "Flat Hill Slingback"
                                : imgSrc.includes("formal-coat")
                                ? "Ocean Blue Ring"
                                : imgSrc.includes("ocean-blue")
                                ? "Brown Leathered Wallet"
                                : "Silverside Wristwatch"}
                            </h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="row">
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="next">
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

export default NewArrivals
