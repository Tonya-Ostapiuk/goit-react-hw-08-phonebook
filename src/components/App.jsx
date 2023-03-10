import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LogPage } from 'Pages/LogPage/LogPage';
import { RegistPage } from 'Pages/RegistPage/RegistPage';
import { ContactsPage } from 'Pages/ContactPage/ContactsPage';
import { fetchCurrentUser } from 'redux/Login/LoginOperation';
import { PrivatRout } from './Navigation/PrivatRout';
import PublicRout from './Navigation/PublicRout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={<PublicRout redirectTo="/contacts" restricted />}
          >
            <Route path="/login" element={<LogPage />} />
            <Route path="/register" element={<RegistPage />} />
          </Route>

          <Route path="" element={<PrivatRout />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<LogPage />} />
        </Route>
      </Routes>
    </>
  );
};
