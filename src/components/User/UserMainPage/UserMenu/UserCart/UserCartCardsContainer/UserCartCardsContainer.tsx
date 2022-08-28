import { useAppSelector } from '../../../../../../hook';
import UserCart from '../UserCartCard/UserCartCard';
import './UserCartCardsContainer.css';
import uniqid from 'uniqid';
import UserEmptyContainer from '../../UserEmptyContainer/UserEmptyContainer';

const UserCartCardsContainer = () => {
    const cart = useAppSelector(state => state.user.usersData.find(user => user.permission)?.cart);
    const currentUser = useAppSelector(state => state.user.usersData.find(user => user.permission));

    return (
        <div className='user_cart_main_container'>
            <div className="user_order_info">
                <div className='user_order_info_item'>Product</div>
                <div className='user_order_info_item'>Price</div>
                <div className='user_order_info_item'>Count</div>
                <div className='user_order_info_item'>Sum</div>
            </div>
            <div className='user_cart_cards_container'>
                {cart?.length ? cart?.map(prod => <UserCart key={uniqid()} product={prod} />) : <UserEmptyContainer />}
            </div>
            <div className='user_total_price_in_cart'>
                Total price: 
                <div className="user_total_price_logo">
                    {currentUser?.totalPrice}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={15} height={12} />
                </div>
            </div>
        </div>
    )
}

export default UserCartCardsContainer;