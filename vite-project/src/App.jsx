
import axios from "axios"

import './App.css'

function App() {
  const add = () => {
    axios.get(`http://localhost:8080/api/product/1`)
      .then(resp => {
        console.log(resp);
      })
  }

  return (
    <>
      <button onClick={add}> add</button>
    </>
  )
}

export default App
