console.log('app.js is running');

// JSX - JavaScript XML - syntax extension provided by React.
const app = {
  title: "Indecision",
  subtitle: "This is soooooo cool",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault(); //stops full page refresh
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    reRender();
  }
};

const reset = () => {
  app.options = [];
  reRender();
};

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  console.log(app.options[rand]);
}

const getArrayLength = () => {
  return app.options.length > 0 ? false : true;

}

const appRoot = document.getElementById("app");

const reRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      {(app.options && app.options.length > 0) ? "Choose an option: " : "You have no options."}

      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      <form onSubmit = {onFormSubmit}>
        <input type = "text" name = "option"/>
        <button>Add Option</button>
      </form>
      <button disabled = {getArrayLength()} onClick = {onMakeDecision}>What should I do?</button>
      <button onClick = {reset}>Clear options</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

reRender();
