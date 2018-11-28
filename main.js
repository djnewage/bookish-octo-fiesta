let todoList = {
  todos: [],
  displayTodos: function () {
  if (this.todos.length === 0){
      console.log('your todo is empty');
    }else{
      console.log('My Todos:');
      for (i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)',this.todos[i].todoText);
        }else{
          console.log('( )',this.todos[i].todoText);
        }
      }
    }
  },
  // how to pass objects/items to the empty array on line 2
  addTodos: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodos: function (index) {
    this.todos.splice(index,1);
    this.displayTodos();
  },
  toggleCompleted: function (position) {
    let todos = this.todos[position];
    todos.completed = !todos.completed;
    this.displayTodos();
  },
  // how to loop through each item and see if they are true = completed or false = not completed;
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos
    for( i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: if everythings true make eveything false
    if (completedTodos === totalTodos) {
      for (i = 0; i <totalTodos; i++){
        this.todos[i].completed = false;
      }

    // Case 2: Otherwise make eveything true
    }else {
      for (i =0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};


// this is an object that is basically an event listener that you can use with multiple methods in your html
let handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  // this lets you take an input and pass it to the todos array and make an empty text box at the end of it.
  addTodos: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodos: function() {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';

  },

  deleteTodos: function(){
    let deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
    todoList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
    deleteTodosPositionInput.value = '';
  },

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
};



import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    const APIKEY = '6968887b125622478544fb025f75040f'
    axios({
      method: 'get',
      baseURL: 'http://api.openweathermap.org/data/2.5',
      url: '/forecast',
      params: {
        id: '524901',
        APPID: APIKEY
      }
    }).then(res =>
      this.setState({
        list: res.data.list
      })
    )
  }
  render() {
    return (
      <div className="App">
        {this.state.list.map((item, i) => (
          <li key={i}>{item.main.temp}</li>
        ))}
      </div>
    )
  }
}

export default App
