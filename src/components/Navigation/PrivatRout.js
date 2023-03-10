import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Login/logInSelectos';

export const PrivatRout = () => {
  const isRefreshed = useSelector(state=> state.auth.isRefreshed)
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return   isLoggedIn || isRefreshed  ? <Outlet/> : <Navigate to="/login" />
    
     
  
};
