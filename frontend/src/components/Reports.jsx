import '../styles/Reports.css'

const Reports = ({ reportData }) => {
  const { totalUsers, lt30Users, gt30Users } = reportData;

  return (
    <div className="reports-container">
      <h2>User Reports</h2>
      
      <div className="report-summary">
        <div className="report-card">
          <h3>Total Users</h3>
          <div className="stat-number">{totalUsers}</div>
          <p>Currently displayed in the system</p>
        </div>
        
        <div className="report-card">
          <h3>Users (≤30 years)</h3>
          <div className="stat-number">{lt30Users}</div>
          <p>{totalUsers > 0 ? Math.round((lt30Users / totalUsers) * 100) : 0}% of total users</p>
        </div>
        
        <div className="report-card">
          <h3>  {`Users > 30 years`}</h3>
          <div className="stat-number">{gt30Users}</div>
          <p>{totalUsers > 0 ? Math.round((gt30Users / totalUsers) * 100) : 0}% of total users</p>
        </div>
      </div>

      <div className="age-distribution">
        <h3>Age Distribution</h3>
        <div className="distribution-bars">
          <div className="distribution-bar">
            <div className="bar-label">≤30 years</div>
            <div className="bar-container">
              <div 
                className="bar-fill young" 
                style={{ width: `${totalUsers > 0 ? (lt30Users / totalUsers) * 100 : 0}%` }}
              >
                <span className="bar-value">{lt30Users}</span>
              </div>
            </div>
            <div className="bar-percentage">
              {totalUsers > 0 ? Math.round((lt30Users / totalUsers) * 100) : 0}%
            </div>
          </div>
          
          <div className="distribution-bar">
            <div className="bar-label"> {`Users > 30 years`}</div>
            <div className="bar-container">
              <div 
                className="bar-fill older" 
                style={{ width: `${totalUsers > 0 ? (gt30Users / totalUsers) * 100 : 0}%` }}
              >
                <span className="bar-value">{gt30Users}</span>
              </div>
            </div>
            <div className="bar-percentage">
              {totalUsers > 0 ? Math.round((gt30Users / totalUsers) * 100) : 0}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
