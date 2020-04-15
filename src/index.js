import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <p>Hello {props.name}, today you are {props.age} years old!</p>
  )
}
const App = () => {
  const name = "Firdous";
  const age = 19;
  return (
  <div>
    <Hello name= "Mahnoor" age = "19"/>
    <Hello name= {name} age= {age}/>
  </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))