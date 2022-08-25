import './CategoriesContainer.css';
import { Route, Routes } from 'react-router-dom';
import UserProductsCardsContainer from './UserProducts/UserProductsCardsContainer/UserProductsCardsContainer';
import CategoriesCardsContainer from './CategoriesCardsContainer/CategoriesCardsContainer';

const CategoriesContainer = () => {
   
    return (
        <div>
            <Routes>
                <Route path='/' element={<CategoriesCardsContainer />}/>
                <Route path='/burgers' element={<UserProductsCardsContainer name='burgers' />} />
                <Route path='/drinks' element={<UserProductsCardsContainer name='drinks' />} />
                <Route path='/snacks' element={<UserProductsCardsContainer name='snacks' />} />
                <Route path='/deserts' element={<UserProductsCardsContainer name='deserts' />} />
            </Routes>
        </div>
    )
}

export default CategoriesContainer;