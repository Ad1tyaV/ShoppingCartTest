import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'
import CartData from './components/CartData'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ViewCart from './components/ViewCart'

function App() {
  return (
    <CartData>
    <div className="App">    
    <Router>
            <Navbar/>
            <br/>      
            <Route path="/ViewCart" component={ ViewCart } />
            <Route path="/Products" component={ Products } />
      </Router>      
    </div>
    </CartData>
    
  );
}

export default App;
