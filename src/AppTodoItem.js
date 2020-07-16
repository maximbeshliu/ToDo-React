import React from 'react';

function AppTodoItem(props) {

    return (<li className={props.item.status ? "todolist__item complete" : "todolist__item"}>
        <input type="checkbox" onChange={() => props.handelTick(props.item)} checked={props.item.status} />
        <span>{props.item.text}</span>
        <button className="remove" onClick={() => props.handleRemove(props.item)}>X</button>
    </li>
    );

}

export default AppTodoItem;