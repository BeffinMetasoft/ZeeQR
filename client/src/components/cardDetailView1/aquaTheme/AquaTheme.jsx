import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AquaTheme.css'
import { saveAs } from 'file-saver'

import logo from '../../../assests/img/zeeqr-logo-white.svg'
import ftLogo from '../../../assests/img/footer_logo.svg'
import ultratheme1mail from '../../../assests/img/ultratheme1mail.svg'
import ultratheme1sms from '../../../assests/img/ultratheme1sms.svg'
import ultratheme1whatsapp from '../../../assests/img/ultratheme1whatsapp.svg'
import ultratheme1call from '../../../assests/img/ultratheme1call.svg'

import smscontact from '../../../assests/img/smscontact.svg'
import phonecontact from '../../../assests/img/phonecontact.svg'
import messagecontact from '../../../assests/img/messagecontact.svg'
import whatsappcontact from '../../../assests/img/whatsappcontact.svg'
import share from '../../../assests/img/share_icon.svg'
import twitter from '../../../assests/img/twt_icon.svg'
import ultraThemeimg from '../../../assests/ultrathemeimgbg.png'
import phoneiconw from '../../../assests/img/phone_icon.svg'
import mail from '../../../assests/img/mail_icon.svg'
import loc from '../../../assests/img/loc_icon.svg'
import arrowIcon from '../../../assests/img1/arrow_white.svg';
import webIcon from '../../../assests/img1/web_icon_1.svg'
import whtsIcon from '../../../assests/img1/what_icon_1.svg';
import inIcon from '../../../assests/img1/in_icon_1.svg';
import instaIcon from '../../../assests/img1/insta_icon_1.svg';
import fbIcon from '../../../assests/img1/fb_icon_1.svg';
import { BsQrCodeScan } from 'react-icons/bs'
import addtoHome from '../../../assests/img1/addtoHome.jpg'
import { message } from 'antd'





