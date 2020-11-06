import './App.css';
import React, {Component} from "react";
import Todos from './components/Todos.js'
import AddTodoItem from "./AddTodoItem";


class App extends Component {

    state = {
        todos: [

            {
                id: 1,
                title: 'Take out trash',
                completed: true
            },
            {
                id: 2,
                title: 'Walk Banksy',
                completed: false
            },
            {
                id: 3,
                title: 'Cook Dinner',
                completed: false

            }
        ]

    };


    render() {
        return (
            <div className="App">
                <Todos todos={this.state.todos}/>
                <AddTodoItem submit={(text) => {
                    this.state.todos.push({
                        id: 5,
                        title: text,
                        completed: false
                    })

                }}/>
            </div>
        );
    }
}

export default App;
