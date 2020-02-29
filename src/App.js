import React from 'react';
import './App.scss';
import Element from './components/Element/Element';


function createArr(){
  const arr = [];
  for(let i=1; i<101; i++){
    arr.push(i);
  }
  return arr;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elemsArr: createArr(),
    };
  }

  render() {
    return (
      <div className="app-template">
        {this.state.elemsArr.map(elem => {
          return <Element key={elem} clickable={elem % 3 === 0 ? true : false}></Element>
        })}
      </div>
    );
  }
}

export default App;
