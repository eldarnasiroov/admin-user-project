import { useAppSelector } from '../../../../../../hook';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import './CategoriesCardsContainer.css';

const CategoriesCardsContainer = () => {
    const categories = useAppSelector(state => state.menu.categories);

    return (
        <div className='categories_cards_container'>
            {categories.map(categ => <CategoriesCard category={categ} />)}
        </div>
    )
}

export default CategoriesCardsContainer;