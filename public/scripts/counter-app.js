
var template =(
  <div>
    <h1>Indecision App</h1>
    <p>Put your life in the hands of a computer</p>
    <p>Here are your options</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  count++;
  //modified part;
  reactCounterApp();
  console.log('adding one');
};

const minusOne = () => {
  count--;
  reactCounterApp();
  console.log('minus one');
};

const reset = () => {
  count = 0;
  reactCounterApp();
  console.log('reset');
};

// template2 doesnot rerender things. one way to solve this is :-
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);

// =========================================

const reactCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

reactCounterApp();
