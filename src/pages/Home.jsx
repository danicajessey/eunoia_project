import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import bghome from "../assets/images/bghome.png"
import "../styles/Home.css"

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
        <div className="kolom kiri">
          <p className="deskripsi">
            Celebrate Every
            <br/>Moment with a
            <br />Touch of Cuteness
          </p>
          <a href="#catalog" className="btn-catalog">Catalog</a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
