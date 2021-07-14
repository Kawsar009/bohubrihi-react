import React from 'react';
import './App.css';
// import Person from './components/Person';
import Book from './components/Book';

// Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person />
//     </div>
//   );
// }

// Class Component
class App extends React.Component {
  // State
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinchi Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Cohelo" },
    ],
    otherProp: "I am some other Prop"
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinchi Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" },
      ]
    });
  }

  changeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinchi Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Franz Kafka" },
      ]
    });
  }
  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };
    return (
        <div className="App">
          {/* <h1>Hello World!</h1>
          <Person name="Rahim" age="30">I am a farmer</Person>
          <Person name="Karim" age="29" />
          <Person name="Salam" age="25" />
          <Person name="Barkat" age="27" /> */}
          <h1 style={style}>Book List</h1>
          {/* <button onClick={ this.changeBookState.bind(this, "Nineteen Eighty-Four") }>Change State</button> */}
          <button onClick={ () => this.changeBookState("Nineteen Eighty-Four") }>Change State</button>
          <input type="text" onChange={this.changeWithInputState} />
          <Book 
          bookName={this.state.books[0].bookName} 
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} />
          <Book 
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
          <Book 
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen 84")} />
       </div>
    );
  }
}

export default App;
