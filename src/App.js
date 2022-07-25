import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import "./App.scss";
import Rider from "./Components/Pages/Rider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rider" element={<Rider />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
