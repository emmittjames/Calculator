import { useReducer } from "react";
import DigitButton from "./DigitButton"
import "./styles.css"

export const ACTIONS = {
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
        ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  const[{ currentOperand, previousOperand, operator },dispatch] = useReducer(reducer, {})

  return (
    <div className = "calculatorGrid">
      <div className = "topDisplay">
        <div className = "previousOperand">{previousOperand} {operator}</div>
        <div className = "currentOperand">{currentOperand}</div>
      </div>
      <button className = "spanTwo">AC</button>
      <button>DEL</button>
      <button>-</button>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <button>÷</button>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <button>x</button>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <button>+</button>
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className = "spanTwo">=</button>
    </div>
  )
}

export default App;