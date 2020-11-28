import React, {Component} from "react";
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

class Todos extends Component {

    // markComplete = ()=>{
    //     console.log('test')
    // };

    render() {

        return this.props.todos.map((todo) => {
            return (
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
            )
        })
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
};

export default Todos;
