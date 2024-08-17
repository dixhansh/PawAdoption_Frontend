import axios from "axios";
var baseUrl = "https://localhost:7180/api/auth"

class AuthService{
    
    async validateUser(loginCredentials){
        try{
          console.log("In auth")  
         const response =  await axios.post(baseUrl+"/login",loginCredentials);

        const { token } = response.data; //extraction token from data
            console.log(response.data)
        localStorage.setItem('jwtToken', token); //storing token in the local storage as key value pair 
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; //setting default header to send token with each request

        return response.data;
        
            } catch(error){
                throw error;
            }
    }





}






export default new AuthService();