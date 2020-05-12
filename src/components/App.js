import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 9
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
      { id: 1, text: 'ZZZZZ 2', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: 'aaa 3', date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: 'Text 4', date: '2020-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: 'Text 5', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: 'Text 6', date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: 'Text 7', date: '2020-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: 'Text 8', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: 'Text 9', date: '2020-09-11', important: false, active: true, finishDate: null },

    ]
  }

  deleteTask = (id) => {
    //console.log('delete an element with id in App: ' + id);
    // const tasks = [...this.state.tasks];
    // console.log('tasks before removing: ', tasks)
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // console.log('tasks after removing: ', tasks);
    // this.setState({
    //   tasks
    // })
    
    let tasks = [...this.state.tasks];
    //console.log('tasks before removing: ', tasks)
    tasks = tasks.filter(task => task.id !==id)
    //console.log('tasks after removing: ', tasks)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('change an element with id in App: ' + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
        //console.log(task.finishDate);
      }
    })
    this.setState({
      tasks
      
    })
  } 

  addTask = (text, date, important) => {
    //console.log('added object');
    const task = {
      id: this.counter,
      text, // tekxt from input
      date, //tekxt from input
      important, //value from input
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className='App'>
        <h1>ToDo App</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
