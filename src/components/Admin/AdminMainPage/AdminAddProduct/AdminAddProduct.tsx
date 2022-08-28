import { useAppDispatch, useAppSelector } from '../../../../hook';
import './AdminAddProduct.css';
import { useState } from 'react';
import { Button, Dropdown, Input, Menu, message, Modal, Space } from 'antd';
import { IMenu } from '../../../../features/types/userTypes';
import { DownOutlined, FileAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { addProduct } from '../../../../features/menuSlice';

const AdminAddProduct = () => {
    const dispatch = useAppDispatch();
    const lastProduct = useAppSelector(state => state.menu.menu[state.menu.menu.length - 1]);
    const [imageSource, setImageSource] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductCategory, setNewProductCategory] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
      };
    
    const handleOk = () => {
      if(imageSource && newProductName && newProductPrice && newProductCategory){
          const newProduct: IMenu = {
              id: lastProduct.id + 1,
              name: newProductName,
              price: Number(newProductPrice),
              favorite: false,
              category: newProductCategory,
              img: imageSource
          };
    
          dispatch(addProduct(newProduct));
          setIsModalVisible(false);
          message.success(`${newProductName} успешно добавлен!`);
      } else {
          message.error('Произошла ошибка. Проверьте вводимые данные.');
      }
    };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const fileUploadHandler = (input: any): any => {
        let file = input.target.files[0];
        setImageSource(URL.createObjectURL(file));
      };

      const handleMenuClick: MenuProps["onClick"] = (e) => {
        switch (e.key) {
          case "1":
            setNewProductCategory("burgers");
            break;

          case "2":
            setNewProductCategory("drinks");
            break;

          case "3":
            setNewProductCategory("snacks");
            break;

          case "4":
            setNewProductCategory("deserts");
            break;
        }
      };

      const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: 'Бургеры',
              key: '1',
            },
            {
              label: 'Напитки',
              key: '2',
            },
            {
              label: 'Закуски',
              key: '3',
            },
            {
              label: 'Десерты',
              key: '4',
            },
          ]}
        />
      );

      const changeNewProductPriceHandler = (e: any) => {
        if(Number(e.target.value)) {
            setNewProductPrice(e.target.value)
        }
      };
    
    return (
        <div className='add_product_container'>
            <Button type="primary" onClick={showModal} icon={<FileAddOutlined />} >
                Добавить продукт
            </Button>
            <Modal width={1000} title="Добавление продукта" visible={isModalVisible} cancelText="Отменить" okText="Добавить" onOk={handleOk} onCancel={handleCancel}>
                <div className='add_product_modal_container'>
                  <div className="product_name_input">
                    <input type="file" onChange={fileUploadHandler} />
                    <Input value={newProductName} onChange={(e) => setNewProductName(e.target.value)} placeholder='Название продукта' />
                    <Input value={newProductPrice} onChange={changeNewProductPriceHandler} placeholder='Цена' />
                    <Dropdown overlay={menu}>
                        <Button>
                            <Space>
                                Категория
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                  </div>
                </div>
            </Modal>
        </div>
    )
}

export default AdminAddProduct;