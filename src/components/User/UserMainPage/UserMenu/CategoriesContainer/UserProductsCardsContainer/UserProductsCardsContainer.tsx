import { useAppSelector } from '../../../../../../hook';
import UserProductCard from '../../UserProducts/UserProductCard/UserProductCard';
import './UserProductsCardsContainer.css';
import uniqid from 'uniqid';

const UserProductsCardsContainer = ({name}: {name: string}) => {
    const menu = useAppSelector((state) => state.menu.menu);
    const sortedMenu = menu.filter(elem => elem.category === name);
    console.log(sortedMenu);
    

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">{name.toUpperCase()}</h1> 
            </div>
            <div className='all_menu_products_container'>
                {sortedMenu.map(prod => <UserProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default UserProductsCardsContainer;