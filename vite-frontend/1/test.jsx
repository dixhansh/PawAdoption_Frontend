// src/services/AuthService.js
import axios from 'axios';

// Base URL for your API
const baseUrl = 'http://localhost:5283/api';

class AuthService {
    // Login method
    async login(credentials) {
        try {
            const response = await axios.post(`${baseUrl}/login`, credentials);
            const { token } = response.data;

            // Store the JWT token in localStorage
            localStorage.setItem('jwtToken', token);

            // Set the token as a default header for all subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Logout method
    logout() {
        // Remove the token from localStorage
        localStorage.removeItem('jwtToken');
        
        // Remove the default Authorization header
        delete axios.defaults.headers.common['Authorization'];
    }

    // Method to check if the user is authenticated
    isAuthenticated() {
        // Check if the token exists in localStorage
        return !!localStorage.getItem('jwtToken');
    }
}

export default new AuthService();
