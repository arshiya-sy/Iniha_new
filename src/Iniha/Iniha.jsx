import React, { Component } from "react";
import "./Iniha.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import iniha2 from '../Iniha/iniha2.jpg'

class Iniha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 9700000, // Initial amount: ₹96.85 Lacs
    };
  }

  // Function to handle the scroll input
  handleScroll = (event) => {
    this.setState({ investmentAmount: parseInt(event.target.value) });
  };

  // Function to calculate the monthly return
  calculateMonthlyReturn = (amount) => {
    return ((amount / 16500) * 90).toFixed(2); // Formula for monthly return
  };

  render() {
    const { investmentAmount } = this.state;

    return (
      <div className="app">
        {/* Header Section */}
        <header className="header">
          <div className="logo"></div>
          <nav className="nav">
            <div>RERA REG. NO.: PRM/KA/RERA/1257/334/PR/191022/005345 </div>
          </nav>
        </header>

        <section className="investment-section">
          <div className="investment-container">
            {/* Left Side: Investment Statistics */}
            <div className="investment-info">
              <div style={{ fontSize: "50px", fontWeight: "bold" }}>
                Elevating Your <br /> Investments
              </div>
              <div className="investment-stats">
                <div className="stat-item">
                  <h3>14%</h3>
                  <p>Target IRR</p>
                </div>
                <div style={{ marginLeft: "-90px" }} className="stat-item">
                  <h3>5.8%</h3>
                  <p>Rental Yield</p>
                </div>
                <div className="stat-item">
                  <h3>₹96 Lacs</h3>
                  <p>Minimum Investment</p>
                </div>
                <div style={{ marginLeft: "-90px" }} className="stat-item">
                  <h3>April 2025</h3>
                  <p>Handover</p>
                </div>
              </div>
            </div>

            {/* Right Side: Learn More Form */}
            <div className="investment-form">
              <div style={{ textAlign: "left" }}>
                <h2>Learn More</h2>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email ID *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact No *</label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="investment-summary">
          <div className="summary-text">
            <div style={{ fontSize: "50px", fontWeight: "bold" }}>Summary</div>
            <p>
              Explore smart investment opportunities with Bhandary Iniha,
              <br /> offering a range of residential and commercial properties
              for growth.
              <br /> Secure your future with us!
            </p>
            <button className="download-brochure">Download Brochure</button>
          </div>

          <div className="investment-details">
            <h3>Bhandary Iniha, Alake</h3>
            <p>
              <i
                style={{ paddingRight: "10px" }}
                className="fas fa-map-marker-alt"
              ></i>
              Mangalore
            </p>

            <div className="investment-stats">
              <div className="stat-item">
                <h4>Min Investment</h4>
                <p>₹96 Lacs</p>
              </div>
              <div style={{ marginLeft: "-90px" }} className="stat-item">
                <h4>Rental Yield</h4>
                <p>5.8%</p>
              </div>
              <div className="stat-item">
                <h4>Target IRR</h4>
                <p>14%</p>
              </div>
              <div style={{ marginLeft: "-90px" }} className="stat-item">
                <h4>Capital Appreciation</h4>
                <p>8.2%</p>
              </div>
            </div>

            {/* Investment Amount Scroll */}
            {/* <div className="investment-range">
              <label htmlFor="investment-range">Select Investment Amount:</label>
              <input
                id="investment-range"
                type="range"
                min="9700000"
                max="33600000"
                step="1"
                value={investmentAmount}
                onChange={this.handleScroll}
              />
              <p>₹{investmentAmount.toLocaleString()}</p>
            </div> */}

            <div className="investment-range">
              <label htmlFor="investment-range">Select Investment Amount:</label>
              <input
                id="investment-range"
                type="range"
                min="9700000"
                max="33600000"
                step="1"
                value={investmentAmount}
                onChange={this.handleScroll}
              />
              <p>₹{investmentAmount.toLocaleString()}</p>
            </div>

            {/* Monthly Return Display */}
            <div className="monthly-return-box">
              <h2>Your Monthly Return:</h2>
              <p>₹{this.calculateMonthlyReturn(investmentAmount)}</p>
            </div>

            {/* <div className="sales-status">
              <p>
                <strong>₹1,117,800,000</strong> of ₹1,242,000,000
              </p>
              <p>
                <strong>90% Sold Out</strong>
              </p>
            </div> */}
          </div>
        </div>

        <div className="why-iniha-section">
          <h2>Why Bhandary Iniha?</h2>
          <div className="benefits-container">
            <div className="benefit-item">
              <i className="fas fa-chart-line"></i>
              <h3>High Rental Yield</h3>
              <p>
                Attractive yields tailored to maximize your investment returns.
              </p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-credit-card"></i>
              <h3>Flexible Payment Options</h3>
              <p>
                Convenient payment plans designed for your ease and flexibility.
              </p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-building"></i>
              <h3>UDS</h3>
              <p>
                Unique provision of undivided shares (UDS) linked to premium
                properties, setting us apart in the market.
              </p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Assured Rental</h3>
              <p>
                Reliable tenant agreements ensuring consistent and steady
                income.
              </p>
            </div>
          </div>
        </div>

        {/* <div>
          <div>Master Plan</div>
          <div>Embrace smart investment in commercial real estate, tailored to suit your needs. From small square footage to grand opportunities, Y-Living caters to every aspiration. Indulge in a rewarding investment experience with us!</div>
          <div>plan img</div>
        </div> */}

        <div className="master-plan-section">
          <h2 className="master-plan-title">Master Plan</h2>
          <div className="master-plan-container">
            <div className="master-plan-image">
              {/* <img src="" alt="Master Plan" /> */}
            </div>
            <div className="master-plan-text">
              <h3>Transformative Living Spaces</h3>
              <p>
                The Bhandary Iniha master plan integrates modern architecture
                with lush green landscapes to deliver a seamless blend of luxury
                and nature. It is designed to enhance the living experience
                while offering the highest standards of comfort and convenience.
              </p>
              <button className="master-plan-btn">Explore More</button>
            </div>
          </div>
        </div>

        <div className="about-builder-section">
          {/* <h2 className="about-builder-title">About the Builder</h2> */}
          <div className="about-builder-container">
            <div className="builder-info">
              <div style={{ fontSize: "50px", fontWeight: "bold" }}>About Bhandary Builders</div>
              <p>
                Bhandary Builders have redefined the real estate landscape in
                Mangalore with their dedication to excellence and innovation.
                Known for delivering high-quality projects, they combine modern
                architectural designs with functionality to create spaces that
                resonate with their customers' aspirations.
              </p>
              <p>
                With a reputation for transparency and trust, Bhandary Builders
                ensure every project is a masterpiece, offering unmatched value
                and satisfaction to investors and residents alike.
              </p>
              <button className="builder-btn">Learn More</button>
            </div>

            <div className="builder-image">
              <img style={{ width: "600px", height: "400px" }} src={iniha2} alt="About the Builder" />
            </div>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-option">
            <i className="fas fa-envelope"></i> {/* Enquire Icon */}
            <span>Enquire</span>
          </div>
          <div className="contact-option">
            <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
            <span>WhatsApp</span>
          </div>
          <div className="contact-option">
            <i className="fas fa-phone-alt"></i> {/* Call Icon */}
            <span>Call</span>
          </div>
        </div>


        {/* Footer Sectionn */}
        <footer className="footer">
          <p>© 2024 Bhandary Iniha Business Centre. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Iniha;