import React, {useState} from 'react';

import './App.css';

function App() {
  return (
    <div className="container">
       <h1>Hello world</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  var numberState = useState(props.initNumber); //useState returns an array.
  var number = numberState[0]; //state value
  var setNumber = numberState[1];  //function which can change the state.

  //var dateState = useState((new Date()).toString()); 
  //var _date = dateState[0]; 
  //var setDate = dateState[1];  
  var [_date, setDate] = useState((new Date()).toString()); 
  
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
          ()=>setNumber(Math.random())}>
      </input><br/>
      <input type="button" value="date" onClick={
          ()=>setDate((new Date()).toString())}>
      </input>
    </div>
  );
}

class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date : (new Date()).toString()
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          ()=>this.setState({number:Math.random()})}>
        </input><br/>
        <input type="button" value="date" onClick={
          ()=>this.setState({date:(new Date()).toString()})}>
        </input>
      </div>
    );
  }
}
export default App;
