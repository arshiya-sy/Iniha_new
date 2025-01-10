import React, { Component } from "react";
import "./Iniha.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import iniha2 from '../Iniha/iniha2.jpg'

class Iniha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 9700000,
      activeIndex: null,
    };
  }

  // Function to handle the scroll input
  handleScroll = (event) => {
    this.setState({ investmentAmount: parseInt(event.target.value) });
  };

  // Function to calculate the monthly return
  calculateMonthlyReturn = (amount) => {
    return ((amount / 16500) * 90).toFixed(2);
  };

  toggleAnswer = (index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index,
    });
  };

  render() {
    const { investmentAmount } = this.state;

    const percentage = ((investmentAmount - 9700000) / (33600000 - 9700000)) * 100;

    const questions = [
      {
        question: 'Where is the project located?',
        answer:
          'The project is located in the thriving heart of Mangalore, on Kudroli main road.',
      },
      {
        question: 'What is the minimum investment?',
        answer:
          'The minimum investment for a 587 sqft unit is ₹9685500 priced at ₹16,500 per sqft.',
      },
      {
        question: 'What is the rental yield offered?',
        answer:
          'The average rental yield in the market is ₹55 per square foot, whereas we are offering an assured yield of ₹90 per square foot.',
      },
      {
        question: 'Is the project RERA approved?',
        answer:
          'Yes, this project is RERA approved. The RERA registration number is RERA REG. NO.: PRM/KA/RERA/1257/334/PR/191022/005345',
      },
    ];

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
            <div style={{ fontSize: "55px", fontWeight: "bold", fontFamily: "'Montserrat', sans-serif" }}>SUMMARY</div>
            <p>
              Explore smart investment opportunities with Iniha Business Center,
              <br /> offering a range of residential and commercial properties
              for growth.
              <br /> Secure your future with us!
            </p>
            <button className="download-brochure">Download Brochure</button>
          </div>

          <div className="investment-details">
            <h3>Monthly Return Calculator</h3>
            {/* <p>
              <i
                style={{ paddingRight: "10px" }}
                className="fas fa-map-marker-alt"
              ></i>
              Mangalore
            </p> */}

            {/* <div className="investment-stats">
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
            </div> */}

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

            {/* Monthly Return Display */}
            <div className="monthly-heading">
              Your Returns:
            </div>
            <div className="monthly-return-box">
              <p>₹{this.calculateMonthlyReturn(investmentAmount)}</p>
            </div>

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
                style={{
                  background: `linear-gradient(to right, #3CA2C8 ${percentage}%,rgb(255, 255, 255) ${percentage}%)`,
                }}
              />
              <p>₹{investmentAmount.toLocaleString()}</p>
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
          <div style={{ fontSize: "55px", fontWeight: "bold", fontFamily: "'Montserrat', sans-serif" }}>WHY INIHA BUSINESS CENTER?</div>
          <div className="benefits-container">
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #3CA2C8 60%, #6d86ae)" }} className="icon-container">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>High ROI</h3>
              <p>
                Experience exceptional returns with assured rental yields of 6.5% and a conservative capital appreciation of 8% Amounting to a total of 14.5% annually.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #6d86ae 60%, #92729d)" }} className="icon-container">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Assured Rentals</h3>
              <p>
                Assured rentals at ₹90 per square foot, significantly higher than the market average of ₹55 per square foot in Mangalore. Our commitment ensures steady and above-market income for property owners.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #92729d 60%, #b2628c)" }} className="icon-container">
                <i className="fas fa-building"></i>
              </div>
              <h3>Prime location</h3>
              <p>
                Located in Kudroli, Mangalore, our property offers unmatched connectivity and access to the city’s key landmarks. A prime location that guarantees consistent demand and premium rental value.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #b2628c 60%, #df4977)" }} className="icon-container">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Possession in 5 Months</h3>
              <p>
                With the project reaching its final stages of completion, possession is assured within 5 months. A perfectly timed opportunity to own a ready-to-occupy property in record time.
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
                The Iniha Business Center master plan integrates modern architecture
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
              <div style={{ fontSize: "50px", fontWeight: "bold", fontFamily: "'Volkorn', sans-serif" }}>About Bhandary Builders</div>
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

        <section class="neighborhood-section">
          <h2 class="section-title">ABOUT THE NEIGHBORHOOD</h2>
          <p class="section-description">
            Located in the thriving heart of Mangalore, this project offers unparalleled access to a vibrant ecosystem of malls, hospitals, tech parks, and more.
          </p>

          <div class="neighborhood-grid">
            <div class="category">
              <h3 class="category-title">Transportation</h3>
              <ul class="category-list">
                <li><strong>Mangalore International Airport:</strong> Approx. 12 km</li>
                <li><strong>Mangalore Central Railway Station:</strong> Approx. 2.5 km</li>
                <li><strong>Mangalore KSRTC Bus Stand:</strong> Approx. 1.6 km</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Landmarks</h3>
              <ul class="category-list">
                <li><strong>Kudroli Temple:</strong> Approx. 500 meters</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Shopping</h3>
              <ul class="category-list">
                <li><strong>City Centre Mall:</strong> Approx. 2 km</li>
                <li><strong>Forum Fiza Mall:</strong> Approx. 2.8 km</li>
                <li><strong>Bharat Mall:</strong> Approx. 1.6 km</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Healthcare</h3>
              <ul class="category-list">
                <li><strong>KMC Hospital:</strong> Approx. 1.8 km</li>
              </ul>
            </div>
          </div>
        </section>


        <div className="faq-section">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-container">
            {questions.map((item, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => this.toggleAnswer(index)}
              >
                <div className="faq-question">
                  <i
                    className={`fas ${this.state.activeIndex === index ? 'fa-minus' : 'fa-plus'
                      }`}
                  />
                  <span>{item.question}</span>
                </div>
                {this.state.activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
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