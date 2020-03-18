import React, { Component } from 'react'
import withEnvironment from './nice';

 class n extends Component {
 
    render() {
        console.log(this.props);
        return (
            <div>
             5555555555555
            </div>
        )
    }
}
export default withEnvironment(n);
