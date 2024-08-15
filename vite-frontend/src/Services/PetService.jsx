import axios from 'axios'
var baseUrl = "https://localhost:7180/api/pet"

class PetService {
    
    async getAllPets(){
        return await axios.get(baseUrl+"?pageNumber=1&pageSize=10")
    }

    async getPetImagesById(petId){
        return await axios.get(baseUrl+"/petimages/"+petId)
    }
    
    
}

export default new PetService();
