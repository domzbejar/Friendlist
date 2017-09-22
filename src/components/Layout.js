import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import SearchBar from './SearchBar';
import FriendsList from './FriendsList';




const url = 'http://rest.learncode.academy/api/alien/friends';


class Layout extends Component {
    constructor(){
        super();
        this.state = {
            all : [],
            newData : [],
        }
    }
    
    
    fetchAll(){
        return fetch(url,{
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
        })
    }
    postFetch(data){
        return fetch(url, {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
    }
    
    deleteFetch(id){
        return fetch(url+'/'+id, {
          method: "DELETE",
          headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
          },
        }) 
    }
    
    RemoveData(e){
        e.preventDefault();
        var element  = e.target;
        var id = element.id
        this.deleteFetch(id)
        .then(
            this.fetchAll().then((res)=>{
                res.json().then((newData)=>{
                    this.setState({
                        newData : newData.reverse()
                    })
                })
            })  
        );
        //element.remove();
    }
    //OpenProfile(e){
    //    e.preventDefault();
    //    var element = e.target;
    //    var data =  element.id;
    //    console.log(data);
    //}    
    
    
    isset(data){
        if(data===null || data === ""){
            data = "----";
        }
        return data;
    }
    
    AddFriend(e){
        e.preventDefault();
        //var data = {
        //    "name" : this.refs.name.value,
        //    "planet" : this.refs.planet.value
        //}
        
        var form = document.getElementById('friendForm');
        var name = this.isset(form.elements['name'].value);
        var planet = this.isset(form.elements['planet'].value);
        var alientype = form.elements['alientype'].value;
        
        var data = {
            "name" : name,
            "planet" : planet,
            "alientype" : alientype
        }
        
        this.postFetch(data)
        .then(
            this.fetchAll().then((res)=>{
                res.json().then((newData)=>{
                    this.setState({
                        newData : newData.reverse()
                    })
                })
            })
        )
        
        form.elements['name'].value = "";
        form.elements['planet'].value = "";
        form.elements['alientype'].value = "humanoid";
        //this.refs.name.value="";
        //this.refs.planet.value="";
        //console.log(data);
    }
    
   
    
    componentWillMount(){
        this.fetchAll().then((res)=>{
            res.json().then((newData)=>{
                this.setState({
                    newData : newData.reverse()
                })
            })
        })
        
    }
    componentDidMount(){
        
        
    }
    
    
    render(){
        
        return(
            <div className="App">
            <div className="wrapper">
            <Header />
            <SearchBar />
            <Form ref="laymeform" addfriend={this.AddFriend.bind(this)} /> 
            <FriendsList data={this.state.newData} removedata={this.RemoveData.bind(this)}/>
            </div>
            <Footer />
            </div>
            
        );
    }
}

export default Layout;