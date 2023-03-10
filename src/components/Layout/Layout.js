import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
// import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
// import { NavigationLogIn } from '../Navigation/NavigationLogIn';
// import { selectIsLoggedIn } from "redux/Login/logInSelectos";



export const Layout =()=>{
    // const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <>
        <header>
        <Navigation />
        {/* {isLoggedIn ? <Navigation /> : <NavigationLogIn />} */}
    </header>
    <Suspense >
    {/* <Suspense fallback={null}> */}
        <Outlet />
      </Suspense>
    </>
    )
   
}