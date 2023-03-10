import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Login/logInSelectos';

export default function PublicRoute({
    
    restricted = false,
    redirectTo = '/',

  }) {
    const isRefreshed = useSelector(state=> state.auth.isRefreshed)

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = (isLoggedIn || isRefreshed ) && restricted;
    return    shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet/>       
    
  }