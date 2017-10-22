import React from 'react';
import PropTypes from 'prop-types'

import {partial} from "../../lib/utils";

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  return (
    <li onClick={handleToggle}>
      <input type="checkbox" checked={props.isComplete}/> {props.name}
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};
