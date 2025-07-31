import React from 'react';

const Services = () => {
  return (
    <section id="services" className="content-section bg-light">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="/Images/temple-hero2.jpg" className="card-img-top" alt="Puja Services" />
              <div className="card-body">
                <h5 className="card-title">Daily Puja</h5>
                <p className="card-text">Participate in daily worship and blessings from the temple priests.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/Images/temple-hero3.jpg" className="card-img-top" alt="Festivals" />
              <div className="card-body">
                <h5 className="card-title">Festivals</h5>
                <p className="card-text">Join us during major Hindu festivals and celebrations.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/Images/temple-hero4.jpg" className="card-img-top" alt="Meditation" />
              <div className="card-body">
                <h5 className="card-title">Meditation & Mantras</h5>
                <p className="card-text">Chant mantras and meditate in the peaceful temple environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
