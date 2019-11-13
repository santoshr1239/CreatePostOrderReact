import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CreateOrder extends Component {

  constructor(props){
    super(props);
    this.state = {product:{}};
  }

  onIdChange = (e)=>{
    this.setState({id:e.target.value});
  }

    getProduct(){
      const axios = require('axios');
      axios.post("http://localhost:8080/BrickOrderingApplication/customersOrders/"+this.state.id)
      .then(res=>{
       console.log(res);
       
        this.setState({product:res.data});
      })
    }

    render() {
      return (
        <div>
          Enter Number of Bricks:<input onChange={this.onIdChange}/>
          <button onClick={this.getProduct.bind(this)}>Create Order Details</button>
          <br/>
         
        
        </div>
      );
    }
  }

export default CreateOrder;
