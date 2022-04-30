import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/HomePages/Home/Home";
import Header from "./component/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
