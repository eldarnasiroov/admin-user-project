import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/Admin/AdminLogin';
import CreateAdminAccount from './components/Admin/CreateAdminAccount/CreateAdminAccount';
import EntryPage from './components/EntryPage';
import CreateUserAccount from './components/User/CreateUserAccount/CreateUserAccount';
import UserLogin from './components/User/UserLogin';
import UserMainPage from './components/User/UserMainPage/UserMainPage';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path="/admin/create-account" element={<CreateAdminAccount />} />
        <Route path="/user/create-account" element={<CreateUserAccount />} />
        <Route path='/main-page' element={<UserMainPage />} />
      </Routes>
    </div>
  );
}

export default App;
