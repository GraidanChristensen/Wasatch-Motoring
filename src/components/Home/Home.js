import './Home.css';
import {Component} from 'react';
import biglogo from '../../media/biglogo.png'

class Home extends Component{
  render(){
    return (
        <div className="Home" id="Home">
            <img className="homeimage" src={biglogo} alt="logo"/>
            <h2 className="homeHeading">Utah County's new go to for window tinting and paint protection film. Call or email us to set up an appointment</h2>
        </div>
    )
  }
}

export default Home;