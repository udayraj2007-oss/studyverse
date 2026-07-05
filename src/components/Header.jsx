import DarkModeButton from "./DarkModeButton";
import logo from "../assets/logo.png";
import Navbar from "./Navbar"; 
import siteConfig from "../config/siteConfig";


function Header() {
  return (
    <header>

      <div className="header-top">

        <div className="logo-area">

          <img src={logo} alt="StudyVerse Logo" />

          <div>
          <h1>{siteConfig.siteName}</h1>
           <p>{siteConfig.tagline}</p>
          </div>

        </div>

        <DarkModeButton />

      </div>

      <Navbar />

    </header>
  );
}

export default Header;