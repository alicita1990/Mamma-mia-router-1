
import React, { useState } from 'react';
import { pizzas } from './pizzas'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => Object.assign({}, pizza, { quantity: 1 })));

  const sumarpizza = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, quantity: pizza.quantity + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const restarpizza = (id) => {
    const updatedCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, quantity: Math.max(0, pizza.quantity - 1) };
        }
        return pizza;
      })
      .filter((pizza) => pizza.quantity > 0); 
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className='nuevobody'>
      <div className='titulo'><h2>Carrito de Compras</h2></div>
      <div className='bodycards'>  
        {cart.map((pizza) => (
          <Card key={pizza.id}>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                {pizza.desc}
                <br />
                <strong>Precio:</strong> ${pizza.price}
                <br />
                <strong>Cantidad:</strong> {pizza.quantity}
              </Card.Text>
              <div>
                <Button variant="secondary" onClick={() => restarpizza(pizza.id)}>-</Button>
                <Button variant="secondary" onClick={() => sumarpizza(pizza.id)} style={{ marginLeft: '10px' }}>+</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='botonprecio'>
        <h3>Total: ${getTotal()}</h3>
        <Button variant="success">Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
