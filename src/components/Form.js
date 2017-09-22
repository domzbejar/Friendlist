import React, {Component} from 'react';

class Form extends Component {
    
   
    render(){
        return(
            
            <div className="form-container">
                <section className="container">
                <form method="POST" className="friend-form" id="friendForm">
                    <div className="row">
                        <div className="column1">
                            <input name="name" placeholder="Your Name" ref="name" type="text"/>
                        </div>
                        <div className="column1">
                            <input name="planet" placeholder="Planet of origin" ref="planet" type="text"/>
                        </div>
                        <div className="column1">
                            <select name="alientype" ref="alienType">
                                <option defaultValue value="humanoid">Humanoid</option>
                                <option value="insect">Insect</option>
                                <option value="mech">Mech</option>
                                <option value="reptillia">Reptillia</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column3">
                            <button onClick={this.props.addfriend}>Add Friend</button>
                        </div>
                    </div>
                </form>
                </section>
            </div>
            
        );
    }
}

export default Form;