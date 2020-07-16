import React from 'react';
import './App.css';
import AppTodoList from './AppTodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todo: JSON.parse(localStorage.getItem('todos')) || [],
    };
  }

  handleInput = (event) => {
    const eventValue = event.target.value;
    this.setState({ input: eventValue });
  };

  handelClick = () => {
    if (this.state.input.length === 0) {
      return alert("Please introduce your task!!!");
    }
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

  handelTick = (item) => {
    const greenFrame = this.state.todo.map(todo => {
      if (todo.id === item.id) {
        todo.status = !todo.status;
      }
      return todo;
    });

    this.setState({
      todo: greenFrame
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todo)));
  };

  handleRemove = (item) => {
    const removedItem = this.state.todo.filter(todo => {
      if (todo.id !== item.id) {
        return todo;
      }

    });

    this.setState({
      todo: removedItem
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todo)));
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
          <AppTodoList todo={this.state.todo}
            handelTick={this.handelTick}
            handleRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default App;
