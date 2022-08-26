import './AdminProductsCardsContainer.css';
import uniqid from 'uniqid';
import { useAppSelector } from '../../../../../hook';
import AdminProductCard from '../AdminProductCard/AdminProductCard';

const AdminProductsCardsContainer = () => {
    const menu = useAppSelector((state) => state.menu.menu);

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">ALL</h1> 
            </div>
            <div className='all_menu_products_container'>
                {menu.map(prod => <AdminProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default AdminProductsCardsContainer;