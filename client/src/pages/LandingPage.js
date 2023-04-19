import React from 'react'
// import Landing from '../components/landing/Landing'
import NavbarLanding from '../components/navbar/NavbarLanding'
import Landing1 from '../components/landing/Landin1'
import { Modal } from 'antd'
import { Model } from 'react-model'

function LandingPage() {
    return (
      <div>
           <NavbarLanding/>
           {/* <Landing/> */}
           <Landing1/>
        
      </div>
    )
}

export default LandingPage