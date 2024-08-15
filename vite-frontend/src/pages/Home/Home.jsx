import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import DisplayPets from '../../components/DisplayPets/DisplayPets'

export const Home = () => {
  return (
    <div>
      <Header/>
      <DisplayPets/>
    </div>
  )
}
