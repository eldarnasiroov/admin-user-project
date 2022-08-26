import './AdminProductsCardsContainer.css';
import uniqid from 'uniqid';
import { useAppSelector } from '../../../../../hook';
import AdminProductCard from '../AdminProductCard/AdminProductCard';
import { useState } from 'react';
import { Input, Select, Modal, Button } from 'antd';
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
          <Option value="">All</Option>
          <Option value="burgers">Burgers</Option>
          <Option value="snacks">Snacks</Option>
          <Option value="drinks">Drinks</Option>
          <Option value="deserts">Deserts</Option>
        </Select>
      );
      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
          

    return (
        <div className='all_menu_container'>
            <div className="menu_iscription_container">
                <h1 className="menu_iscription">SEARCH</h1> 
            </div>
            <div className='search_input'>
                <Input onChange={(e) => setSearchingProduct(e.target.value)} addonAfter={selectAfter} defaultValue={searchingProduct} />
            </div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal width={1000} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <AdminAddProduct /> 
            </Modal>
            <div className='all_menu_products_container'>
                {menu.map(prod => <AdminProductCard key={uniqid()} product={prod} />)}
            </div>
        </div>
    )
}

export default AdminProductsCardsContainer;