function AquaTheme({ card }) {

  const [qrModal, setQrModal] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        text: "Please check it out.",
        url: window.location.href,
        title: 'ZeeQR'
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }



  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)
  const handleClose = (e) => {
    setQrModal(false)
    setShowResults(false)
  }

  const handleDownload = () => {
    let url = card.QRCode
    saveAs(url, card.name);
  }




  return (
    <div>
      <section className="previewWrapAqua" style={{ backgroundColor: `${card.color ? card.color : 'white'}` }} >
        <span className='qr-code fixed bottom-0 cursor-pointer center-0 z-10 ml-[330px] md:ml-[800px] border rounded-full  text-white p-2 my-6' style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} onClick={() => setQrModal(true)} ><BsQrCodeScan size={30} /></span>


        <div className="bannerImage" style={{ backgroundColor: `${card.color ? card.color : 'black'}` }}>
          {/* <img src={card.backgroundImage ? card.backgroundImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg' } alt='' /> */}

        </div>
        <div className="previewContainerAqua" style={{ color: `${card.color ? card.color : "black"}` }} >
          <div className="header">
            <img src={logo} alt="logo zeeqr" />
            <Link className="btn" to={"https://zeeqr.co/"} target="_blank">Get your card</Link>
          </div>
          <div >
            <div className='relative h-[400px]'>
              <div className='userDetails' >
                {/* <img src={ultraThemeimg} /> */}
                 
                <img className='rounded-lg'src={card.backgroundImage ? card.backgroundImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg'} alt='' />
           
                
               
                {/* <div className='figure'>
                          <img src={card.profileImage ? card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'} alt='' />
                          </div> */}


              </div>
              <div className='bg-black h-2 mb-[10px]'></div>
              <div className='bg-black h-2 mb-[10px]'> </div>
              <div className='userdetails_profile_img absolute top-[180px] left-7'>
                
                <figure>
                  <img className='w-40 h-40 rounded-full ' src={card.profileImage ? card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'} alt='' />
                </figure>
              </div>
            </div>
            {card.companyLogo ?
              (card.checkLogo ?
                <div className="companyLogo ">
                  <img src={card.companyLogo} alt='' />
                </div> : "")
              : ''
            }
                        <div className="user">
                  <h1 >{card.name}</h1>
                  <p>{card.companyDesignation}</p>
                </div>
            {/* <div className="buttons">
              <Link className='addTo' to={`${card.vCard}`} style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} >Add to contacts</Link>
              <Link onClick={handleShare} ><img src={share} alt='' />Share it </Link>
            </div>
            {card.about ?
              <div>
                <div className='flex'>
                  <h2>About </h2>
                  <p style={{ borderBottom: `3px solid ${card.colorCode ? card.colorCode : 'black'}`, height: '4px', marginTop: '18px' }} >&nbsp; &nbsp; &nbsp; </p>
                </div>
                <div className="about ">{card.about}</div>
              </div> : ""
            } */}
            

            <div className='contact_details justify-center items-center '>
              <div className=" flex justify-center items-center gap-4">
                <img className='h-16' src={ultratheme1mail} />
                <img className='h-16' src={ultratheme1call} />
                <img className='h-16' src={ultratheme1sms} />
                <img className='h-16'  src={ultratheme1whatsapp} />

              </div>



            </div>
            <div className="contactOptions mt-10">
              <h2 className='contact'>
                {/* <span><img src={phoneiconw} alt='' /></span>  */}
              Contact Me</h2>
              <h3>Call</h3>
              <Link to={`tel:+${card.phone}`} >+{card.phone}</Link>
              <h3>Email</h3>
              <Link onClick={(e) => {
                window.location = `mailto:${card.email}`;
                e.preventDefault();
              }} >{card.email}</Link>
              <h3>Location</h3>
              <Link >{card.address}</Link>
              {/* {card.locationUrl ?
                <Link target='_blank' to={`${card.locationUrl}`} className='blk-btn'><img src={arrowIcon} alt='' />Direction</Link>
                : ""
              } */}
            </div>

            {card.facebook || card.whatsappNumber || card.linkedin || card.instagram || card.twitter || card.skype ?
              <div>
                <div className="contactOptions">
                  <h4 className='social mb-4'>Social media links</h4>
                  <div className="social-media">
                    {card.facebook ?
                      <Link to={`${card.facebook}`} target="_blank">
                        <img src={fbIcon} alt='' />
                        <h5>Facebook<span>Follow me on Facebook</span></h5>
                      </Link>
                      : ""}
                  </div>
                </div>
                <div className="contactOptions">
                  <div className="social-media">
                    {card.instagram ?
                      <Link to={`${card.instagram}`} target="_blank">
                        <img src={instaIcon} alt='' />
                        <h5>Instagram<span>Follow me on Instagram</span></h5>
                      </Link>
                      : ""}
                  </div>
                </div>
                <div className="contactOptions">
                  <div className="social-media">
                    {card.whatsappNumber ?
                      <Link to={`https://wa.me/+${card.whatsappNumber}?text=Hi%2C`} target="_blank">
                        <img src={whtsIcon} alt='' />
                        <h5>WhatsApp<span>Follow me on WhatsApp</span></h5>
                      </Link>
                      : ""}
                  </div>
                </div>
                <div className="contactOptions">
                  <div className="social-media">
                    {card.linkedin ?
                      <Link to={`${card.linkedin}`} target="_blank">
                        <img src={inIcon} alt='' />
                        <h5>LinkedIn<span>Follow me on LinkedIn</span></h5>
                      </Link>
                      : ""}
                  </div>
                </div>
              </div> : ""
            }

            {card.websiteUrl ?
              <div className="contactOptions">
                <h4 className='website mb-4'>Website/Portfolio</h4>
                <div className="social-media">
                  <Link to={`${card.websiteUrl}`} target="_blank" >
                    <img src={webIcon} alt='' />
                    <h5> {card.websiteName}</h5>
                  </Link>
                </div>
              </div>
              : ""}
            {card.highlightPhotos.length === 0 ? (
              ""
            ) : (
              <div>
                <h2 className='photo ml-5'>Photos of Highlight</h2>

                <div className="photoGrid">
                  {card.highlightPhotos.map((img) => (
                    // <figure>
                    <img className="mb-6" src={img} alt="" />
                    // </figure>
                  ))}
                </div>
              </div>
            )}


          </div>

        </div>
        <div className="footer flex flex-col items-center " style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }}  >
          <p>Powered by <Link to={"https://zeeqr.co/"} target="_blank">Zeeqr</Link></p>
          <Link to={"https://zeeqr.co/"} target="_blank" > <img className='w-18' src={ftLogo} alt='' /></Link>
        </div>
      </section>

      {qrModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/content/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                {/body/}
                <div className="popup-container1 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal"  >

                  <div className="userDetails">
                    <figure>
                      <img src={card.profileImage} alt='' />
                    </figure>
                    <div className="user">
                      <h1>{card.name}</h1>
                      <p>{card.companyDesignation}</p>
                    </div>

                    <img src={card.QRCode} className="my-qr-code" width="200px" alt="" />
                    <p className='my-qr-download' onClick={handleDownload}>
                      Download QR Code
                    </p>
                    {!showResults ?
                      <div className='addToHome' onClick={onClick} style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} >Add to Home Screen</div>
                      :
                      <img className='addtoHomeImage' src={addtoHome} alt='' />}

                  </div>

                  <button className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleClose} style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

      ) : null}
    </div>
  )
}

export default AquaTheme