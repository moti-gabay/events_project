import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AdminHeader from "../components/admin/AdminHeader";

const LayoutAdmin: React.FC<{}> = () => {




    return (
      <div className="">
       <AdminHeader/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  
  export default LayoutAdmin;