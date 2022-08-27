import "./UserCartCard.css";
import { ProductTypeInCart } from "../../../../../../features/types/userTypes";

const UserCart = ({ product }: { product: ProductTypeInCart }) => {
  return (
    <div className="user_product_card_card">
      <div className="user_product_in_cart_container">
        <img src={product.img} alt={product.category} width={200} height={200} />
        <div>{product.name}</div>
      </div>
      <div className="user_product_values product_values_container">
        {product.price}
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={15} height={12} />
      </div>
      <div className="user_product_values product_values_container">{product.count}</div>
      <div className="user_product_values product_values_container">
        {product.totalPrice}
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={15} height={12} />
      </div>
    </div>
  );
};

export default UserCart;
