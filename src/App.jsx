import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import AddData from "./pages/AddData";
import Provinsi from "./pages/Provinsi"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/indonesia" element={<Indonesia />} />
      <Route path="/provinsi" element={<Provinsi />} />
      <Route path="/add" element={<AddData />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
