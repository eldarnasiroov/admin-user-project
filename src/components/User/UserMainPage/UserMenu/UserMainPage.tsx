import { useAppDispatch } from "../../../../hook";
import { ShoppingCartOutlined, LogoutOutlined, InfoCircleOutlined, HeartOutlined } from '@ant-design/icons';
import './UserMainPage.css';
import { userLogOut } from "../../../../features/userDataSlice";
import { Dropdown, Menu} from "antd";
import { Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import UserCartCardsContainer from "./UserCart/UserCartCardsContainer/UserCartCardsContainer";
import UserFavoritesCardsContainer from "./UserFavorites/UserFavoritesCardsContainer/UserFavoritesCardsContainer";
import UserProductsCardsContainer from "./UserProducts/UserProductsCardsContainer/UserProductsCardsContainer";

interface IProducts {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
}
interface IUsersData {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  cart: IProducts[];
  favorites: IProducts[];
  permission: boolean;
}
type UserDataType = IUsersData | undefined

const UserMenu = ({userData}: {userData: UserDataType}) => {
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
          label: <Link onClick={() => {dispatch(userLogOut())}} to="/user">Log Out</Link>,
          key: '3',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <div className="main_page_wrapper">
      <header className="user_header">
      <Link to='profile' >
        <Dropdown.Button type="primary" overlay={menuItems} placement="bottom" icon={<InfoCircleOutlined />}>
        {userData?.firstName + ' ' + userData?.lastName}
      </Dropdown.Button>
      </Link> 
      </header>
    <div className="main_page_container">
      <Routes>
        <Route path="/" element={<UserProductsCardsContainer />}/>
        <Route path="/cart" element={<UserCartCardsContainer />}/>
        <Route path="/favorites" element={<UserFavoritesCardsContainer />}/>
        <Route path="/profile" element={<UserProfile />}/>
      </Routes>
    </div>
    </div>
  )
};

export default UserMenu;
