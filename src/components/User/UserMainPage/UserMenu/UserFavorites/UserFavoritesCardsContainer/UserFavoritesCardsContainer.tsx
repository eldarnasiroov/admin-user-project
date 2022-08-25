import { useAppSelector } from '../../../../../../hook';
import './UserFavoritesCardsContainer.css';
import uniqid from 'uniqid';
import UserProductCard from '../../CategoriesContainer/UserProducts/UserProductCard/UserProductCard';

const UserFavoritesCardsContainer = () => {
    const favorites = useAppSelector(state => state.user.usersData.find(user => user.permission)?.favorites);

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">FAVORITES</h1> 
            </div>
            <div className='all_menu_products_container'>
            {favorites?.map(prod => <UserProductCard key={uniqid()} product={prod} />)}            </div>
        </div>
    )
}

export default UserFavoritesCardsContainer;