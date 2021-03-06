import { Route, Routes } from "react-router-dom";
import "./App.css";
import "tw-elements";
import AddProduct from "./component/Pages/AddProduct/AddProduct";
import CheckOut from "./component/Pages/CheckOut/CheckOut";
import Home from "./component/Pages/HomePages/Home/Home";
import Login from "./component/Pages/LoginPage/Login/Login";
import SignUp from "./component/Pages/LoginPage/Signup/SignUp";
import ManageProducts from "./component/Pages/ManageProducts/ManageProducts";
import Footer from "./component/Shared/Footer/Footer";
import Header from "./component/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyItem from "./component/Pages/MyItem/MyItem";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import NotFound from "./component/Pages/NotFound/NotFound";
import Blog from "./component/Pages/Blog/Blog";
import Contact from "./component/Pages/Contact/Contact";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />

        <Route path="/manageitem" element={<ManageProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/myitem" element={<MyItem />} />
        <Route path="/additem" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
