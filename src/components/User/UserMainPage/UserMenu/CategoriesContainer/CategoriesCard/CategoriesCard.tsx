import { Link } from 'react-router-dom';
import { ICategory } from '../../../../../../features/types/userTypes';
import './CategoriesCard.css';

const CategoriesCard = ({category}: {category: ICategory}) => {

    return (
        <>
            <Link to={category.name}>
                <div className='user_category_card'>
                    <img src={category.img} alt={category.name + '-image'} width={279} height={208} />
                    <h3>{category.title}</h3>
                </div>
            </Link>
        </>
    )
}

export default CategoriesCard;