import '../styles/UserList.css'

const UserList = ({ users, columnVisibility }) => {
  if (users.length === 0) {
    return <div className="no-users">No users found.</div>
  }

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            {columnVisibility.age && <th>Age</th>}
            <th>Email</th>
            {columnVisibility.phone && <th>Phone</th>}
            {columnVisibility.birthDate && <th>Birth Date</th>}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              {columnVisibility.age && <td>{user.age}</td>}
              <td>{user.email}</td>
              {columnVisibility.phone && <td>{user.phone}</td>}
              {columnVisibility.birthDate && <td>{user.birthDate}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
