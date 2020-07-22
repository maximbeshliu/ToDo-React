import React from 'react';

function AppToDoListStats(props) {
    const completedTodos = () => {
        return props.todo.filter(item => item.status).length;
    };
    return (
        < div className="todos-text" >
            {props.todo.length ? <p id="total-todos">Tasks: {props.todo.length}</p> : null}
            <span>Reset what's completed: <button onClick={props.handleReset}>Reset</button></span>
            <p>Completed: {completedTodos()}</p>
        </div >
    );



}

export default AppToDoListStats;