import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Text 1',
        date: '2020-06-01',
        important: true,
        active: true,
        finishDate: null
      },
      { id: 1, text: 'Text 2', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: 'Text 3', date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: 'Text 4', date: '2020-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: 'Text 5', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: 'Text 6', date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: 'Text 7', date: '2020-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: 'Text 8', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: 'Text 9', date: '2020-09-11', important: false, active: true, finishDate: null },

    ]
  }

  deleteTask = (id) => {
    console.log('delete an element with id in App: ' + id);
  }

  changeTaskStatus = (id) => {
    console.log('change an element with id in App: ' + id);
  } 

  render() {
    return (
      <div className='App'>
        TODO APP
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
