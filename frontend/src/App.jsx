import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import UserList from './components/UserList'
import SearchBox from './components/SearchBox'
import AdvancedSearch from './components/AdvancedSearch'
import SettingsModal from './components/SettingsModal'
import Reports from './components/Reports'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const [activeView, setActiveView] = useState('users') // 'users', 'reports'
  const [columnVisibility, setColumnVisibility] = useState({
    age: true,
    phone: true,
    birthDate: true
  })

  useEffect(() => {
    if (activeView === 'users') {
      fetchUsers()
    }
    // Load saved settings from localStorage if available
    const savedSettings = localStorage.getItem('columnVisibility')
    if (savedSettings) {
      setColumnVisibility(JSON.parse(savedSettings))
    }
  }, [activeView])

  const fetchUsers = async (searchTerm = '', key = '', value = '') => {
    try {
      setLoading(true)
      setError(null)
      
      let endpoint = '/api/users'
      if (searchTerm) {
        endpoint = `/api/users/search?q=${searchTerm}`
      } else if (key && value) {
        endpoint = `/api/users/filter?key=${key}&value=${value}`
      }
      
      const response = await axios.get(endpoint)
      setUsers(response.data.users)
      setFilteredUsers(response.data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
      setError('Failed to load users. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = users.filter(user => 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredUsers(filtered)
    } else {
      setFilteredUsers(users)
    }
  }

  const handleAdvancedSearch = (key, value) => {
    fetchUsers('', key, value)
  }

  const handleResetSearch = () => {
    fetchUsers()
  }

  const handleSettingsClick = () => {
    setShowSettings(true)
  }

  const handleAdvancedSearchClick = () => {
    setShowAdvancedSearch(true)
  }

  const handleAdvancedSearchClose = () => {
    setShowAdvancedSearch(false)
  }

  const handleSettingsClose = () => {
    setShowSettings(false)
  }

  const handleColumnVisibilityChange = (newVisibility) => {
    setColumnVisibility(newVisibility)
    // Save to localStorage
    localStorage.setItem('columnVisibility', JSON.stringify(newVisibility))
  }

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  // Calculate report data
  const getReportData = () => {
    const totalUsers = filteredUsers.length;
    const lt30Users = filteredUsers.filter(user => user.age <= 30).length;
    const gt30Users = filteredUsers.filter(user => user.age > 30).length;
    
    return {
      totalUsers,
      lt30Users,
      gt30Users
    };
  };

  const renderContent = () => {
    switch (activeView) {
      case 'reports':
        return <Reports reportData={getReportData()} />;
      case 'users':
      default:
        return (
          <>
            <SearchBox onSearch={handleSearch} />
            {error && <div className="error">{error}</div>}
            {loading ? (
              <div className="loading">Loading users...</div>
            ) : (
              <UserList users={filteredUsers} columnVisibility={columnVisibility} />
            )}
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header 
        onSettingsClick={handleSettingsClick} 
        onAdvancedSearchClick={handleAdvancedSearchClick}
        onViewChange={handleViewChange}
      />
      <div className="main-container">
        <Sidebar 
          onSettingsClick={handleSettingsClick} 
          onAdvancedSearchClick={handleAdvancedSearchClick}
          onResetSearch={handleResetSearch}
          onViewChange={handleViewChange}
          activeView={activeView}
        />
        <div className="content">
          {renderContent()}
        </div>
      </div>
      <Footer />
      {showSettings && (
        <SettingsModal 
          columnVisibility={columnVisibility} 
          onClose={handleSettingsClose}
          onSave={handleColumnVisibilityChange}
        />
      )}
      {showAdvancedSearch && (
        <AdvancedSearch 
          onClose={handleAdvancedSearchClose}
          onSearch={handleAdvancedSearch}
        />
      )}
    </div>
  )
}

export default App
