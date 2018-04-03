const React = require('react');
const ReactDOM = require('react-dom');
import IndecisionApp from './IndecisionApp';
import 'normalize.css/normalize.css'; //this is called a css reset.
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
