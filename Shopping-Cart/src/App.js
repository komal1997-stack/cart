import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import productscreen from './components/ProductScreen';
import itemscreen from './components/ItemsScreen'; 
import LoginScreen from './components/LoginScreen';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                
                <Switch>
                    <Route path="/LoginScreen" component={LoginScreen}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/product/:id" component={productscreen}/>
                    <Route path="/items/:category" component={itemscreen}/>
                    
                   
                  </Switch>
                  <footer class="footer">ALL Rights Reserved</footer>
             </div>
             
             
       </BrowserRouter>
      
    );
  }
}

export default App;
