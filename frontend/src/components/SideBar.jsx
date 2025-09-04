import '../styles/Sidebar.css'

const Sidebar = ({ onSettingsClick, onAdvancedSearchClick, onResetSearch, onViewChange, activeView }) => {
  const handleAdvancedSearchClick = (e) => {
    e.preventDefault();
    if (typeof onAdvancedSearchClick === 'function') {
      onAdvancedSearchClick();
    }
  };

  const handleSettingsClick = (e) => {
    e.preventDefault();
    if (typeof onSettingsClick === 'function') {
      onSettingsClick();
    }
  };

  const handleResetSearch = (e) => {
    e.preventDefault();
    if (typeof onResetSearch === 'function') {
      onResetSearch();
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

  const handleUsersClick = (e) => {
    e.preventDefault();
    if (typeof onViewChange === 'function') {
      onViewChange('users');
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <h3>Menu</h3>
        <ul>
          <li>
            <a 
              href="#" 
              onClick={handleUsersClick} 
              className={activeView === 'users' ? 'active' : ''}
            >
              Users
            </a>
            <ul className="submenu">
              <li>
                <a href="#" onClick={handleAdvancedSearchClick}>
                  Advanced Search
                </a>
              </li>
              <li>
                <a href="#" onClick={handleResetSearch}>
                  Show All Users
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a 
              href="#" 
              onClick={handleReportsClick}
              className={activeView === 'reports' ? 'active' : ''}
            >
              Reports
            </a>
          </li>
          <li>
            <a href="#" onClick={handleSettingsClick}>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

Sidebar.defaultProps = {
  onSettingsClick: () => console.warn('onSettingsClick not provided'),
  onAdvancedSearchClick: () => console.warn('onAdvancedSearchClick not provided'),
  onResetSearch: () => console.warn('onResetSearch not provided'),
  onViewChange: () => console.warn('onViewChange not provided'),
  activeView: 'users'
};

export default Sidebar
