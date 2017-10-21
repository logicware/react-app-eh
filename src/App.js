import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import { TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from "./lib/todoHelpers";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn JSX', isComplete: true },
      { id: 2, name: 'Build App', isComplete: false },
      { id: 3, name: 'Upload App to Heroku', isComplete: false }
    ],
    currentTodo: ''
  };

  handleInputChange = (event) => {
    this.setState({ currentTodo: event.target.value });
  };

  handleEmptySubmit = (event)  => {
    event.preventDefault();
    this.setState({errorMessage: 'Please supply a todo name'});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({todos: updatedTodos, currentTodo: '', errorMessage: ''});
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
