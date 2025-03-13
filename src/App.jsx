import { useState } from 'react'
import './App.css'
import notificationsData from './notifications.js'

function App({ children }) {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <div className="App container-fluid">
      <h1>Notifications ({notifications.length})</h1>
      <button onClick={clearAllNotifications} className="btn btn-danger mb-3">Clear All Notifications</button>
      <div className='row'>
        {children}
        {notifications.map((notification, index) => (
          <div className='col-12' key={index}>
            <div className="row">
              <span className='col-1 id text-end'>{notification.id}</span>
              <p className='col-2 name test-center'>{notification.name}</p>
              <p className='col-7 message p-1'>{notification.message}</p>
              <button onClick={() => clearNotification(notification.id)} className="col-2 btn btn-warning">Clear</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
