import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Pages/HomePages/Home/Home";
import Shipping from "./component/Pages/Shipping/Shipping";
import Footer from "./component/Shared/Footer/Footer";
import Header from "./component/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
