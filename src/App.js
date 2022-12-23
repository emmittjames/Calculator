import { useReducer } from "react";
import "./styles.css"

const ACTIONS = {
  ADD_DIGIT: "addDigit",
  CLEAR: "clear",
  DELETE_DIGIT: "deleteDigit",
  OPERATION: "operation",
  EQUALS: "equals"
}

function reducer(state, { type, payload }){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return{
        ...state,
        currentOperand: `${currentOperand}${payload.digit}`
      }
    case ACTIONS.CLEAR:
      return{

      }
  }
}

function App() {
  const[{ previousOperand, currentOperand, operator },dispatch] = useReducer(reducer, {})
  return (
    <div className = "calculatorGrid">
      <div className = "topDisplay">
        <div className = "previousOperand">{previousOperand} {operator}</div>
        <div className = "currentOperand">{currentOperand}</div>
      </div>
      <button className = "spanTwo">AC</button>
      <button>DEL</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>÷</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>x</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>.</button>
      <button>0</button>
      <button className = "spanTwo">=</button>
    </div>
  )
}

export default App;