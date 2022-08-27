import './AdminProductCard.css';
import { ProductType } from '../../../../../features/types/userTypes';
import { useState } from 'react';
import { Button, Popconfirm, Space, message } from 'antd';
import { useAppDispatch } from '../../../../../hook';
import { changeProductValues, deleteProduct } from '../../../../../features/menuSlice';
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';

const AdminProductCard = ({product}: {product: ProductType}) => {
    const [nameInputDisabled, setNameInputDisabled] = useState(true);
    const [priceInputDisabled, setPriceInputDisabled] = useState(true);
    const [productName, setProductName] = useState(product.name);
    const [productPrice, setProductPrice] = useState(product.price);
    const dispatch = useAppDispatch();

    const saveChangesHandler = () => {
        setNameInputDisabled(true);
        setPriceInputDisabled(true);
        const payload = {
            id: product.id,
            price: productPrice,
            name: productName
        };
        dispatch(changeProductValues(payload));
        message.success('Изменения сохранены!');
    }
    const deleteProductHandler = () => {
        dispatch(deleteProduct({id: product.id}))
        message.success(`${product.name} успешно удален!`);
      };

    return (
        <div className='product_card_container'>
            <img className='product_image' src={product.img} alt={product.category} width={300} height={300} />
            <span onClick={() => setNameInputDisabled(false)} className={nameInputDisabled ? 'product_name' : 'hidden'}>{product.name}</span>
            <input
                className={nameInputDisabled ? 'hidden' : ''}
                type="text"
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}
            />
            <div className="admin_btns_container">
                <Space direction='vertical'>
                    <Button icon={<SaveOutlined />} onClick={saveChangesHandler} type='primary'>Сохранить</Button>
                    <Popconfirm
                        title={`Вы уверены, что хотите удалить "${product.name}"?`}
                        onConfirm={deleteProductHandler}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <Button icon={<DeleteOutlined />} danger type='primary'>Удалить</Button>
                    </Popconfirm>
                </Space>
            </div>

            <div className='product_price_container'>
                <div onClick={() => setPriceInputDisabled(false)} className={priceInputDisabled ? 'product_price' : 'hidden'}>{product.price}</div>
                <input
                    className={priceInputDisabled ? 'hidden' : 'price_input'}
                    type="text"
                    value={productPrice} 
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={25} height={20} />
            </div>
        </div>
    )
}

export default AdminProductCard;