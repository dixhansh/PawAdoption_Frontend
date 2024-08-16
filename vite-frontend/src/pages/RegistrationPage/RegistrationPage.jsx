import React, { useState } from 'react'
import './RegistrationForm.css'
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
    const [registrationFormDetails, setRegistrationFormDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        occupation: "",
        livingSituation: 0,
        adopterPetExperience: 0,
        adopterAddressDto: {
            addressDetails: "",
            city: "",
            state: "",
            zipCode: ""
        }
    });
   const navigate = useNavigate();

    const handleRegistrationChange = (event) => {
        var name = event.target.name;
        setRegistrationFormDetails({ ...registrationFormDetails, [name]: event.target.value})
    }


    const handleRegistrationSubmit = (e) => {
            navigate("/")
    }

  return (
    <div className='registration-page-container'>
    <h2>PAW ADOPTION REGISTRATION</h2>

    <div className='registration-form-container'>
        <h2>PAW ADOPTION REGISTRATION</h2>
        <form onSubmit={handleRegistrationSubmit}>
            {/* Personal Information Section */}
            <div className='personal-info-section'>
                <div className='input-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={registrationFormDetails.firstName}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={registrationFormDetails.lastName}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={registrationFormDetails.email}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={registrationFormDetails.password}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='dateOfBirth'>Date of Birth</label>
                    <input
                        type='date'
                        id='dateOfBirth'
                        name='dateOfBirth'
                        value={registrationFormDetails.dateOfBirth}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='occupation'>Occupation</label>
                    <input
                        type='text'
                        id='occupation'
                        name='occupation'
                        value={registrationFormDetails.occupation}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='livingSituation'>Living Situation</label>
                    <select
                        id='livingSituation'
                        name='livingSituation'
                        value={registrationFormDetails.livingSituation}
                    // onChange={handleRegistrationChange} needs fixing
                    >
                        <option value='OwnHome'>OwnHome</option>
                        <option value='RentHome'>RentHome</option>
                        <option value='LiveWithParents'>LiveWithParents</option>
                        <option value='CollegeDormitory'>CollegeDormitory</option>
                        <option value='TemporaryHousing'>TemporaryHousing</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>

                <div className='input-group'>
                    <label htmlFor='adopterPetExperience'>Pet Experience</label>
                    <select
                        id='adopterPetExperience'
                        name='adopterPetExperience'
                        value={registrationFormDetails.adopterPetExperience}
                    // onChange={handleRegistrationChange} needs fixing
                    >
                        <option value='None'>None</option>
                        <option value='Beginner'>Beginner</option>
                        <option value='Intermediate'>Intermediate</option>
                        <option value='Advanced'>Advanced</option>
                    </select>
                </div>

            </div>

            {/* Adopter Address Section */}
            <div className='adopter-address-section'>
                <h3>Address Details</h3>

                <div className='input-group'>
                    <label htmlFor='addressDetails'>Address</label>
                    <input
                        type='text'
                        id='addressDetails'
                        name='adopterAddressDto.addressDetails'
                        value={registrationFormDetails.adopterAddressDto.addressDetails}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        id='city'
                        name='adopterAddressDto.city'
                        value={registrationFormDetails.adopterAddressDto.city}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        id='state'
                        name='adopterAddressDto.state'
                        value={registrationFormDetails.adopterAddressDto.state}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input
                        type='text'
                        id='zipCode'
                        name='adopterAddressDto.zipCode'
                        value={registrationFormDetails.adopterAddressDto.zipCode}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>
            </div>

            <button type='submit' className='submit-btn'>Submit Registration</button>
        </form>
    </div>

</div>

  )
}

export default RegistrationPage
