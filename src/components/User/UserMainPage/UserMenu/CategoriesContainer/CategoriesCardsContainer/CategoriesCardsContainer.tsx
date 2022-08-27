import { useAppSelector } from '../../../../../../hook';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import './CategoriesCardsContainer.css';
import uniqid from 'uniqid';
import SimpleImageSlider from 'react-simple-image-slider';

const CategoriesCardsContainer = () => {
    const categories = useAppSelector(state => state.menu.categories);
    const images = [
        { url: "https://img.freepik.com/free-vector/realistic-cheeseburger-chalkboard-background_79603-1044.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/realistic-burger-chalkboard-background_79603-1042.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/delicious-realistic-burger-chalkboard-background_79603-1041.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/falling-realistic-burger-chalkboard-background_79603-1043.jpg?w=2000" },
      ];

    return (
        <div className="user_baw_container">
            <div>
                <SimpleImageSlider
                    width={1200}
                    height={500}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay
                />
            </div>
            <div className="user_our_menu_container">
                <div>Our menu</div>
            </div>

        <div className='user_categories_cards_container'>
            {categories.map(categ => <CategoriesCard key={uniqid()} category={categ} />)}
        </div>
        </div>
    )
}

export default CategoriesCardsContainer;