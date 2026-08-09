import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  const here = { color: "green", fontSize: "32px", textTransform: "uppercase" };
  const x = "Game";
  console.log(x);
  return (
    <div className="container">
      <h1 style={here}>Gemechu Fekadu : Senior App Developer</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Company</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const bay = pizzas.length;
  return (
    <main className="menu">
      <h1>Our Menu</h1>

      {bay > 0 ? (
        <>
          <p>Traditional foods and also Modern Foods</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Please , wait for some minutes , there is a little bit problem on our
          system
        </p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushroom"
        price={50}
        photoName="/pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : pizzaObj.price} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  // console.log(props);
  const hours = new Date().getHours();
  console.log(hours);
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(isOpen);
  // if (hours >= openHour && hours <= closeHour)
  //   alert("Ammaaf Tajaajilaa ni kennina");
  // else alert("Cufaadha Dhiifama");
  //return React.createElement("footer", null, "We are currently Open");
  // if (isOpen) return <p>Closed</p>;
  return (
    <footer className="footer">
      {/* {" "}
      {new Date().toLocaleTimeString()} We are banaadha!!! */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} to {closeHour}:00 . Come visit us or order
        online.
      </p>
      <button className="btn">Ajajjadhaa!</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
