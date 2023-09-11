import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AdminHeader from "../components/admin/AdminHeader";
import AuthAdmin from "../auth/AuthAdmin";

const LayoutAdmin: React.FC<{}> = () => {




    return (
      <div className="">
        <AuthAdmin/>
       <AdminHeader/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  
  export default LayoutAdmin;