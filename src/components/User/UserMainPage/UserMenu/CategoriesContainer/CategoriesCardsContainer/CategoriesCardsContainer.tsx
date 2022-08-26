import { useAppSelector } from '../../../../../../hook';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import './CategoriesCardsContainer.css';
import uniqid from 'uniqid';
import SimpleImageSlider from 'react-simple-image-slider';

const CategoriesCardsContainer = () => {
    const categories = useAppSelector(state => state.menu.categories);
    // const images = [
    //     { url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1779250930939d73cef4805edbc2d54c1ce8789e-1000x745.png" },
    //     { url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/5373e1f1b009afac863bffbd9967d6ddc03874a4-1000x745.png" },
    //     { url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d28943717d45a54a4affa0a3544d35bc25d9e648-1000x745.png" },
    //     { url: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/af04cb8610fda55b2ee3ead55418c0992035c0ce-1000x745.png" },
    //   ];
    const images = [
        { url: "https://img.freepik.com/free-vector/realistic-cheeseburger-chalkboard-background_79603-1044.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/realistic-burger-chalkboard-background_79603-1042.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/delicious-realistic-burger-chalkboard-background_79603-1041.jpg?w=2000" },
        { url: "https://img.freepik.com/free-vector/falling-realistic-burger-chalkboard-background_79603-1043.jpg?w=2000" },
      ];

    return (
        <div className="baw_container">
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
            <div className="our_menu_container">
                <div>Our menu</div>
            </div>

        <div className='categories_cards_container'>
            {categories.map(categ => <CategoriesCard key={uniqid()} category={categ} />)}
        </div>
        </div>
    )
}

export default CategoriesCardsContainer;