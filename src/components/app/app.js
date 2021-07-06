import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodo from "../todo-list-add";

import './app.css';

class App extends React.Component {
  for_new_todo = 200

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1, done: false},
      {label: 'Make Awesome App', important: true, id: 2, done: false},
      {label: 'Have a Lunch', important: false, id: 3, done: false}
    ],
    search: '',
    status: 'active'
  }


  onToggleImportant = (id) => {
    this.setState((old_state) => {
      const element_index = old_state.todoData.findIndex((item) => item.id === id)
      const old_todo = old_state.todoData[element_index];
      const new_todo = {...old_todo, important: !old_todo.important}

      const prev_state = old_state.todoData.slice(0, element_index)
      const post_state = old_state.todoData.slice(element_index + 1)

      const new_state = [...prev_state, new_todo, ...post_state]

      return {todoData: new_state}
    })
  }


  onToggleDelete = (id) => {
    this.setState((old_state) => {
      const element_index = old_state.todoData.findIndex((item) => item.id === id)

      const old_todo = old_state.todoData[element_index];
      const new_todo = {...old_todo, important: !old_todo.important}

      const prev_elements = old_state.todoData.slice(0, element_index)
      const post_elements = old_state.todoData.slice(element_index + 1)

      const new_state = [...prev_elements, ...post_elements]

      return {todoData: new_state}
    })
  }


  onSearch = (data) => {
    this.setState({search: data})
  }


  onToggleDone = (id) => {
    this.setState((old_state) => {
      const element_index = old_state.todoData.findIndex((item) => item.id === id)

      const old_todo = old_state.todoData[element_index];
      const new_todo = {...old_todo, done: !old_todo.done}

      const prev_state = old_state.todoData.slice(0, element_index)
      const post_state = old_state.todoData.slice(element_index + 1)

      const new_state = [...prev_state, new_todo, ...post_state]

      return {todoData: new_state}
    })
  }

  searchElements = (elements, filter) => {
    if (filter.length < 1) {
      return elements;
    }

    const new_elements = elements.filter((item) => item.label.toLowerCase().indexOf(filter.toLowerCase))
    return new_elements;
  }
// console.log('test', this.state.todoData[0].label.indexOf());
//const new_elements = this.state.todoData.filter((item) => item.label.indexOf(item.label, filter) > -1)


  onToggleStatus = (get_status) => {
    this.setState({
      status: get_status
    })
  }


  filterElements = (elements, status) => {
    if (status === 'active') {
      return elements.filter((item) => !item.done)
    } else if (status === 'done') {
      return elements.filter((item) => item.done)
    } else {
      return elements;
    }
  }


  onAddTodo = (label) => {
    const new_todo = {
      id: ++this.for_new_todo,
      label: label,
      important: false,
      done: false
    }
this.setState((old_state) => {
 return {
   todoData: [...old_state.todoData, new_todo]
 }
    })
}


 // filterDoneElements = (elements, status) => {
  //  if (status === 'active') {
      //return elements.filter.count((item) => !item.done)
   // } else if (status === 'done') {
      //return elements.filter.count((item) => item.done)
  //  } else {
    //  return status;
   // }
  //}


  render = () => {

    const new_elements = this.searchElements(this.state.todoData, this.state.search)
    const filtered_elements = this.filterElements(new_elements, this.state.status)
    const element_todo_count = this.state.todoData.filter(todo => !todo.done).length
    const element_done_count = this.state.todoData.filter(todo => todo.done).length



    return (
        <div className="todo-app">
          <AppHeader toDo={element_todo_count} done={element_done_count} />
          <div className="top-panel d-flex">
            <SearchPanel onSearch={this.onSearch}/>
            <ItemStatusFilter onToggleStatus={this.onToggleStatus}/>
          </div>


          <TodoList todos={filtered_elements}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDelete={this.onToggleDelete}
                    onToggleDone={this.onToggleDone}
                    onToggleStatus={this.onToggleStatus}/>

          <AddTodo onAddTodo = {this.onAddTodo}/>
        </div>

    );

  }
}

export default App;
