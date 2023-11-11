import React, { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import counterContext from "./Context";

const App = () => {
  const data = [
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20.00 $18.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$50.00 $25.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: "$20.00 $18.00",
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
    },
  ];
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={[counter, setCounter]}>
      <Header count={counter} />
      <ProductPage data={data} />
    </counterContext.Provider>
  );
};

export default App;
