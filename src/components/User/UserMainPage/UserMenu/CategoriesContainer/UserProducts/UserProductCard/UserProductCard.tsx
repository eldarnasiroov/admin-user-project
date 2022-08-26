import { Button } from 'antd';
import './UserProductCard.css';
import { ShoppingCartOutlined, MinusCircleOutlined, PlusCircleOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../../../../hook';
import { userAddToCart, userAddToFavorites } from '../../../../../../../features/userDataSlice';
import { useState } from 'react';
import { ProductType } from '../../../../../../../features/types/userTypes';

const UserProductCard = ({product}: {product: ProductType}) => {
    const dispatch = useAppDispatch();
    const [count, setCount] = useState(1);
    const [save, setSave] = useState(false);
    const currentUser = useAppSelector(state => state.user.usersData.find(elem => elem.permission));
    const currentUserFavoriteProduct = currentUser?.favorites.find(elem => elem.id === product.id);
    
    const countUpHandler = () => {
        setCount(count + 1);
    }
    const countDownHandler = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    }
    const addToCartHandler = () => {
        dispatch(userAddToCart({...product, count, totalPrice: null}));
        setCount(1);
    }
    const addToFavoritesHandler = () => {
        setSave(!save);
        dispatch(userAddToFavorites({...product, save:!save}));
    }

    return (
        <div className='product_card_container'>
            <img src={product.img} alt={product.category} />
            <span className='product_name'>{product.name}</span>
            <div>
                <div className='add_to_cart_btns'>
                    <div className='up_down_btns'>
                        <Button onClick={countDownHandler} icon={<MinusCircleOutlined style={{fontSize: '20px'}} />} ></Button>
                        <div className='product_count'>{count}</div>
                        <Button onClick={countUpHandler} icon={<PlusCircleOutlined style={{fontSize: '20px'}} />} ></Button>
                    </div>
                    <Button onClick={addToCartHandler} type='primary' icon={<ShoppingCartOutlined />}>В Корзину</Button>
                </div>
                <div className='product_price_container'>
                    <h3 className='product_price'>{product.price}</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={25} height={20} />
                </div>
                <div className='favorite_button'>
                    <Button type='link' onClick={addToFavoritesHandler}  icon={currentUserFavoriteProduct ? <HeartFilled style={{ color: 'red', fontSize: '30px' }} /> : <HeartOutlined style={{ fontSize: '30px' }} />}></Button>
                </div>
            </div>
        </div>
    )
}

export default UserProductCard;