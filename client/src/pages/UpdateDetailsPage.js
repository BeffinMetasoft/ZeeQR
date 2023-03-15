import React from 'react'
import AddCardDetails from '../components/addCardDetails/AddCardDetails'
// import DetailsUpdate from '../components/detailsUpdate/DetailsUpdate'
import Navbar from '../components/navbar/Navbar'

function UpdateDetailsPage() {

    return (
        <div>
            <Navbar />
           {/* <DetailsUpdate/> */}
           <AddCardDetails/>
           
        </div>
    )
}

export default UpdateDetailsPage