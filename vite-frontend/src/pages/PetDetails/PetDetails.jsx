import React, { useEffect, useState } from 'react'
import './PetDetails.css'

import PetService from '../../Services/PetService'
import { useParams } from 'react-router-dom';

function PetDetails() {

  const { petId } = useParams();
  const [pet, setPet] = useState({});
  const [petImages, setPetImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const petDetails = await PetService.getPetById(petId);
      setPet(petDetails.data);

      const petImagesArr = await PetService.getPetImagesById(petId);
      setPetImages(petImagesArr.data);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  const handleAdoptionClick = () => {
   
  };

  const handleHomeClick = () => {
   
  };

  return (
    <div className="pet-details-container">
      <h1 className="pet-details-title">Pet Details</h1>
      <div className="pet-details-card">
        <div className="pet-details-header">
          <h2 className="pet-details-name">{pet.name}</h2>
          <p className="pet-details-breed">{pet.breed}</p>
        </div>

        {/* Image Carousel */}
        <div className="pet-details-images">
            {petImages.map((image) => (
                <img
                    key={image.id}
                    src={image.filePath} 
                    alt={`Pet ${image.id}`} 
                    className="pet-image" 
                />
            ))}
        </div>

        <div className="pet-details-body">
          <div className="pet-details-section">
            <h3 className="section-title">Basic Information</h3>
            <p className="pet-details-species">Species: {pet.species === 0 ? 'Dog' : 'Cat'}</p>
            <p className="pet-details-age">Age: {pet.age} years</p>
            <p className="pet-details-color">Color: {pet.color}</p>
            <p className="pet-details-gender">Gender: {pet.gender === 1 ? 'Female' : 'Male'}</p>
          </div>

          <div className="pet-details-section">
            <h3 className="section-title">Adoption Information</h3>
            <p className="pet-details-arrival-date">Arrival Date: {pet.arrivalDate}</p>
            <p className="pet-details-adoption-status">Adoption Status: {pet.adoptionStatus === 0 ? 'Available' : 'Adopted'}</p>
            <p className="pet-details-adoption-date">Adoption Date: {pet.adoptionDate || 'N/A'}</p>
          </div>

          <div className="pet-details-section">
            <h3 className="section-title">Medical Record</h3>
            <p className="pet-details-medical-status">Health Status: {pet.petMedicalRecord?.healthStatus === 0 ? 'Healthy' : 'Needs Attention'}</p>
            <p className="pet-details-spayed">Spayed/Neutered: {pet.petMedicalRecord?.isSpayedOrNeutered ? 'Yes' : 'No'}</p>
            <p className="pet-details-vaccinated">Vaccinated: {pet.petMedicalRecord?.isVaccinated ? 'Yes' : 'No'}</p>
          </div>

          <div className="pet-details-description">
            <h3 className="section-title">Description</h3>
            <p>{pet.description}</p>
          </div>

          {/* Conditional Buttons */}
          <div className="pet-details-actions">
            {pet.adoptionStatus === 0 ? (
              <button className="adoption-button" onClick={handleAdoptionClick}>Adopt Me</button>
            ) : (
              <>
                <button className="adopted-button" disabled>Adopted</button>
                <button className="home-button" onClick={handleHomeClick}>Return to Home</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
