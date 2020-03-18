import React, { Component } from 'react'


export default class test1 extends Component {
     constructor(props){
        super(props)
      this.state={
         value:'',
      }
     }
   static getDerivedStateFromProps(nextprops,state){
        if(nextprops.value!==state.value){
            return {
                value:nextprops.value
            }
        }
        return null
   }
   
   handleOnChange = event=>{
    this.setState({ value: event.target.value });
   }
    render() {
        const {value} = this.state;
        return (
            <div>
                <input type="text" value={value}    onChange={this.handleOnChange}  />
            </div>
        )
    }
}
