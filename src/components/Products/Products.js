import './Products.css';
import {Fade} from 'react-reveal';
import {Component} from 'react';

class Products extends Component{
  render(){
    return (
        <div className="Products" id="Products">
            <div className="productChild">
                {/* <Fade bottom> */}
                <a rel="noreferrer" target="_blank" href="https://www.permaplate.com/film"><img alt="perma plate" className="permaPlate" src="https://permaplateaddendums.com/wp-content/themes/va/img/horizontal-logo.png"/></a>
                <h2>We use the very best film products available. We use Permaplate's Clearplate and Solarplate film. </h2>
                {/* </Fade> */}
            </div>
            <div className="productChild">
                {/* <Fade bottom> */}
                <a rel="noreferrer" target="_blank" href="https://www.permaplate.com/film"><img alt="clearplate" className="coatImage" src="https://static.wixstatic.com/media/dfeb02_6b9d7e54da9f4e7e90e135edc90cc083~mv2.png/v1/fill/w_508,h_98,al_c,q_85,usm_0.66_1.00_0.01/dfeb02_6b9d7e54da9f4e7e90e135edc90cc083~mv2.webp"/></a>
                <img className="productImage" alt="productImage"  src="https://static.wixstatic.com/media/dfeb02_e81b4f3baa6f4358b48275f06b83ab90~mv2.png/v1/fill/w_1175,h_390,al_c,lg_1,q_90/dfeb02_e81b4f3baa6f4358b48275f06b83ab90~mv2.webp"/>
                <h2>Clearplate provides a virtually invisible urethane film that can be contoured around the most complex surfaces without distortion. The film protects your paint from high-impact areas and acidic deterioration. </h2> 
                {/* </Fade> */}
            </div>
            <div className="solarplate">
                {/* <Fade bottom> */}
                <h1 className="solarfiller"> </h1>
                <div className="solarInfo">
                    <a rel="noreferrer" target="_blank" href="https://www.permaplate.com/film"><img className="solarplateimage" alt="solarplate" src="https://static.wixstatic.com/media/dfeb02_20ac5eb0b7064305bf741f7714a2856b~mv2.png/v1/fill/w_508,h_98,al_c,q_85,usm_0.66_1.00_0.01/dfeb02_20ac5eb0b7064305bf741f7714a2856b~mv2.webp"/></a>
                    <h1>Permaplate's Solarplate is the best window tint on the market. It provides glare reduction, superior UV protection and comes with a limited lifetime warranty. </h1> 
                </div>
                {/* </Fade> */}
            </div>
        </div>
    )
  }
}

export default Products;