import './Header.css';
import {Component} from 'react';

class Header extends Component{
  render(){
    return (
        <div className="Header">
            <ul className="menu">
                <h1>Home</h1>
                <h1>Products</h1>
                <h1>Contact Us</h1>
            </ul>
        </div>
    )
  }
}

export default Header;