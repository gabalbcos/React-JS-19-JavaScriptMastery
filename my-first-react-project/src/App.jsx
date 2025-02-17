import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div className='card'>
    <h2>Movie Title: {title}</h2>
    <button onClick={() => (setHasLiked(true))}>
     {hasLiked ? 'Liked' : 'Like'} 
      </button>
    </div>
  )
}

function App() {

  return (
    <div className='card-container'>
     <Card title="Star Wars"/>
     <Card title="Avatar"/>
     <Card title="Lion King"/>
    </div>
  );
}

export default App
