import './Contact.css';
import {Component} from 'react';

class Contact extends Component{
  render(){
    return (
        <div className="Contact" id="Contact">
            <div className="contactContainer">
              <a rel="noreferrer" className='address' href='https://maps.google.com/?q=122N 1800W Suite 9, Lindon UT 84042'>
              <a rel="noreferrer" className='address' href='https://maps.apple.com/maps?q=122N 1800W Suite 9, Lindon UT 84042'>
                <h3 className='address'>122N 1800W Suite 9, Lindon UT 84042</h3>
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