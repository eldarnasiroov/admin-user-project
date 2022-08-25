import { Button, Space } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

type ProductType = {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  favorite: boolean;
  count: number;
  totalPrice: number | null;
};

const UserCart = ({ product }: { product: ProductType }) => {
  return (
    <div className="product_card_container">
      <img src={product.img} alt={product.category} />
      <div>{product.name}</div>
      <div>{product.count}</div>
      <div>{product.totalPrice + ' манат'}</div>
      <Space>
        <Button type='primary' icon={<DeleteOutlined />}></Button>
        </Space>
    </div>
  );
};

export default UserCart;
