import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from './context/Cartcontext'; 

const MyCard = ({ desc, id, img, ingredients, name, price }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <Card className= "cardajustes" style={{ width: '12rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
          <br />
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
          <br />
          <strong>Precio:</strong> ${price}
        </Card.Text>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="primary" onClick={() => addToCart({ id, name, price, ingredients })}>
  Añadir
</Button>
  
          <Button variant="danger" onClick={() => removeFromCart(id)}>Quitar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;



