import { useState } from 'react'
import '../styles/AdvancedSearch.css'

const AdvancedSearch = ({ onClose, onSearch }) => {
  const [searchField, setSearchField] = useState('firstName')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      onSearch(searchField, searchValue.trim())
      onClose()
    }
  }

  const handleReset = () => {
    setSearchField('firstName')
    setSearchValue('')
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Advanced User Search</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <p>Search users by specific field:</p>
            <div className="form-group">
              <label htmlFor="searchField">Search Field:</label>
              <select
                id="searchField"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              >
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="age">Age</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="searchValue">Search Value:</label>
              <input
                id="searchValue"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={`Enter ${searchField} to search`}
                autoFocus
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={!searchValue.trim()}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvancedSearch
