import React from "react";
import "./herosection.css";

const images = [
  "https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/2191182508/photo/high-angle-cctv-shot-with-a-busy-hallway-with-reception-desk-of-a-hospital-building-diverse.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1X7Rvi9xdfJdC-GrFQHkMn4SzifzwoH7ONRmZgW8Nc=",
];

export default function Hero() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide hero-section"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={images[0]} className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 fw-bold text-white animate__animated animate__fadeInDown">
                Welcome to Our World
              </h1>
              <p className="lead text-light animate__animated animate__fadeInUp">
                Experience excellence like never before
              </p>
              <button className="btn btn-lg btn-gradient mt-3">
                Explore Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={images[1]} className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 fw-bold text-white animate__animated animate__fadeInDown">
                Premium Quality
              </h1>
              <p className="lead text-light animate__animated animate__fadeInUp">
                Designed with passion, delivered with trust
              </p>
              <button className="btn btn-lg btn-gradient mt-3">
                Get Started
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={images[2]} className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 fw-bold text-white animate__animated animate__fadeInDown">
                Innovation Meets Style
              </h1>
              <p className="lead text-light animate__animated animate__fadeInUp">
                A journey beyond imagination
              </p>
              <button className="btn btn-lg btn-gradient mt-3">
                Discover More
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}
