import { useAppDispatch } from "../../../../hook";
import { ShoppingCartOutlined, LogoutOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import './UserMainPage.css';
import { userLogOut } from "../../../../features/userDataSlice";
import { Drawer, Dropdown, Menu} from "antd";
import { Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import UserCartCardsContainer from "./UserCart/UserCartCardsContainer/UserCartCardsContainer";
import UserFavoritesCardsContainer from "./UserFavorites/UserFavoritesCardsContainer";
import CategoriesContainer from "./CategoriesContainer/CategoriesContainer";
import { UserDataType } from "../../../../features/types/userTypes";
import { useState } from "react";
import Footer from "../../../Footer/Footer";

const UserMenu = ({userData}: {userData: UserDataType}) => {
const dispatch = useAppDispatch();

  const menuItems = (
    <Menu
      items={[
        {
          label: <Link to="favorites">Избранное</Link>,
          key: '1',
          icon: <HeartOutlined />,
        },
        {
          label: <Link to="cart">Корзина</Link>,
          key: '2',
          icon: <ShoppingCartOutlined />,
        },
        {
          label: <Link onClick={() => {dispatch(userLogOut())}} to="/user">Выйти</Link>,
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
    <div className="user_main_page_wrapper">
      <header className="user_header">
      <div className="user_burger_menu" onClick={showDrawer}>
            <div className="user_burger_menu_line"></div>
            <div className="user_burger_menu_line"></div>
            <div className="user_burger_menu_line"></div>
        </div>
        <Drawer title="User Panel" placement="left" onClose={onClose} visible={visible}>
            <p>Some contents...</p>
        </Drawer>
        <Link className="user_burger_king_logo" to='/user/main-page'>
          <img src="https://seeklogo.com/images/B/burger-king-new-2021-logo-F43BDE45C7-seeklogo.com.png" alt="bk-logo" width={55} height={55} />
        </Link>
        <Link to='profile' className="zaart" >
          <Dropdown.Button type="text" size="large" overlay={menuItems} placement="bottom" icon={<UserOutlined style={{color: 'rgb(245, 235, 220)'}} />}>
            <div className="user_profile_button">{userData?.firstName + ' ' + userData?.lastName}</div>
          </Dropdown.Button>
        </Link> 
      </header>
    <div className="user_main_page_container">
      <Routes>
        <Route path="/*" element={<CategoriesContainer />}/>
        <Route path="/cart" element={<UserCartCardsContainer />}/>
        <Route path="/favorites" element={<UserFavoritesCardsContainer />}/>
        <Route path="/profile" element={<UserProfile />}/>
      </Routes>
    </div>
    <Footer />
    </div>
  )
};

export default UserMenu;
