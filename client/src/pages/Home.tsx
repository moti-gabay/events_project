import axios from "axios";
import {useEffect,useState} from "react"
import { GUEST_INFO_ROUTE, TOKEN_KEY } from "../constants/url";

type UserType = {
  FirstName: string;
  LastName: string;
  table?:number;
  meal:string;
  email: string;
  Password: string;
};
const HomePage: React.FC = () => {
 const [guest,setGuest] = useState<UserType[]>([{
  FirstName: "",
  LastName: "",
  table:0,
  meal:"",
  email: "",
  Password: ""
 }]);
 const [loading,setLoading] = useState(false)

const guestInfo = async() => {
  const {data} = await axios({
    url:GUEST_INFO_ROUTE,
    method:"GET",
    headers: {
      'Content-Type': 'application/json',
      'x-api-key':localStorage[TOKEN_KEY]
  }
  })
  console.log(data);
  setLoading(false)
  setGuest(data)
  
}


  useEffect(()=> {
guestInfo()
  },[])
 
  return (
    <div className="h-[55vh] sm:h-[68vh] md:h-[70vh] lg:h-[74vh] relative">
      <img src="" alt="" />
      <div
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/15621210/pexels-photo-15621210/free-photo-of-restaurant-setting-for-party.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
          backgroundSize: "cover",
          position: "relative",
        }}
        className="text-center flex items-center justify-center h-[50vh] sm:h-[62vh] md:h-[64vh] lg:h-[68vh]"
      >
        <div className=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // background opacity
          }}
        />

        <div className="absolute text-slate-100">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 sm:mb-4 font-semibold">
            Picasso Events
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            find your site
          </h2>
        </div>
      </div>
      <div className="absolute rounded-xl left-[30%] top-[400px] mx-auto w-[400px] border text-center text-white items-center text-xl">
      {loading &&  <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        <h1>Hi {guest?.email}</h1>
        <p>Table Number : {guest?.table}</p>
        <p>your menu :{guest?.meal}</p>
        <p>more....</p>
      </div>
    </div>
  );
};

export default HomePage;
