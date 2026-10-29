import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'
const App = () => {
  const mota ='kushagra saxena'
  const fasgyi='jiya'
  return (
    <div>
      <h1>moti</h1>
      <h2>{mota}</h2>
      <div className="card">Kushagra</div>
      <h1>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h1>
          <Card />
          <Navbar/>

    </div>
  )
}

export default App
