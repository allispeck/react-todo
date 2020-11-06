import React, {Component} from 'react';
import PropTypes from 'prop-types'

class AddTodoItem extends Component {

    state = {
        inputValue: '',

    }


    render() {
        return (
            <div>
                <input type="text" onChange={event => console.log(event.target.value)}
                       value={this.state.inputValue}/>
                <button onSubmit={this.props.submit()}>Submit</button>
            </div>
        );
    }
}

// // PropTypes
// AddTodoItem.propTypes = {
//     submit: PropTypes.func(text)
// };

export default AddTodoItem;