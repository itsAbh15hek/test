import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
