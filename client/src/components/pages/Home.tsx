import SignIn from "../../forms/SignIn";
import Header from "../Header";

const Home: React.FC = () => {


return(
    <div className="bg-blue-600 w-[100%]">
        <Header/>
       <div className="w-[80%] flex justify-evenly">
        <h1 className="text-white text-5xl">Home</h1>
        </div> 
    </div>
)
}

export default Home;