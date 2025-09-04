import { useState } from 'react'
import '../styles/SearchBox.css'

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by first name, last name, or email..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox
