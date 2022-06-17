import './Contact.css';
import {Component} from 'react';

class Contact extends Component{
  render(){
    return (
        <div className="Contact" id="Contact">
            <div className="contactContainer">
              <a className='address' href='https://maps.google.com/?q=165 North 1330 West #A4 Orem, Utah 84057' target="_blank">
              <a className='address' href='https://maps.apple.com/maps?q=165 North 1330 West #A4 Orem, Utah 84057' target="_blank">
                <h3 className='address'>165 North 1330 West #A4 Orem, Utah 84057</h3>
              </a>
              </a>
              <h3>1-801-874-0234<br/>info@wasatchmotoring.com</h3>
              <h3>Hours:<br/>M-F: 9:00a.m. - 5:00p.m.</h3>
            </div>
        </div>
    )
  }
}

export default Contact;