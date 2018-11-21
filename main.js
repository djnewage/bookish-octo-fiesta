// let todoList = {
//   todos: [],
//   displayTodos: function () {
//     console.log('My Todos:');
//     for (i = 0; i < this.todos.length; i++){
//       console.log(this.todos[i].todoText);
//     };
//   },
//   addTodos: function (todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodos: function (position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodos: function (index) {
//     this.todos.splice[index,1];
//     this.displayTodos();
//   },
//   toggleCompleted: function () {
//     let todo = this.todos[position];
//     todos.completed = !todo.completed;
//     this.displayTodos();
//   }
// };




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
