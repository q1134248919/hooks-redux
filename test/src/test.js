import React, { Component } from 'react'
import Test1 from './test1.js'
 
import {testaction,testaction1,testaction2} from './action'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    
    return {
      val:state
    };
}
function mapDispatchToProps(dispatch) {
     
    return {
      onIncreaseClick: () => dispatch(testaction1('111'))
    }
  }
  class test extends Component {
   

    
    componentDidMount (){
        this.props.onIncreaseClick()
    }

     
    render() {
        
         const val =this.props.val
       console.log(val.name);
 
        return (
            <div>
          {val.name.name?val.name.name:null}
          
            
            <Test1/>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(test);
