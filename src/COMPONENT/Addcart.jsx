import React, { useContext } from 'react';
import { sample } from '../App';
import { Button, Card, Container } from 'react-bootstrap';


const Addcart = () => {
  const { addpro, setaddpro } = useContext(sample);

  return (
    <Container className="cards-container">
      <div className="cards-list">
        {addpro.filter(item => item.quantity > 0).map((arg, cartindex) => (
          <Card key={cartindex} className="card-custom">
            <Card.Img variant="top" className="card-img-custom" src={arg.images[0]} />
            <Card.Body className="card-body-custom">
              <div style={{ height: '150px', textAlign: 'center' }}>
                <Card.Title className="card-title-custom">{arg.title}</Card.Title>
                <Card.Text className="card-text-custom">Price: ${arg.price * arg.quantity}</Card.Text>
                <Card.Text className="card-text-custom">Quantity: {arg.quantity && arg.quantity}</Card.Text>
              </div>

              <div className="card-button">
                <Button 
                  onClick={() => {
                    const _cart = addpro.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity:item.quantity && item.quantity > 0 ? item.quantity - 1 : 0 }
                        : item;
                    });
                    setaddpro(_cart);
                  }}
                >
                  -
                </Button>
                <span style={{margin:"0 5px"}}>{arg.quantity}</span>
                <Button 
                  onClick={() => {
                    const _cart = addpro.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setaddpro(_cart);
                  }}
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h2 className="total-price">
        Total Price: {""}
        {addpro.map((item) => item.price * item.quantity).reduce(
          (total, val) => total + val,
          0
        )}
      </h2>
    </Container>
  );
};

export default Addcart;
