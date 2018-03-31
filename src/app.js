const React = require('react');
const ReactDOM = require('react-dom');
import IndecisionApp from './IndecisionApp';

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>Hi</h1>
    <p>This is my page</p>
  </div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
