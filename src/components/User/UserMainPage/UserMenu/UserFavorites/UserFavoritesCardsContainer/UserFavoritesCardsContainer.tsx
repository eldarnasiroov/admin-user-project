import { useAppSelector } from '../../../../../../hook';
import './UserFavoritesCardsContainer.css';
import uniqid from 'uniqid';
import UserProductCard from '../../CategoriesContainer/UserProducts/UserProductCard/UserProductCard';
import './UserFavoritesCardsContainer.css';
import UserEmptyContainer from '../../UserEmptyContainer/UserEmptyContainer';

const UserFavoritesCardsContainer = () => {
    const favorites = useAppSelector(state => state.user.usersData.find(user => user.permission)?.favorites);

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">FAVORITES</h1> 
            </div>
            <div className='menu_products_container'>
                {favorites?.length ? favorites?.map(prod => <UserProductCard key={uniqid()} product={prod} />) : <UserEmptyContainer />}
            </div>
        </div>
    )
}

export default UserFavoritesCardsContainer;