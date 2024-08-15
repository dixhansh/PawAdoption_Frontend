import React, { useEffect, useState } from 'react';
import './DisplayPets.css';
import PetService from '../../Services/PetService';
import { useNavigate } from 'react-router-dom';

const DisplayPets = () => {

    const [petArray, setPetArray] = useState([]);
    const [petImages, setPetImages] = useState({}); // Using an object to store images url as value for each pet by ID as the key
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const allPets = await PetService.getAllPets();
        setPetArray(allPets.data);

        // Fetch images for each pet and store in state
        const imagesData = {};
        for (let pet of allPets.data) {
            const petImages = await PetService.getPetImagesById(pet.id);
            imagesData[pet.id] = petImages.data[0]?.filePath || ''; //storing key value pair (petId,PetImageUrl) in the state, 1st image is the profile pic 
        }
        console.log(imagesData);
        setPetImages(imagesData); // Store all the images in state
    };

    return (
        <div className='display-pets' id='display-pets'>
            <h1>Available pets to adopt</h1>
            <p className='display-pets-text'>You can apply for one or more pet adoption applications</p>
            <div className="display-pets-list">
                {petArray.map((pet) => {
                    return (
                        <div key={pet.id} className="display-pets-list-pet">
                            <img 
                                src={petImages[pet.id] || '/public/pet_placeholder_image.png'} // Use the image URL or a placeholder
                                alt={pet.name} 
                            />
                            <p>{pet.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DisplayPets;
