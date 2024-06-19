import { Fragment } from "react";

import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <Fragment>
      <h1>Welcome to Home</h1>
      <p>
        Go to -{/* <a href="/products">list of Products</a> */}
        <Link to="/products">list of Products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate to product</button>
    </Fragment>
  );
};

export default Home;
