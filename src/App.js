import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/es/Route";
import Header from './components/layout/Header.js'
import Todos from './components/Todos.js'
import About from './components/pages/About'
// import {v4 as uuidv4} from "uuid";

import AddTodoItem from "./AddTodoItem";
import Nav from "./components/layout/Nav";
import './App.css'
import axios from 'axios'



class App extends Component {

    state = {
        todos: []
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
            .then(res=>{
           this.setState({todos:res.data})
        })
    }

    // Toggle Complete on Todo
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {

                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })

        })
    };

    // Delete Todo

    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
            this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            })
        })

    };

    // Add New Todo

    addTodo = (title) => {
       axios.post("https://jsonplaceholder.typicode.com/todos",
           {
                title: title,
                completed: false
       }).then(res=>{
           this.setState({
               todos: [...this.state.todos, res.data]

           })
       })

    };


    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Nav/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodoItem addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       deleteTodo={this.deleteTodo}/>
                            </React.Fragment>
                        )}>
                        </Route>
                        <Route path="/about" component={About}>

                        </Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
