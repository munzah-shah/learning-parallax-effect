import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SkyDivingCat from "./pages/skydiving-cat";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skydiving-cat" element={<SkyDivingCat />} />
      </Routes>
    </Router>
  );
}

export default App;
