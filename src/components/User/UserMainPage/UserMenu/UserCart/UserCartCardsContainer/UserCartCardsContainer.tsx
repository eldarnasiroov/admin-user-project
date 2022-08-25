import { useAppSelector } from '../../../../../../hook';
import UserCart from '../UserCartCard/UserCartCard';
import './UserCartCardsContainer.css';
import uniqid from 'uniqid';

const UserCartCardsContainer = () => {
    const cart = useAppSelector(state => state.user.usersData.find(user => user.permission)?.cart);

    return (
        <div className='cart_main_container'>
            <div className="order_info">
                <div className='order_info_item'>Product</div>
                <div className='order_info_item'>Price</div>
                <div className='order_info_item'>Count</div>
                <div className='order_info_item'>Sum</div>
            </div>
            <div className='user_cart_cards_container'>
                {cart?.map(prod => <UserCart key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default UserCartCardsContainer;