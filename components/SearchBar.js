import React, { useState } from 'react'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Search term: ${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Hej, vad letar du efter idag?'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit'>SÖK</button>
    </form>
  )
}

export default SearchBar
