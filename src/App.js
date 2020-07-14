import React from 'react';
import './App.css';
import AppTodoList from './AppTodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todo: [],
    };
  }

  handleInput = (event) => {
    const eventValue = event.target.value;
    this.setState({ input: eventValue });
  };

  handelClick = () => {
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    };

    this.setState({
      input: '',
      todo: this.state.todo.concat(newItem),
    });
  };


  render() {
    return (
      <div className="container">
        <h1>Our awesome TODO</h1>
        <div className="todo-component">
          <div className="todo-component__control">
            <input type="text" id="todo-input" onChange={this.handleInput} placeholder="Add todo" value={this.state.input} />
            <button id="todo-add" onClick={this.handelClick}>Add</button>
          </div>
          {this.state.input.length ? <span id="counter"> {this.state.input.length} </span> : null}
          <div className="todos-text">
            <p id="total-todos"></p>
            <p id="completed-todos"></p>
          </div>
          <AppTodoList todo={this.state.todo} />
        </div>
      </div>
    );
  }
}

export default App;
