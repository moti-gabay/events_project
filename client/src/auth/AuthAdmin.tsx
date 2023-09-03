import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { apiRequest } from '../constants/Requests';
// import { CHECK_ADMIN_TOKEN } from '../constants/url';

const AuthAdmin: React.FC = () => {
  const nav = useNavigate();

  const checkAdminToken = async () => {
    try {
    //   const { data } = await apiRequest(CHECK_ADMIN_TOKEN, 'GET');
      // You can use the 'data' variable as needed
    } catch (error) {
      nav('*');
    }
  };

  useEffect(() => {
    checkAdminToken();
  }, []);

  return <></>;
};

export default AuthAdmin;
