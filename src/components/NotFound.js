import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-not-found">
      <img
        src="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_640.jpg"
        alt="sad cat"
        className="not-found-image"
      />
      <div className="not-found-text">
        Lost, are you?{" "}
        <Link className="home-link" to="/">
          Home
        </Link>{" "}
        is where you need to go!!
      </div>
    </div>
  );
}

export default NotFound;
