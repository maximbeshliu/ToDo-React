import React from 'react';

function AppToDoListStats(props) {
    return (

        < div className="todos-text" >
            {props.todo.length ? <p id="total-todos">Tasks: {props.todo.length}</p> : null}
            {props.checkedItems.length ? <span>Reset what's completed: <button onClick={props.handleReset}>Reset</button></span> : null}
            {props.checkedItems.length ? <p>Completed: {props.checkedItems.length}</p> : null}


        </div >
    );



}

export default AppToDoListStats;