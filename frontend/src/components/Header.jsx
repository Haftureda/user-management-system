import '../styles/Header.css'

const Header = ({ onSettingsClick, onAdvancedSearchClick, onViewChange }) => {
  const handleSettingsClick = (e) => {
    e.preventDefault();
    if (typeof onSettingsClick === 'function') {
      onSettingsClick();
    }
  };

  const handleAdvancedSearchClick = (e) => {
    e.preventDefault();
    if (typeof onAdvancedSearchClick === 'function') {
      onAdvancedSearchClick();
    }
    if (typeof onViewChange === 'function') {
      onViewChange('users');
    }
  };

  const handleReportsClick = (e) => {
    e.preventDefault();
    if (typeof onViewChange === 'function') {
      onViewChange('reports');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>User Management System</h1>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#" onClick={handleAdvancedSearchClick}>Users</a></li>
            <li><a href="#" onClick={handleReportsClick}>Reports</a></li>
            <li><a href="#" onClick={handleSettingsClick}>Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.defaultProps = {
  onSettingsClick: () => console.warn('onSettingsClick not provided'),
  onAdvancedSearchClick: () => console.warn('onAdvancedSearchClick not provided'),
  onViewChange: () => console.warn('onViewChange not provided')
};

export default Header
