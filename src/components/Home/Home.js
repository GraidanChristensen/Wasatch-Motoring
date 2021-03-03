import './Home.css';
import {Component} from 'react';
import biglogo from '../../media/biglogo.png'

class Home extends Component{
  render(){
    return (
        <div className="Home" id="Home">
            <img className="homeimage" src={biglogo} alt="logo"/>
            <h3 className="homeHeading">Utah County's new go to for tint and clear coat protection.Utah County's new go to for tint and clear coat protection.Utah County's new go to for tint and clear coat protection.Utah County's new go to for tint and clear coat protection.Utah County's new go to for tint and clear coat protection.Utah County's new go to for tint and clear coat protection.</h3>
        </div>
    )
  }
}

export default Home;