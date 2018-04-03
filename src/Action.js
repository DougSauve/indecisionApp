const React = require('react');

const Action = (props) => (
    <div>
      <button
        className = "big-button"
        onClick = {props.handlePick}
        disabled = {!props.itemsExist}
      >
        What to do?
      </button>
    </div>
  );

export {Action as default};
