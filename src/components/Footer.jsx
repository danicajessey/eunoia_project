import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Eunoia</h2>
          <p>&#169; Mary & Jessey</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
              <span>Twitter</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <span>Instagram</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} className="icon" />
              <span>TikTok</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
