import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  return(
    <>
    <p>Movie Title: {title}</p>
    </>
  )
}

function App() {

  return (
    <>
     <h2>Title</h2>
     <Card title="Star Wars"/>
     <Card title="Avatar"/>
     <Card title="Lion King"/>

    </>
  )
}

export default App
