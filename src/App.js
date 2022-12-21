import "./styles.css"

function App() {
  return (
    <div className = "calculatorGrid">
      <div className = "topDisplay">
        <div className = "previousOperation"></div>
        <div className = "currentOperation"></div>
      </div>
      <button>AC</button>
      <button>±</button>
      <button>%</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button className = "spanTwo">0</button>
      <button>.</button>
      <button>=</button>
    </div>
  )
}

export default App;