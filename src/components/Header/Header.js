import './Header.css';
import {Component} from 'react';
import {Link} from 'react-scroll';
import logo from '../../media/logo.png';
class Header extends Component{
  constructor(){
    super();

    this.state={
      menuToggle: false
    }
  }

  render(){
    return (
        <div className="Header">
            <ul className="menu">
                <Link className="menuLink"
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Home
                </Link>
                <Link className="menuLink"
                    activeClass="active"
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Products
                </Link>
                <Link className="menuLink"
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Contact Us
                </Link>
            </ul>
            <Link className="menuLink"
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
              <h5 className="phone">1-801-874-0234</h5>
        </div>
    )
  }
}

export default Header;