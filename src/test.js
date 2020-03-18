import React, { Component } from 'react'
export default class test extends Component {
    constructor(props) {
        super(props);
        this.state={
            inpValu:'',
            number:'',
        }
    }
    
    
    
     static getDerivedStateFromProps(props, state) {
         const {number}=props;
         console.log(number);
         console.log(state.number);
         if(number!==state.number){
             return {
                 number,
             }
         }
         return null;
     }
        
    render() {
       let  number=this.props.number;   
    
        return (
            <div>
            {this.state.number}
            <input type="text" onChange={this.handelChange.bind(this)} value={number||""} />
 
            </div>
        )
    }
    
    handelChange(e){
        this.props.onnumberchange(e.target.value);
    }
    
   
}
