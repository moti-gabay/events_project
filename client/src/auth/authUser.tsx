import  { useEffect } from 'react'
// import { apiRequest } from '../constants/Requests';
// import { CHECK_TOKEN } from '../constants/url';
import { useNavigate } from 'react-router-dom';

const AuthUser = () => {
    const nav = useNavigate();
    const checkToken = async () => {
        try {
            // const { data } = await apiRequest(CHECK_TOKEN, "GET");
        } catch (error) {
            nav("*"); 
        }
  }

  useEffect(() => {
    checkToken();
  },[])

  return (
    <></>
  )
}

export default AuthUser