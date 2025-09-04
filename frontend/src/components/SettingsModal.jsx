import { useState } from 'react'
import '../styles/SettingsModal.css'

const SettingsModal = ({ columnVisibility, onClose, onSave }) => {
  const [settings, setSettings] = useState(columnVisibility)

  const handleChange = (e) => {
    const { name, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleSave = () => {
    onSave(settings)
    onClose()
  }

  const handleSelectAll = () => {
    setSettings({
      age: true,
      phone: true,
      birthDate: true
    })
  }

  const handleSelectNone = () => {
    setSettings({
      age: false,
      phone: false,
      birthDate: false
    })
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Column Settings</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>Select which columns to display:</p>
          <div className="settings-options">
            <label>
              <input
                type="checkbox"
                name="age"
                checked={settings.age}
                onChange={handleChange}
              />
              Show Age Column
            </label>
            <label>
              <input
                type="checkbox"
                name="phone"
                checked={settings.phone}
                onChange={handleChange}
              />
              Show Phone Column
            </label>
            <label>
              <input
                type="checkbox"
                name="birthDate"
                checked={settings.birthDate}
                onChange={handleChange}
              />
              Show Birth Date Column
            </label>
          </div>
          <div className="quick-actions">
            <button onClick={handleSelectAll}>Show All</button>
            <button onClick={handleSelectNone}>Hide All</button>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={handleSave}>Save Settings</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
