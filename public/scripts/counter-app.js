"use strict";
let count = (() => {
  let c = 0;
  return {
    addOne : () => {
      c++;
      renderCounterApp();
    },
    subtractOne : () => {
      c--;
      renderCounterApp();
    },
    get: () => c,
    log: () => {
      console.log(c);
      renderCounterApp();
    },
    reset: () => {
      c = 0;
      renderCounterApp();
    }
  }
})();

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1 id = "count">Count: {count.get()}</h1>
      <button onClick = {count.addOne}>+1</button>
      <button onClick = {count.log}>log</button>
      <button onClick = {count.subtractOne}>-1</button>
      <button onClick = {count.reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
