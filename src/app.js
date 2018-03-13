class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    };

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption (option) {
    if (!option) {
      return 'Please enter an option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'That option already exists. Please enter a new one!';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
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
        <Header title = {title} subtitle = {subtitle}/>

        <Action
          itemsExist = {!!this.state.options.length}
          handlePick = {this.handlePick}
        />
      <Options
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
      />
        <AddOption
          handleAddOption = {this.handleAddOption}/>
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
    <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
}
class Action extends React.Component {
  render () {
    return (
      <div>
        <button
          onClick = {this.props.handlePick}
          disabled = {!this.props.itemsExist}
        >
          What to do?
        </button>
      </div>
    )
  }
}
class Options extends React.Component {
  render () {
    console.log (this.props);
    return (
      <div>
        {
          //here, we're modifying(mapping) the contents the the props.options array and returning that, without changing the actual array.
          this.props.options.map((option) => <Option key = {option} text = {option}/>)
        }
        <button onClick = {this.props.handleDeleteOptions}>Remove all options</button>
      </div>
    )
  }//when passing in a function by reference, you lose your this binding, because it recreates the function elsewhere when it calls it. It isn't the same instance of it. That's why you need bind.
}
class Option extends React.Component {
  render () {
    return (
      <div>
        <p> Option: {this.props.text}</p>
      </div>
    )
  }
}
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

      this.setState(() => {
        return {error};
      });

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
