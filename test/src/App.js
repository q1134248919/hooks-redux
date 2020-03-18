// import React, { useState, useEffect } from "react";
// localStorage.setItem('test',1);
// import Test from './test1'
// export default function Hooks() {

//   const [list, setList] = useState({ data: {} });
//  const [test,testFn ] = useState('');
//   useEffect(() => {
//     console.log(list);
//   }, [list]);

//   function handleGet(val) {
//     setList(val);
//   }

//   useEffect(() => {

//     handleGet({ data:{num: 1, number: 2 }});

//   }, []);

//   return (

//     <div>
//       {localStorage.getItem('test')}
//       <button

//         onClick={() =>{
//           setList({
//             data: { num: list.data.num + 1, number: list.data.number + 1 }
//           });
//           localStorage.setItem('test',2);

//         }
//         }
//       >
//         Click me
//       </button>
//        <Test  ref={x=>{
//           console.log(x);
//          }} />
//       {list.data ? (
//         <div>
//           <p>第{list.data.num}次</p>

//         </div>
//       ) : null}
//     </div>
//   );
// }
import Test from "./test1";

import React, { Component } from "react";

function log() {
  console.log("1");
}
export default class test extends Component {
  test = 1;

  go = {
    test: 1,
    test1: 2
  };

  click1() {
    console.log(1);
  }
  componentDidMount() {
    console.log(this.test.click());
  }
  render() {
    return (
      <div>
        <Test
          ref={x => {
            this.test = x;
          }}
          {...this.go}
        />
      </div>
    );
  }
}
