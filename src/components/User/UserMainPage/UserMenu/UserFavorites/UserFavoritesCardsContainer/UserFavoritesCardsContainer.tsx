import { useAppSelector } from '../../../../../../hook';
import UserFavoriteCard from '../UserFavoriteCard/UserFavoriteCard';
import './UserFavoritesCardsContainer.css';
import uniqid from 'uniqid';

const UserFavoritesCardsContainer = () => {
    const favorites = useAppSelector(state => state.user.usersData.find(user => user.permission)?.favorites);

    return (
        <div>
            {favorites?.map(prod => <UserFavoriteCard key={uniqid()} product={prod} />)}
        </div>
    )
}

export default UserFavoritesCardsContainer;