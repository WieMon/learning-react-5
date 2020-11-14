import React from 'react';

const Task = (props) => {

   const style = {
    color: 'green',
  }
  const {text, date, id, active, important, finishDate} = props.task;
 
  if(active) {
    return ( 
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
   return (
     <div>
      <p>
        <strong>{text}</strong><em> (deadline: {date})</em>
        <br />
        - completed<span> {finish} </span>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
   </div>
   )
  }
}
 
export default Task;