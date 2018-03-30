const React = require('react');

const Action = (props) => {
  return (
    <div>
      <button
        onClick = {props.handlePick}
        disabled = {!props.itemsExist}
      >
        What to do?
      </button>
    </div>
  )
};

export {Action as default};
