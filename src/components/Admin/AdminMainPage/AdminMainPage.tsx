import { Dropdown, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { UserDataType } from "../../../features/types/userTypes";
import { useAppDispatch } from "../../../hook";
import { ShoppingCartOutlined, LogoutOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import CategoriesContainer from "../../User/UserMainPage/UserMenu/CategoriesContainer/CategoriesContainer";
import UserCartCardsContainer from "../../User/UserMainPage/UserMenu/UserCart/UserCartCardsContainer/UserCartCardsContainer";
import UserFavoritesCardsContainer from "../../User/UserMainPage/UserMenu/UserFavorites/UserFavoritesCardsContainer/UserFavoritesCardsContainer";
import UserProfile from "../../User/UserMainPage/UserMenu/UserProfile/UserProfile";
import AdminProductsCardsContainer from "./AdminProducts/AdminProductsCardsContainer/AdminProductsCardsContainer";
import { adminLogout } from "../../../features/adminDataSlice";


const AdminMainPage = () => {
const dispatch = useAppDispatch();
  const menuItems = (
    <Menu
      items={[
        {
          label: <Link to="favorites">Favorites</Link>,
          key: '1',
          icon: <HeartOutlined />,
        },
        {
          label: <Link to="cart">Cart</Link>,
          key: '2',
          icon: <ShoppingCartOutlined />,
        },
        {
          label: <Link onClick={() => dispatch(adminLogout())} to="/admin">Log Out</Link>,
          key: '3',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
      
  return (
    <div className="main_page_wrapper">
      <header className="user_header">
      <Link  to='/user/main-page'>
        <div className="burger_menu">
          <div className="burger_menu_line"></div>
          <div className="burger_menu_line"></div>
          <div className="burger_menu_line"></div>
        </div>
      </Link>
        <Link className="burger_king_logo" to='/user/main-page'>
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
    <div className="footer">
      <h1 style={{color: 'white'}}>FOOTER</h1>
    </div>
    </div>
  )
};

export default AdminMainPage;