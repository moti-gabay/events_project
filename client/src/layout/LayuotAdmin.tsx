import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutAdmin: React.FC<{}> = () => {
    return (
      <div>
        <Header/>
        <h1 className="text-3xl">Admin</h1>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  
  export default LayoutAdmin;