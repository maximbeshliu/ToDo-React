import React from 'react';
import AppTodoItem from './AppTodoItem';


function AppTodoList(props) {
    if (!props.todo.length) {
        return props.todo;
    }
    return (

        < ul className="todolist" id="todolist" >
            {
                props.todo.map((item) => (
                    <AppTodoItem item={item}
                        key={item.id}
                        status={item.status}
                        handelTick={props.handelTick}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
        </ul >);

}

export default AppTodoList;