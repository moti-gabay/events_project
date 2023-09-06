import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdminHeader from "../components/admin/AdminHeader";

const LayoutAdmin: React.FC<{}> = () => {




    return (
      <div className="bg-sky-200">
<AdminHeader/>
        {/* <div className="">
        <h1 className="text-3xl text-center">Admin</h1>
        <div className="flex justify-evenly w-[70%] items-center mx-auto">
          <button className="btn btn-primary">Add Meal</button>
          <button className="btn btn-primary">Add Event</button>
          <button className="btn btn-primary">Add Guest</button>
        </div>

<div>
{ <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
</div>

        </div> */}
        
        <Outlet/>
        <Footer/>
      </div>
    );
  };
  
  export default LayoutAdmin;