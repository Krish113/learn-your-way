import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showBackButton = location.pathname !== "/";
  const titleText = "Learn Your Way";
  return (
    <>
      <div className="app">
        <div className="app-content">
          <Header showBackButton={showBackButton} headerText={titleText} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
