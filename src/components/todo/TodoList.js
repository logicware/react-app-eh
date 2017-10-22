import React from 'react';
import PropTypes from 'prop-types'

import {TodoItem} from "./TodoItem";

export const TodoList = (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map( task =>
        <TodoItem key={task.id} {...task} handleToggle={props.handleToggle} />
        )}
    </ul>
  </div>

);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
