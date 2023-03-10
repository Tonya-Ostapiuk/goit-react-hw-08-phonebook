import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { NavigationLogIn } from '../Navigation/NavigationLogIn';
import { selectIsLoggedIn } from 'redux/Login/logInSelectos';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(state=> state.auth.isRefreshed)

  return (
    <>
      <header>{isLoggedIn || isRefreshed ? <NavigationLogIn /> : <Navigation />}</header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
