import React from 'react'
import './AdopterProfile.css'

const AdopterProfile = () => {
    //getting user details from the local storage
    const storedUser = localStorage.getItem('user'); //getting back a JSON obj from localStorage saved under 'user' key
    //converting JSON to JS obj
    const user = storedUser ? JSON.parse(storedUser) : null; //if storedUser is null returns null
    
    if (user === null) {
        return <h1>Error loading user data</h1>;
      }

  return (
    <div>
        <h1>Welcome {user.email}</h1>  
        <button type='button' name='logout' id='logout'>Logout</button>
    </div>
  )
}

export default AdopterProfile
