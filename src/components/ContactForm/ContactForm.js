import './ContactForm.css';
import emailjs from 'emailjs-com';
import {Component} from 'react';
class ContactForm extends Component{

    sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_xzdc195', e.target, 'user_vyovmBpG6SF8xDRiqVuIo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      }


  render(){
    return (
        <div className="ContactForm" id="ContactForm">
            <div className="container">
                <form className="form" onSubmit={this.sendEmail}>
                    <h1 className="formHeading">Leave a Message</h1>
                    <h3 className="formHeading">Name</h3>
                    <input type="text" className="formInput" placeholder="Name" name="name"/>
                    <h3 className="formHeading">Email</h3>
                    <input type="text" className="formInput" placeholder="Email" name="email"/>
                    <h3 className="formHeading">Message</h3>
                    <textarea className="formInput" id="" cols="30" rows="8" placeholder="Your message" name ="message"></textarea>
                    <input type="submit" className="submitButton" value="Send Message"></input>
                </form>
            </div>
        </div>
    )
  }
}

export default ContactForm;