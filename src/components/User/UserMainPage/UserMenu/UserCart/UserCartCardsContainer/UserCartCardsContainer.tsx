import { useAppSelector } from '../../../../../../hook';
import UserCart from '../UserCartCard/UserCartCard';
import './UserCartCardsContainer.css';
import uniqid from 'uniqid';

const UserCartCardsContainer = () => {
    const cart = useAppSelector(state => state.user.usersData.find(user => user.permission)?.cart);

    return (
        <div>
            {cart?.map(prod => <UserCart key={uniqid()} product={prod} />)}
        </div>
    )
}

export default UserCartCardsContainer;