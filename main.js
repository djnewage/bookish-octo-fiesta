function users(user1, user2){
    const user1 = [{
        name: 'john',
        age: 25,
        car: 'mazda',
    }];

    const user2 = [{
        name: 'Kev',
        age: 30,
        car: 'ford',
    }];
    
},

    
    // let database = [
//     {
//         username: 'Tristan',
//         password: 'Dragon',
//     }
// ];

// let newsFeed = [
//     {
//         username: "bobby",
//         timeline: 'So tired from all that javascript',
//     },
//     {
//         username: 'Sally',
//         timeline: 'Javascript is so cool'
//     }
// ];


// let userNamePrompt = prompt('Whats your username?');
// let passwordPrompt = prompt('Whats your password?');

// function signIn(x, y){
//     if(x === database[0].username && y === database[0].password){
//         console.log(newsFeed);
//     }else {
//         alert('Sorry wrong username and password!');
//     }
// };


// signIn(userNamePrompt, passwordPrompt);

let todos = [
    'Clean room',
    'Do Laundry',
    'Brush teeth',
    'Paint Walls',
    'Play video games'
];

for (var i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

 document.getElementById(id).innerHTML = player;
    if (player === 'x'){
        player = 'o';
    }else{
        player ='x';
    }


let todos = ['item1', 'item2','item3', 'item4'];

function displayTodos(){
    console.log(todos);
}

function addTodos(todo){
    todos.push(todo);
    displayTodos();

}

function changeTodos(index, newValue){
    todos[index] = newValue;
    displayTodos();
}

function deleteTodos(item){
    todos.splice(item, 1);
    displayTodos()
}



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
