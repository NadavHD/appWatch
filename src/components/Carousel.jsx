import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div  id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride ="carosuel"> 
        <div className=" carousel-inner carusel-img ">
          <div className="carousel-item active" data-bs-interval = "5000">
            <img src="https://images.alphacoders.com/130/1300729.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval = "5000" >
            <img src="https://images5.alphacoders.com/837/837093.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval = "5000">
            <img src="https://images8.alphacoders.com/869/869846.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
