import React from 'react'

function Collections() {
  return (
    <>
        <section className="py-0" id="collection">
  <div className="container">
    <div className="row h-100 gx-2">
      <div className="col-md-6">
        <div className="card card-span h-100 text-white">
          <img className="card-img h-100" src="assets/img/gallery/urban.png" alt="Urban Stories" />
          <div className="card-img-overlay bg-dark-gradient">
            <div className="p-5 p-md-2 p-xl-5">
              <h1 className="fs-md-4 fs-lg-7 text-light">Urban Stories</h1>
              <h5 className="fs-2 text-light">collection</h5>
            </div>
          </div>
          <a className="stretched-link" href="#!"></a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card card-span h-100 text-white">
          <img className="card-img h-100" src="assets/img/gallery/her.png" alt="Country Stories" />
          <div className="card-img-overlay bg-dark-gradient">
            <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
              <h1 className="fs-md-4 fs-lg-7 text-light">Urban Stories</h1>
              <h5 className="fs-2 text-light">collection</h5>
            </div>
          </div>
          <a className="stretched-link" href="#!"></a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Collections
