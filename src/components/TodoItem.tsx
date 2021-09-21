import React, {FC} from 'react';
import {ITodo} from "../types/types";

export interface TodoItemProps {
    todo: ITodo
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;