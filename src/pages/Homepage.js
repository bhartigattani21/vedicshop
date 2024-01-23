import React from 'react'
import { HeroSection } from '../components'
import Footer from '../components/Footer'
import { images } from '../constants'
import "./styles.css"
const Homepage = () => {
  return (
    <>
          <HeroSection />
          <section className="homepage-section">
            <h3 className="text-xl-size">New Release</h3>
            <p className="text-md-size">Check out our new release.</p>
            <div className="section-list">
              <article  className="article-item">
                <img src={images.ajwa} alt="Ajwa" />
                <p>Ajwa Tonic</p>
              </article>
              <article  className="article-item">
                <img src={images.masiha} alt="Masiha" />
                <p>Masiha</p>
              </article>
              <article  className="article-item">
                <img src={images.anis_niswan} alt="Anis Niswan" />
                <p>Anis Niswan</p>
              </article>
              <article  className="article-item">
                <img src={images.grosal} alt="Grosal" />
                <p>Grosal</p>
              </article>
            </div>
          </section>
          <section className="homepage-section">
            <h3 className="text-xl-size">Our Brand Partner</h3>
            <p className="text-md-size">Connecting health veins across globe</p>
            <div className="section-list">
              <article  className="article-item">
                <img src={images.oeba_brand} alt="Oeba" />
                <p>Oeba India</p>
              </article>
              <article  className="article-item">
                <img src={images.hamdard_brand} alt="Hamdard" />
                <p>Hamdard Dawakhana</p>
              </article>
              <article  className="article-item">
                <img src={images.dehlvi_brand} alt="Dehlvi" />
                <p>dehlvi</p>
              </article>
              <article  className="article-item">
                <img src={images.meghdoot_brand} alt="Meghdoot" />
                <p>Meghdoot Pharma</p>
              </article>
            </div>
          </section>
          <Footer />
    </>
  )
}

export default Homepage