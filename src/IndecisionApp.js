const React = require('react');

import Header from './Header';
import Action from './Action';
import Option from './Option';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {

  state = {
    options: this.props.options
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Please enter an option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'That option already exists. Please enter a new one!';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const optionsArray = this.state.options;
    const rand = Math.floor(Math.random() * optionsArray.length);
    alert(optionsArray[rand]);
  };

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount.');
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Poo on you';

    return (
      <div>
        <Header subtitle = {subtitle}/>

        <Action
          itemsExist = {!!this.state.options.length}
          handlePick = {this.handlePick}
        />
      <Options
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
      />
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['hi mom']
};
