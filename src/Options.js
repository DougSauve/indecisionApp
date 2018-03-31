const React = require('react');

import Option from './Option';

const Options = (props) => props.options.length > 0 ? (
    <div>
      {
        //here, we're modifying(mapping) the contents the the props.options array and returning that, without changing the actual array.
        props.options.map((option) => (
          <Option
            key = {option}
            optionText = {option}
            handleDeleteOption = {props.handleDeleteOption}
          />
        ))
      }
      <button onClick = {props.handleDeleteOptions}>Remove all options</button>
    </div>
  )
  : <div><p>Add an option to get started!</p></div>;
  //when passing in a function by reference, you lose your this binding, because it recreates the function elsewhere when it calls it. It isn't the same instance of it. That's why you need bind.

export {Options as default};
