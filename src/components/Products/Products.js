import './Products.css';
import {Fade} from 'react-reveal';
import {Component} from 'react';

class Products extends Component{
  render(){
    return (
        <div className="Products" id="Products">
            <div className="productChild">
                <Fade bottom>
                <a target="_blank" href="https://www.xpel.com/products/paint-protection-film"><img alt="clear coat" className="coatImage" src="https://www.autopaintguard.com/wp-content/uploads/2018/06/XPEL-LOGO.png"/></a>
                <img className="clearCoatProductImage" alt="productImage"  src="https://images.squarespace-cdn.com/content/v1/5b58bd9dc3c16a66c99e6397/1542405933553-4TDK17HYCL5CIA50Y9H5/XPEL.Tesla.png?format=1500w"/>
                <h2>We use XPEL's paint protection film. A virtually invisible urethane film that protects your vehicle's paint from unsightly damage and maximizes re-sale value.</h2> 
                </Fade>
            </div>
            <div className="tintContainer">
                <Fade bottom>
                <h1 className="tintFiller"> </h1>
                <div className="tintInfo">
                    <a target="_blank" href="https://www.xpel.com/products/window-film/automotive-window-tint"><img className="tintLogo" alt="xpel tint" src="https://www.ruddicksdetail.com/wp-content/uploads/xpel_prime_window_tint_film.png"/></a>
                    <h2>XPEL's prime window film is the best tint on the market. It provides glare reduction and superior UV protection, recommended by the Skin Cancer Foundation.</h2> 
                </div>
                </Fade>
            </div>
        </div>
    )
  }
}

export default Products;