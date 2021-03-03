import './Contact.css';
import {Component} from 'react';

class Contact extends Component{
  render(){
    return (
        <div className="Contact" id="Contact">
            <div className="contactContainer">
                <h3>165 North 1330 West #A4 Orem, Utah 84057</h3>
                <h3>1-801-874-0234<br/>wasatchmotoring@gmail.com</h3>
                <h3>Hours:<br/>M-F: 9:00a.m. - 6:00p.m.</h3>
            </div>
        </div>
    )
  }
}

export default Contact;