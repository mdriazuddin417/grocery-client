import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./component/Pages/CheckOut/CheckOut";
import Home from "./component/Pages/HomePages/Home/Home";

import Footer from "./component/Shared/Footer/Footer";
import Header from "./component/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout/:id" element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
