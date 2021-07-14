import React, {Component} from 'react';

let Person = (props) => {
    return (
        <div>
            <h2>Name: {props.name}, Age: {props.age}. {props.children}</h2>
        </div>
    )
}

// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render(){
//         // console.log(this.props);
//         return (
//             <div>
//                 <h2>Name: {this.props.name}, Age: {this.props.age}. {this.props.children}</h2>
//             </div>
//         )
//     }
// }

export default Person;