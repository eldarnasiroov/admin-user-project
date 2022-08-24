import { useAppSelector } from '../../../../../../hook';
import UserProductCard from '../UserProductCard/UserProductCard';
import './UserProductsCardsContainer.css';
import uniqid from 'uniqid';

const UserProductsCardsContainer = () => {
    const menu = useAppSelector((state) => state.menu.menu);

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">All Menu</h1> 
            </div>
            <div className='all_menu_products_container'>
                {menu.map(prod => <UserProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default UserProductsCardsContainer;