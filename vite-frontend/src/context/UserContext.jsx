import React, { createContext, useState } from 'react';

//creating the context
export const UserContext = createContext();

//creating the provider component
export const UserProvider = ({children}) => {

    //this state will hold the user details 
    const [user, setUser] = useState(null);

    return (
        //Providing the user state and setUser function to the children of this provider
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

