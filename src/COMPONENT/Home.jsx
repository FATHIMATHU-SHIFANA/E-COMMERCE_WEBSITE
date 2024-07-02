import React, { useContext } from 'react';
import { Container, Form, Navbar, Nav, Badge } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi2';
import { sample } from '../App';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const { serch, setserch, addpro } = useContext(sample);
  const nav = useNavigate();

  const getdata = (e) => {
    setserch(e.target.value);
  };

  const handlesearch = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand className="navbar-brand-custom" href="#">
            E-COMMERCE
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Form className="d-flex" onSubmit={handlesearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getdata}
                name="title"
                className="search-bar"
              />
              <HiShoppingCart
                onClick={() => nav('/addcart')}
                className="cart-icon"
              />
              
                {addpro.length}
              
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
