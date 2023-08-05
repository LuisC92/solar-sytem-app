import "./App.css";
import { Routes, Route } from "react-router-dom";

// import { data } from "./assets/data.js";
import Carousel3D from "./components/Carousel3D";
import PlanetDetails from "./components/PlanetDetails";
function App() {
  // console.log(data);
  return (
    <>
      <h1>Solar System</h1>
      <Routes>
        <Route path="/" element={<Carousel3D />} />
        <Route path="/planets/:planet" element={<PlanetDetails />} />
      </Routes>
    </>
  );
}

export default App;
