import React, {Component} from 'react';
import $ from 'jquery';


    const url = "http://rest.learncode.academy/api/domz/friends";


var Api = {
    FetchAll(){
        $.ajax({
        type: 'GET',
        url: 'http://rest.learncode.academy/api/domz/friends',
        //dataType: 'json',
        success: function(data) {
          //console.log("I have friends!", data);
          this.setState({
                data : data
          })
          //return data;
        }
      });   
    },
    
    PostApi(){
        
    }
    
    
    
}
export default Api;

