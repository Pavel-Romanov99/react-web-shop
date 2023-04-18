import "./Homepage.css";
import { Link } from "react-router-dom";

import nike from "./resources/nike.webp";
import women from "./resources/women.webp";
import tommy from "./resources/tommy_sports.jpeg";

export default function Homepage() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block " src={nike} alt="First slide" />
        </div>
        <div class="carousel-item ">
          <img class="d-block " src={women} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block " src={tommy} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <div className="welcome-page">
        <h1>Welcome to Genius-Clothing</h1>
        <h3>Browse out new collection</h3>
        <button type="button" class="btn btn-dark clothing-button">
          <Link to={"/clothing"} className="clothing-link">
            View Clothing
          </Link>
        </button>
      </div>
    </div>
  );
}
