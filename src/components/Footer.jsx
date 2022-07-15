import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <p className="conditions">
          {" "}
          Privacy | Terme & Conditions | Cookie Policy
        </p>
        <p className="powered">POWERED BY Sylvain LEGUAY for Technical Test</p>
      </div>
      Footer
    </footer>
  );
}
