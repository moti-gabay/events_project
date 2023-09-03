import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LayoutAdmin: React.FC<{}> = () => {
    return (
      <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  
  export default LayoutAdmin;