const React = require('react');

const Option = (props) => (
    <div>
      <span> Option: {props.optionText} </span>
      <button onClick = {((e) => {
        props.handleDeleteOption(props.optionText)
        })}
      >
        Remove
      </button>
    </div>
  );

export {Option as default};
