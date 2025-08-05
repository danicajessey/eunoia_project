import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bghome from "../assets/images/bghome.png";
import "../styles/Home.css";
import about from "../assets/images/about.png";

function Home() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        style={{
          backgroundImage: `url(${bghome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="describe">
          <p className="deskripsihome">
            Celebrate Every
            <br />
            Moment with a
            <br />
            Touch of Cuteness
          </p>
          <a href="#catalog" className="btn-catalog">
            Catalog
          </a>
        </div>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <div className="about-content-wrapper">
          <div className="kolom">
            <p className="deskripsiabout">
              At Eunoia Bouquet, we turn emotions into elegant floral stories. Every bouquet is crafted with care to celebrate love, joy, comfort, or remembrance. Whether it's a birthday, a thank-you, or a heartfelt gesture, our flowers speak when words fall short. Let your moments bloom with Eunoia.
            </p>
          </div>
          <img src={about} alt="about" />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Name" className="contact-input" />
              <input type="email" placeholder="Email" className="contact-input" />
            </div>
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;