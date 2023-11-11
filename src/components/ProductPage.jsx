import React from "react";
// import { Button, Card } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductPage = ({ data, count, setCount }) => {
  return (
    <>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-black">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="fw-normal text-black-50 mb-0">
            With this shop hompeage template
          </p>
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-5">
            {data.map((e) => {
              return (
                <ProductCard singleData={e} count={count} setCount={setCount} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
