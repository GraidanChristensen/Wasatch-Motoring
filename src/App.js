import './App.css';
import {Component} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

class App extends Component{
  render(){
    return (
        <div className="App">
          <Header/>
          <Home/>
          <Products/>
          <Contact/>
        </div>
    )
  }
}

export default App;