import { Dropdown, Menu, Drawer  } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../../hook";
import {  LogoutOutlined, UserOutlined } from '@ant-design/icons';
import AdminProductsCardsContainer from "./AdminProducts/AdminProductsCardsContainer/AdminProductsCardsContainer";
import { adminLogout } from "../../../features/adminDataSlice";
import './AdminMainPage.css';
import { useState } from "react";
import Footer from "../../Footer/Footer";


const AdminMainPage = () => {
const dispatch = useAppDispatch();
  const menuItems = (
    <Menu
      items={[
        {
          label: <Link onClick={() => dispatch(adminLogout())} to="/admin">Выйти</Link>,
          key: '3',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  return (
    <div className="admin_main_page_wrapper">
      <header className="admin_header">
        <div className="admin_burger_menu" onClick={showDrawer}>
            <div className="admin_burger_menu_line"></div>
            <div className="admin_burger_menu_line"></div>
            <div className="admin_burger_menu_line"></div>
        </div>
        <Drawer title="Admin Panel" placement="left" onClose={onClose} visible={visible}>
            <p>Some contents...</p>
        </Drawer>
        <Link className="admin_burger_king_logo" to='/admin/main-page'>
          <img src="https://seeklogo.com/images/B/burger-king-new-2021-logo-F43BDE45C7-seeklogo.com.png" alt="bk-logo" width={55} height={55} />
        </Link>
        <Link to='profile' className="zaart" >
          <Dropdown.Button type="text" size="large" overlay={menuItems} placement="bottom" icon={<UserOutlined style={{color: 'rgb(245, 235, 220)'}} />}>
            <div className="admin_profile_button">Admin</div>
          </Dropdown.Button>
        </Link> 
      </header>
    <div className="admin_main_page_container">
      <Routes>
        <Route path="/*" element={<AdminProductsCardsContainer />}/>
      </Routes>
    </div>
    <Footer />
    </div>
  )
};

export default AdminMainPage;