import './AdminProductsCardsContainer.css';
import uniqid from 'uniqid';
import { useAppSelector } from '../../../../../hook';
import AdminProductCard from '../AdminProductCard/AdminProductCard';
import { useState } from 'react';
import { Input, Select } from 'antd';
import AdminAddProduct from '../../AdminAddProduct/AdminAddProduct';

const AdminProductsCardsContainer = () => {
    const [searchingProduct, setSearchingProduct] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const { Option } = Select;
    const menu = useAppSelector(state => state.menu.menu.filter(elem => {
        return (
            elem.name.toUpperCase().includes(searchingProduct.toLocaleUpperCase()) &&
            elem.category.includes(selectedCategory)
            );
          } ));

      const selectAfter = (
        <Select onSelect={(e: string) => setSelectedCategory(e)} defaultValue={''} className="select-after">
          <Option value="">Все категории</Option>
          <Option value="burgers">Бургеры</Option>
          <Option value="snacks">Закуски</Option>
          <Option value="drinks">Напитки</Option>
          <Option value="deserts">Десерты</Option>
        </Select>
      );

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">SEARCH</h1> 
            </div>
            <div className='search_input'>
                <Input onChange={(e) => setSearchingProduct(e.target.value)} addonAfter={selectAfter} defaultValue={searchingProduct} />
            </div>
            <AdminAddProduct />
            <div className='all_menu_products_container'>
                {menu.map(prod => <AdminProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default AdminProductsCardsContainer;