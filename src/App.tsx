import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/Admin/AdminLogin';
import AdminSwitcher from './components/Admin/AdminSwitcher/AdminSwitcher';
import EntryPage from './components/EntryPage';
import CreateUserAccount from './components/User/CreateUserAccount/CreateUserAccount';
import UserLogin from './components/User/UserLogin';
import UserSwitcher from './components/User/UserSwitcher/UserSwitcher';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path="/user/create-account" element={<CreateUserAccount />} />
        <Route path='/user/main-page/*' element={<UserSwitcher />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admin/main-page/*' element={<AdminSwitcher />} />
      </Routes>
    </div>
  );
}

export default App;
