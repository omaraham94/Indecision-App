class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>What should i do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p>Options component here</p>
        <Option/>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option component is here</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <p>Add option component here</p>
      </div>
    )
  }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp/>, appRoot);