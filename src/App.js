import React from 'react';
import {createStore} from "redux"
import {Provider} from "react-redux"

import Counter from "./Counter"
import countReducer from "./ducks.js"

const store = createStore(countReducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter defaultCount={10} id={1}/>
          <Counter defaultCount={5} id={2}/>
        </div>
      </Provider>
    );
  }
}

export default App;
