import React from 'react'

function Banner() {
  return (
    <>
    {/* <!-- end of .container-->*/}
    <section
        className="py-0"
        id="header"
        style={{ marginTop: '-23rem' }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img className="img-fluid" src="assets/img/gallery/sana.png" width="790" alt="For Her" />
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img className="img-fluid" src="assets/img/gallery/tena.png" width="790" alt="For Him" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

{/* <!-- end of .container-->*/}
    </>
  )
}

export default Banner
