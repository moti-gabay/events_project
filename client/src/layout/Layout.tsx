import { Outlet } from "react-router-dom";
import Footer from "../auth/components/Footer";
import Header from "../auth/components/Header";

const Layout:React.FC <{}>= () => {
return (
    <div>
     
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
)
}

export default Layout;