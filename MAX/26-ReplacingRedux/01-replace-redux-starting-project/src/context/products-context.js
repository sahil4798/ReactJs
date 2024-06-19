import React, { useState } from "react";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

const ProductProvider = (props) => {
  const [productList, setProductList] = useState(DUMMY_PRODUCT);
  const toggleFavorite = (productId) => {
    setProductList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductContext.Provider
      value={{ products: productList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
