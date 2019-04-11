/**
 * bad pattern.
 * every time all tree render
 */
import React, { Component } from 'react';

// first we will make a new context
const MyContext = React.createContext();

const Family = () => (
  <div className="family">
    {console.log('render - Family')}
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
              {console.log('render - Person')}
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        <Family />
      </MyContext.Provider>
    );
  }
}

export default App;