import { useReducer } from "react";
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton";
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
      if(payload.digit === "0" && state.currentOperand === "0")
        return state
      if(payload.digit !== "0" && state.currentOperand ==="0")
        return{ 
          state, currentOperand: `${payload.digit}`
        }
      if(payload.digit === "." && state.currentOperand.includes("."))
        return state
      return{
        state, currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    case ACTIONS.OPERATION:
      if(!state.currentOperand && !state.previousOperand)
        return state
      if(!state.previousOperand)
        return{
          state, 
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
    case ACTIONS.CLEAR:
      return {}
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
      <button className = "spanTwo" onClick = {() => dispatch({ type: ACTIONS.CLEAR})}>AC</button>
      <button>DEL</button>
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="x" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className = "spanTwo">=</button>
    </div>
  )
}

export default App;