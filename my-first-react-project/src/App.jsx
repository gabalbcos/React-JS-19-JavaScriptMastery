import { useEffect, useState } from 'react'
import './App.css'

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

useEffect (() => {
  console.log(`${title} has been liked: ${hasLiked}`);
}, [hasLiked]); 

  return(
    <div className='card' onClick={() => setCount(count + 1)}>
    <h2>Movie Title: {title}<br/> {count || null}</h2>
    
    <button onClick={() => (setHasLiked(!hasLiked))}>
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
