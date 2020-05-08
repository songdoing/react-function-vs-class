import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
       <h1>Hello world</h1>
       <input type="button" value="remove func" onClick={
         ()=>setFuncShow(false)}></input>
       <input type="button" value="remove class" onClick={
         ()=>setClassShow(false)}></input><br/>
       <input type="button" value="display func" onClick={
         ()=>setFuncShow(true)}></input>
       <input type="button" value="display class" onClick={
         ()=>setClassShow(true)}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle = 'color : blue';
var funcId = 0;
function FuncComp(props){
  var numberState = useState(props.initNumber); //useState returns an array.
  var number = numberState[0]; //state value
  var setNumber = numberState[1];  //function which can change the state.

  //var dateState = useState((new Date()).toString()); 
  //var _date = dateState[0]; 
  //var setDate = dateState[1];  
  var [_date, setDate] = useState((new Date()).toString()); 
  
  //side effect
  useEffect(() => {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = number;
    return () => { //cleanup
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [number]); //Using second parameter, can skip 

  useEffect(() => {
    console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    document.title = _date;
    return () => { //cleanup
      console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle);
    }
  }, [_date]);

  console.log('%cfunc => render'+(++funcId), funcStyle);
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

var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date : (new Date()).toString()
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', classStyle);
  }

  render(){
    console.log('%cclass => render', classStyle);
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
