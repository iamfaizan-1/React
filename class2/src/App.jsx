import "./App.css"

import Header from "./components/Header"

function App() {
  const name = "faizan"
  return (
    <div>

<Header></Header>

<div className="heading1">
  
<h1>Hello! I am {name}</h1>
</div>

<img src="https://images.unsplash.com/photo-1628519592419-bf288f08cef5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww" width={200} alt="" />



    </div>
  )
}

export default App