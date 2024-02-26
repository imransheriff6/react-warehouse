import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Pages/Home";
import AboutUsPage from "./Components/Pages/aboutUsMain/aboutUsMain";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUsPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
