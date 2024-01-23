import React from 'react'
import { Link } from 'react-router-dom';
import { images } from "../constants/index";
import "./styles.css";
const HeroSection = () => {
  return (
    <>
      <article className="hero-section">
        <div className="hero-background">
          <img className="full-width" src={images.hero_img} alt="Hero" />
        </div>
        <div className="hero-content">
          <h2>optimum nutrition is the medicine of tomorrow</h2>
          <Link to="/product-page" >
            <button className='btn btn-primary-solid btn-explore'>Explore</button>
          </Link>
        </div>
      </article>
    </>
  )
}

export default HeroSection