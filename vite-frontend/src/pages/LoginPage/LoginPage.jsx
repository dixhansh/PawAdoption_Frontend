import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import AuthService from '../../Services/AuthService';
import UserService from '../../Services/UserService';
const LoginPage = () => {

    const [loginFormDetails, setLoginFormDetails] = useState({ email:"", password:"" });

    const navigate = useNavigate();

    const handleLoginChange = (event) => {
        var name = event.target.name;
        setLoginFormDetails({ ...loginFormDetails, [name]: event.target.value })
    }

    const handleRegisterRedirect = () => {
        navigate("/registration");
    };


    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
       try{ 
        var results = await AuthService.validateUser(loginFormDetails);
        const { role } = results; 

        //fetching all user details from the backend and storing in the context api
        var userResponse = await UserService.getUserById(results.id);
        var user = userResponse.data; //here user is a JS object

        //saving validated user details in the local storage as a JSON string
        localStorage.setItem('user', JSON.stringify(user)); 
        
        //navigating the user based on the role
        if(role.includes("Admin")){
            navigate("/admindash")
        }
        else{
            navigate("/home")
        }

        } catch(error){
            alert("Login Credentials are invalid");
            navigate("/login");
        }
    };



    return (


        <div className="login-page">
            <div className="login-form-container">
                <h2>PAW ADOPTION LOGIN</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            value={loginFormDetails.email}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name='password'
                            id="password"
                            value={loginFormDetails.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account?{' '}
                    <span onClick={handleRegisterRedirect}>Register here</span>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
