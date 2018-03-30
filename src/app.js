const React = require('react');
const ReactDOM = require('react-dom');

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: this.props.options
    };
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount.');
  }

  handleAddOption (option) {
    if (!option) {
      return 'Please enter an option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'That option already exists. Please enter a new one!';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }

  handlePick() {
    const optionsArray = this.state.options;
    const rand = Math.floor(Math.random() * optionsArray.length);
    alert(optionsArray[rand]);
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

const Options = (props) => {
  return (
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
  )//when passing in a function by reference, you lose your this binding, because it recreates the function elsewhere when it calls it. It isn't the same instance of it. That's why you need bind.
};

const Option = (props) => {
  return (
    <div>
      <span> Option: {props.optionText} </span>
      <button onClick = {((e) => {
        props.handleDeleteOption(props.optionText)
        })}
      >
        Remove
      </button>
    </div>
  )
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error : undefined
    }
  }
  handleAddOption(e) {
      e.preventDefault();

      const option = e.target.elements.option.value.trim();

      const error = this.props.handleAddOption(option);

      this.setState(() => ({error}));

      e.target.elements.option.value = "";
  }



  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
          <input type = "text" name = "option" />
          <button>Add an option, duuuude</button>
        </form>
    </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
