import React, { Component } from "react";

import Item from './item';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/antd/dist/antd.js'
import {  message } from 'antd';
import Test from './test';
import Input from './test1'

function  tosmall(x) { 
  return parseInt(x)/6;
 }
 function tobig(x){
   return parseInt(x)*6;
 }
class App extends Component {
  constructor(props) {
    super(props);
     this.handleList=this.handleList.bind(this);
    this.state = {
      list: [],
      value: "",
      values:"",
      number:"",
      big:true
    };
  }
   componentDidMount(){
    message.info("你真棒",1);
   }
  render() {
    const { value,values,big,number} = this.state;
    const number1=big===true?number:tosmall(number);
    const number2=big===false?number:tobig(number);
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.handlevalue}
        />
        <button onClick={this.handleList}>搜索</button>
        <ul className="list">
          {this.getItem()}
        </ul>
        <Test   number={number1}   onnumberchange={this.numbersmall}     />
        <Test   number={number2}     onnumberchange={this.numberbig}     />
        <Input value="测试"/>
      </div>
    );
  }
  
    numbersmall=(number)=>{
      this.setState({
        big:true,
        number
      })
    }


    numberbig=(number)=>{
      this.setState({
        big:false,
        number
      })
    }
   
   getItem(){
     const { list }=this.state;
     return list
     ? list.map((item, index) => {
         return (
           <Item  key={index} content={item} indexs={index} deleteItem={this.deletelist.bind(this)} />
         );
       })
     : null}

   
    
  handlevalue=(e)=>{
    // this.setState({
    //   value: e.target.value
    // });
     var value=e.target.value;
     this.setState((state,props)=>({
      value
     }))

  }
  handleList() {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ""
    });
   
  }
  deletelist(number) {
    let currentList = [...this.state.list];
    currentList.splice(number, 1);
    this.setState({
      list: currentList
    });
    
  }
}
export default App;
