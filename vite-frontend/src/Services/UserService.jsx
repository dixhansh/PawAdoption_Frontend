import axios from "axios";
var baseUrl = "https://localhost:7180/api/user"

class UserService{

    async getUserById(userId){
        return await axios.get(baseUrl+"/"+userId) 
    }

}

export default new UserService();
