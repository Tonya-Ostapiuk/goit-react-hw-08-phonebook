import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LogPage } from 'Pages/LogPage/LogPage';
// import { Navigation } from './Navigation/Navigation';
import { RegistPage } from 'Pages/RegistPage/RegistPage';
import { ContactsPage } from 'Pages/ContactPage/ContactsPage';
import { fetchCurrentUser } from 'redux/Login/LoginOperation';
import { PrivatRout } from './Navigation/PrivatRout';
import PublicRout from './Navigation/PublicRout';
// import { HomePage } from 'Pages/HomePage/HomePage';
// import { authSelectors } from 'redux/Login/logInSelectos';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route
            path=""
            element={
              <PublicRout
                redirectTo="/contacts"
                restricted
                // element={<LogPage />}
              />
            }
          >
            <Route path="/login" element={<LogPage />} />
            <Route path="/register" element={<RegistPage />} />
          </Route>

          {/* <PublicRout path="/"><Navigation /></PublicRout> */}

          <Route path='' element={<PrivatRout />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<LogPage />} />
        </Route>
      </Routes>
    </>
  );
};
