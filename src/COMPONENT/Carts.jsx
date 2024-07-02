import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { sample } from '../App';

const Carts = () => {
  const { product, setproduct, serch, addpro, setaddpro } = useContext(sample);
  const cartapi = "https://dummyjson.com/products";

  useEffect(() => {
    axios.get(cartapi).then((res) => setproduct(res.data.products));
  }, [setproduct]);
  
  const filterproduct = product.filter((item) => item.title.toLowerCase().includes(serch.toLowerCase()));

  const [addedProduct, setaddedProduct] = useState([]);
  const add = (arg) => {
    if (!addedProduct.includes(arg.id)) {
      setaddpro([...addpro, { ...arg, quantity: 1 }]);
      setaddedProduct([...addedProduct, arg.id]);
    }
  };

  return (
    <div className="card-container">
      {(serch.length > 0 ? filterproduct : product).map((arg) => (
        <Card className="card-custom" key={arg.id}>
          <Card.Img variant="top" className="card-img-custom" src={arg.images[0]} />
          <Card.Body className="card-body-custom">
            <div style={{ height: "200px" }}>
              <Card.Title className="card-title-custom">{arg.title}</Card.Title>
              <Card.Text className="card-text-custom">Category: {arg.category}</Card.Text>
              <Card.Text className="card-text-custom">Price: ${arg.price}</Card.Text>
              <Card.Text className="card-text-custom">Stock: {arg.stock}</Card.Text>
            </div>
            <Button variant="primary" className="card-button-custom" onClick={() => add(arg)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Carts;
