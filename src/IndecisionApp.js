const React = require('react');

import Header from './Header';
import Action from './Action';
import Option from './Option';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
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

    this.setState(() => ({ selectedOption: optionsArray[rand] }));
  };
  handleClearOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    }
    catch (e) {}
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('component will unmount.');
  }

  render() {
    const title = 'Indecision';
    const subtitle = `Just can't decide?`;

    return (
      <div>
        <Header subtitle = {subtitle}/>

        <div className = "container">
          <Action
            itemsExist = {!!this.state.options.length}
            handlePick = {this.handlePick}
          />
          <div className = "widget">
            <Options
              options = {this.state.options}
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
              <AddOption
                handleAddOption = {this.handleAddOption}
              />
          </div>
        </div>
        <OptionModal
          selectedOption = {this.state.selectedOption}
          handleClearOption = {this.handleClearOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['hi mom']
};
