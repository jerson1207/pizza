import React from "react";
import focacciaImg from "../public/pizzas/focaccia.jpg";
import margherita from "../public/pizzas/margherita.jpg";
import spinaci from "../public/pizzas/spinaci.jpg";
import funghi from "../public/pizzas/funghi.jpg";
import salamino from "../public/pizzas/salamino.jpg";
import prosciutto from "../public/pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focacciaImg,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return(
    <main className="menu ">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">  
                
            { pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key= {pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  )
}

function Pizza({ pizzaObj }) {
  return(  
    <li className={`pizza ${pizzaObj.soldOut ? "Sold out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

export default Menu;