import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LogPage } from 'Pages/LogPage/LogPage';
import { Navigation } from './Navigation/Navigation';
import { RegistPage } from 'Pages/RegistPage/RegistPage';
import { ContactsPage } from 'Pages/ContactPage/ContactsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigation />} />
          <Route path='/login' element={<LogPage />} />
          <Route path='/register' element={<RegistPage/>}/>
          <Route path='/contacts'element={<ContactsPage/>}/>
        </Route>
      </Routes>
    </>
  );
};
