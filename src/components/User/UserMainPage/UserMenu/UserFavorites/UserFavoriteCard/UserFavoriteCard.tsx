import './UserFavoriteCard.css'
import { Button, Space } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';

interface IProductsPayload {
    id: number;
    name: string;
    img: string;
    price: number;
    category: string;
    favorite: boolean;
    save: boolean;
  }

const UserFavoriteCard = ({ product }: { product: IProductsPayload }) => {
  return (
    <div className="product_card_container">
      <img src={product.img} alt={product.category} />
      <div>{product.name}</div>
      <Space>
        <Button type='primary' icon={<ShoppingCartOutlined />}></Button>
        <Button type='primary' icon={<DeleteOutlined />}></Button>
        </Space>
    </div>
  );
};

export default UserFavoriteCard;
