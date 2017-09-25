import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const divStyle ={
    color : '#fff',
    fontStyle : 'arial,tahoma,sans-serif',
    fontSize : 20
}


let cars = ['honda','mistubishi','nissan']
let myCars = new Set(cars);


myCars.add('mercedes');
myCars.add({"bike":"harley"});

function showCars($cars = 'no cars'){
    console.log($cars)
}


class About extends Component {
    
     render(){
        showCars(myCars);
        return(
            <div style={divStyle}>
                <h1>About wrewrww</h1>
            </div>
        );
    }
}

export default About;