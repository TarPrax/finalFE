import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


console.log("User:", user);

const Body = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
