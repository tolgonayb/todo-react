import React from "react";

class AddTodo extends React.Component{
    state = {
        value: ''
    }

    onChangeValue = (event) => {
    this.setState({value: event.target.value})
    }

    onSubmitData = (event) => {
        event.preventDefault()
        this.props.onAddTodo(this.state.value)
        this.setState({value: ''})
    }


    render() {
        return (
            <form onSubmit={this.onSubmitData}>
                <input placeholder='Enter your todo' value={this.state.value} onChange={this.onChangeValue}/>
                   <input type='submit' />
            </form>
        )
    }
}

export default AddTodo;