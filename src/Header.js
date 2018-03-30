const React = require('react');

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
  {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  )
};

Header.defaultProps = {
  title: "Indecision"
}

export {Header as default};
