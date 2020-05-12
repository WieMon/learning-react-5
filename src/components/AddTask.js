import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = { 
    text: '',
    checked: false,
    date: this.minDate
   }

   handleText = () => {

   }

   handleCheckbox = () => {

   }
   handleDate = () => {

   } 
   handleClick= () => {

   }

  render() { 
    return ( 
      <div className='form'>
        <input type="text" placeholder="add task" value={this.state.text} onChange={this.handleText} />
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Deadline</label>
        <input type="date" value={this.state.date} min={this.state.date} onChange={this.handleDate} />
        <br />
        <button onClick={this.handleClick}>Add</button>
        
      </div>
     );
  }
}
 
export default AddTask;