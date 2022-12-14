import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState({items: {}, price: 0})

  const addToCart = (index) => {
    const item = bakeryData[index]
    const name = item.name
    const currentCart = cart.items

    if (name in currentCart){
      currentCart[name] += 1
    }
    else{
      currentCart[name] = 1
    }

    const total = cart.price + item.price
    setCart({items: currentCart, price: total})
  }

  const removeFromCart = (index) => {
    const item = bakeryData[index]
    const name = item.name
    const currentCart = cart.items

    if (name in currentCart){
      currentCart[name] -= 1
      const total = cart.price - item.price
      setCart({items: currentCart, price: total})

      if (currentCart[name] == 0){
        delete currentCart[name]
      }
    }
  }


  return (
    <div className="App">
      <div>
        <img className='title' src={require('./title.png')} />
      </div>

      <div className='content'>
        <div className='filter-area'>
          <h2>This is the filter area</h2>
          <p>filter-1</p>
          <p>filter-2</p>
          <p>filter-3</p>

          <div className="cart">
            <h2>Shopping Cart</h2>
            {Object.keys(cart.items).map((key) => (
              <p>{cart.items[key]}x {key}</p>
            ))}
            <p>Total: ${Math.round(cart.price * 100) / 100}</p>
          </div>
        </div>

        <div className='bakeryItems'>
          {bakeryData.map((item, index) => (
          <BakeryItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} count= {item.name in cart.items ? cart.items[item.name] : 0} index={index}></BakeryItem>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
