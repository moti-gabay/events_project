import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHECK_ADMIN_TOKEN } from '../constants/url';

const AuthAdmin: React.FC = () => {
  const nav = useNavigate();

  const checkAdminToken = async () => {
    try {
       const { data } = await axios.get(CHECK_ADMIN_TOKEN);
      console.log(data);
      
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
