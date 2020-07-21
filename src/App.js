import React from 'react';
import './App.css';
import AppTodoList from './AppTodoList';
import AppToDoListStats from './AppToDoListStats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todo: JSON.parse(localStorage.getItem('todos')) || [],
      checkedItems: JSON.parse(localStorage.getItem('completed')) || []
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
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todo)));
  };

  handelTick = (item) => {
    const greenFrame = this.state.todo.map(todoItem => {
      if (todoItem.id === item.id) {
        todoItem.status = !todoItem.status;
      }
      return todoItem;
    });

    const checkedTodoItems = this.state.todo.filter(checkedTodoItems => {
      if (checkedTodoItems.status === true) {
        return checkedTodoItems;
      }
      else { return null; }

    });

    this.setState({
      todo: greenFrame,
      checkedItems: checkedTodoItems
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todo)),
      localStorage.setItem('completed', JSON.stringify(this.state.checkedItems))
    );

  };

  handleRemove = (item) => {
    const removedItem = this.state.todo.filter(todoItem => {
      if (todoItem.id !== item.id) {
        return todoItem;
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
          <AppToDoListStats todo={this.state.todo}
            handleReset={this.handleReset}
            checkedItems={this.state.checkedItems} />
          <AppTodoList todo={this.state.todo}
            handelTick={this.handelTick}
            handleRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default App;
