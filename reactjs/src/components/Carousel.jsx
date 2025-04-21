import React from 'react'

function Carousel() {
  return (
   <>
    <section className="py-11">
        <div
          className="bg-holder overlay overlay-0"
          style={{
            backgroundImage: "url(assets/img/gallery/cta.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/*/.bg-holder*/}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="carousel slide carousel-fade"
                id="carouseCta"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            visit our Outlets in
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            London
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            See Addresses
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            visit our Outlets in
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            Bristol
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            See Addresses
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            visit our Outlets in
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            Birmingham
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            See Addresses
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouseCta"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouseCta"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Carousel
