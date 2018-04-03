const React = require('react');

import Option from './Option';

const Options = (props) => (
    <div>
      <div className = "widget-header">
        <h3 className = "widget-header__title">Your Options:</h3>
        <button
          className = "button button--link"
          onClick = {props.handleDeleteOptions}
          >
            Remove all options
        </button>
      </div>
      {
        (props.options.length > 0) ?
        props.options.map((option, index) => (
          <Option
            key = {option}
            count = {index + 1}
            optionText = {option}
            handleDeleteOption = {props.handleDeleteOption}
          />
        ))
        :<div className = "widget-message">
          Please enter an option!
        </div>
      }
    </div>
  );
  //when passing in a function by reference, you lose your this binding, because it recreates the function elsewhere when it calls it. It isn't the same instance of it. That's why you need bind.

export {Options as default};
