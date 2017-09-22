import React, {Component} from 'react';
import logo from '../img/spacefriends..png'


class Header extends Component{
    
    render(){
        const logostyle = {
            height: 222,
            width: 180,
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            padding: ".5em",
        };
        return(
            <header>
                <img src={logo} style={logostyle}/>
            </header>
        )
    }
}
export default Header;