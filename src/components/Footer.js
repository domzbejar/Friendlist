import React, {Component} from 'react';
import moon from '../img/full-moon.png';


class Footer extends Component{
    render(){   
        return(
            <footer>
                <div className="moon-container">
                    <img id="fullmoon" src={moon} />
                </div>
            </footer>
        )
    }
}
export default Footer;