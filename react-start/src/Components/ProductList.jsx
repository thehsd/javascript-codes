import products from "../constants/data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      {products.map((item) => (
        <ProductItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
