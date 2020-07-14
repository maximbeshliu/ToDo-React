import React from 'react';
import AppTodoItem from './AppTodoItem';


class AppTodoList extends React.Component {

    render() {
        return (
            <ul className="todolist" id="todolist" >
                {
                    this.props.todo.length ? (
                        this.props.todo.map((item) => {
                            <AppTodoItem item={item.text}
                                item={item.status} />;
                        })
                    ) : null
                }
            </ul>);
    }
}

export default AppTodoList;