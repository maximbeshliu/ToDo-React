import React from 'react';

function AppTodoItem(props) {
    return (<li className="todolist__item">
        <input type="checkbox" />
        <span className={props.item.status ? "complete" : ''}>{props.item.text}</span>
        <button className="remove">X</button>
    </li>);
}

export default AppTodoItem;