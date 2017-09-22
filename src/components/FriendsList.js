import React, {Component} from 'react';
import {Link} from 'react-router'
//import $ from 'jquery';

class FriendsList extends Component{
    render(){
            var friendlist = this.props.data.map((data,i)=>{
                return(
                    <div  className="pod-container" key={i}>
                        <div className="pod">
                            <Link to="about" ><button id={data.id} className="pod-button view">view</button></Link>
                            <button className="pod-button edit">edit</button>
                            <button id={data.id} onClick={this.props.removedata} className="pod-button delete">remove</button>
                        </div>
                        <h3>Name: <span>{data.name}</span></h3>
                        <h3>Type: <span>{data.alientype}</span></h3>
                        <h3>Planet of Origin: <span>{data.planet}</span></h3>
                    </div>
                );
            })
        
        return(
           
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        {friendlist}
                    </div>
                </div>
            </div>

        )
    }
}
export default FriendsList;

