import { Link } from "react-router-dom";

const DUMMY_PRODUCT = [
  { id: "p1 ", title: "product 1" },
  { id: "p2 ", title: "product 2" },
  { id: "p3 ", title: "product 3" },
];

const Product = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {/* <li>
          <Link to="/products/p1">Product-1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product-2</Link>
        </li>
        <li>
          <Link to="/products/p3">Product-3</Link>
        </li>
        <li>
          <Link to="/products/p4">Product-4</Link>
        </li> */}

        {DUMMY_PRODUCT.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Product;
