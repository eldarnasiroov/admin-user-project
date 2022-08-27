import { useAppSelector } from '../../../../../../../hook';
import UserProductCard from '../UserProductCard/UserProductCard';
import './UserProductsCardsContainer.css';
import uniqid from 'uniqid';

const UserProductsCardsContainer = ({name}: {name: string}) => {
    const menu = useAppSelector((state) => state.menu.menu);
    const sortedMenu = menu.filter(elem => elem.category === name);    

    return (
        <div className='user_all_menu_container'>
            <div className="user_menu_iscription_container">
                <h1 className="user_menu_iscription">{name.toUpperCase()}</h1> 
            </div>
            <div className='user_all_menu_products_container'>
                {sortedMenu.map(prod => <UserProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default UserProductsCardsContainer;