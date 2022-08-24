import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/Admin/AdminLogin';
import EntryPage from './components/EntryPage';
import CreateUserAccount from './components/User/CreateUserAccount/CreateUserAccount';
import UserLogin from './components/User/UserLogin';
import UserMainPage from './components/User/UserMainPage/UserSwitcher';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/user' element={<UserLogin />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path="/user/create-account" element={<CreateUserAccount />} />
        <Route path='/user/main-page/*' element={<UserMainPage />} />
      </Routes>
    </div>
  );
}

export default App;
