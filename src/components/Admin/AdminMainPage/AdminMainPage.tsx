import { Dropdown, Menu, Drawer, Modal  } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../../hook";
import { ShoppingCartOutlined, LogoutOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
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
          label: <Link onClick={() => dispatch(adminLogout())} to="/admin">Log Out</Link>,
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
    <div className="main_page_wrapper">
      <header className="user_header">
        <div className="burger_menu" onClick={showDrawer}>
            <div className="burger_menu_line"></div>
            <div className="burger_menu_line"></div>
            <div className="burger_menu_line"></div>
        </div>
        <Drawer title="Admin Panel" placement="left" onClose={onClose} visible={visible}>
            <p>Some contents...</p>
        </Drawer>
        <Link className="burger_king_logo" to='/admin/main-page'>
          <img src="https://seeklogo.com/images/B/burger-king-new-2021-logo-F43BDE45C7-seeklogo.com.png" alt="bk-logo" width={55} height={55} />
        </Link>
        <Link to='profile' className="zaart" >
          <Dropdown.Button type="text" size="large" overlay={menuItems} placement="bottom" icon={<UserOutlined style={{color: 'rgb(245, 235, 220)'}} />}>
            <div className="profile_button">Admin</div>
          </Dropdown.Button>
        </Link> 
      </header>
    <div className="main_page_container">
      <Routes>
        <Route path="/*" element={<AdminProductsCardsContainer />}/>
      </Routes>
    </div>
    <Footer />
    </div>
  )
};

export default AdminMainPage;