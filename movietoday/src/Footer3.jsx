import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer3 = () => {
  return (
    <div className="footer">
      <footer style={footerStyle}>
        <h2 className="dev-name">DEV: Ajay Biju</h2>
        <h3 className="abt-dev">
          Aspiring Fullstack developer | WEB3 | CyberSecurity | AI Development
        </h3>

        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div style={iconStyle}>
          {/* GitHub link */}
          <a
            className="github"
            href="https://github.com/ajaybiju-sparkski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" style={linkStyle} />
          </a>

          {/* LinkedIn link */}
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/ajay-biju-a773a92b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={linkStyle} />
          </a>
        </div>
      </footer>
    </div>
  );
};
const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#f1f1f1",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
};

const iconStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "0.5rem",
};

const linkStyle = {
  color: "#000",
  textDecoration: "none",
};
export default Footer3;
