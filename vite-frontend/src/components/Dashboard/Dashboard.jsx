import React, { useContext } from 'react'
import './Dashboard.css'


const Dashboard = () => {
    //getting user details from the local storage
    const storedUser = localStorage.getItem('user'); //getting back a JSON obj from localStorage saved under 'user' key
    //converting JSON to JS obj
    const user = storedUser ? JSON.parse(storedUser) : null; //if storedUser is null returns null

    console.log("In admin dash")
    console.log(user)

    if (user === null) {
        return <h1>Error loading user data</h1>;
      }

    return (
    <div>
      <h1>Welcome {user.email}</h1>
    </div>
  )
}

export default Dashboard
