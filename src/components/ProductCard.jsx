import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import counterContext from "../Context";

const ProductCard = ({ singleData }) => {
  const [show, setshow] = useState(false);
  const [count, setCount] = useContext(counterContext);
  function addToCart() {
    setCount(count + 1);
    setshow(!show);
  }
  function removeFromCart() {
    setCount(count - 1);
    setshow(!show);
  }
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={singleData.productImage} />
      <Card.Body>
        <Card.Title>{singleData.productName}</Card.Title>
        <Card.Text>{singleData.price}</Card.Text>

        {!show ? (
          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        ) : (
          <Button variant="danger" onClick={removeFromCart}>
            Remove Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
