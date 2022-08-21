import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/Admin/AdminLogin';
import CreateAdminAccount from './components/Admin/CreateAdminAccount/CreateAdminAccount';
import EntryPage from './components/EntryPage';
import CreateUserAccount from './components/User/CreateUserAccount/CreateUserAccount';
import UserLogin from './components/User/UserLogin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path="/admin/create-account" element={<CreateAdminAccount />} />
        <Route path="/user/create-account" element={<CreateUserAccount />} />
      </Routes>
    </div>
  );
}

export default App;
