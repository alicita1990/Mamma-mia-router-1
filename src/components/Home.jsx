import React from 'react';
import Header from './Header';
import MyCard from './MyCard';
import {pizzas} from './pizzas'


const Home = () => {
  return (
    <div>
        <Header/>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pizzas.map(pizzas => (
        
        <MyCard
          key={pizzas.id}
          name={pizzas.name}
          price={pizzas.price}
          ingredients={pizzas.ingredients}
          img={pizzas.img}
          desc={pizzas.desc}
        />

      ))}
    </div>
      
    </div>
  );
}

export default Home;
