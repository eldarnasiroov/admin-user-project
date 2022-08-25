import "./UserCartCard.css";
import { ProductTypeInCart } from "../../../../../../features/types";

const UserCart = ({ product }: { product: ProductTypeInCart }) => {
  return (
    <div className="product_card_card">
      <div className="product_in_cart_container">
        <img src={product.img} alt={product.category} width={200} height={200} />
        <div>{product.name}</div>
      </div>
      <div className="product_values">
        {product.price}
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={15} height={12} />
      </div>
      <div className="product_values">{product.count}</div>
      <div className="product_values">
        {product.totalPrice}
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Azeri_manat_symbol.svg" alt="azn" width={15} height={12} />
      </div>
    </div>
  );
};

export default UserCart;
