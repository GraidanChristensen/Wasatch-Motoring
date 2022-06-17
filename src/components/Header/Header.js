import './Header.css';
import {Component} from 'react';
import {Link} from 'react-scroll';
import wasatchmotoblack from '../../media/wasatchmotoblack.png';

class Header extends Component{
  constructor(){
    super();

    this.state={
      menuToggle: false
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset > 10){
        const header = document.getElementById('Header')
        header.classList.add('scrolledHeader')
      } else {
        const header = document.getElementById('Header')
        header.classList.remove('scrolledHeader')      
      }
    });
  }

  render(){
    return (
        <div id="Header" className="Header">
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <img className="headerLogo" src={wasatchmotoblack} alt="logo" />
                </Link>
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
            <h4 className="headerPhone" onClick={()=>{window.open('tel:8018740234', "_self")}}>1-801-874-0234</h4>
            <Link className="menuLink"
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <img className="mobileLogo" src={wasatchmotoblack} alt="logo" />
                </Link>
            <Link className="phoneLink"
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Contact Us
                </Link>
        </div>
    )
  }
}

export default Header;