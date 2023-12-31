import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Viewer from "./components/Viewer";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/viewer/:course_slug" element={<Viewer />}>
          <Route path=":content_slug" element={<Viewer />} />
        </Route>
        {/* <Route path="vowels" element={<Vowels />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
