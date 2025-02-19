import React from 'react'

export const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div className="">
      <img src="search.png" alt="serarch" />
      <input 
      type="text"
      placeholder="Search through thousands of movies"
      value={searchTerm }
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

    </div>
    
  )
}
