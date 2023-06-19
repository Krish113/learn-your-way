import "./Header.css";
import backButton from "../assets/vectors/left_arrow.svg";
import { Link } from "react-router-dom";

function Header({ showBackButton, headerText }) {
  return (
    <>
      {showBackButton && (
        <Link to="/">
          <div id="back-button" className="back-button">
            <img
              src={backButton}
              className="back-button-img"
              alt="back-button"
            />
          </div>
        </Link>
      )}
      <div className="title-text">{headerText}</div>
    </>
  );
}
export default Header;
