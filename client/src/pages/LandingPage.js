import React, { useEffect } from 'react'
// import Landing from '../components/landing/Landing'
// import NavbarLanding from '../components/navbar/NavbarLanding'

function LandingPage() {
  useEffect(()=>{
    window.location.href = 'https://zeeqr.com/'
  })
    return (
      <div>
           {/* <NavbarLanding/>
           <Landing/> */}
      </div>
    )
}

export default LandingPage