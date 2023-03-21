import React from 'react'
import { useLocation } from 'react-router-dom'
import EditBookedCard from '../components/EditBookedCard/EditBookedCard'
import Navbar from '../components/navbar/Navbar'

function UpdateBookedCardPage() {
    const location = useLocation()
    const cardId = location.state?.cardId
    console.log(cardId);

   

    return (
        <div>
            <Navbar />
            <EditBookedCard  cardId={cardId} />
        </div>
    )
}

export default UpdateBookedCardPage