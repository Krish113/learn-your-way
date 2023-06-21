import "./Header.css";
import { Link } from "react-router-dom";

function Header({ showBackButton, headerText }) {
  return (
    <>
      {showBackButton && (
        <Link to="/">
          <span className="material-symbols-outlined back-button">
            arrow_back
          </span>
        </Link>
      )}
      <div className="title-text">{headerText}</div>
    </>
  );
}
export default Header;
