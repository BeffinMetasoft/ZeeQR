import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PreviewCard_1.css'
// import logo from '../../assests/img/zeeqr-logo-white.svg'
import ftLogo from '../../assests/img/footer_logo.svg'
import share from '../../assests/img/share_icon.svg'
import linkedin from '../../assests/img/in_icon.svg'
import insta from '../../assests/img/ig_icon.svg'
import fb from '../../assests/img/fb_icon.svg'
import twitter from '../../assests/img/twt_icon.svg'
import whatsapp from '../../assests/img/wha_icon.svg'
import phn from '../../assests/img/phone_icon.svg'
import mail from '../../assests/img/mail_icon.svg'
import loc from '../../assests/img/loc_icon.svg'
import { BsQrCodeScan } from 'react-icons/bs'
// import Contacts from 'react-native-contacts';
// import ContactsModule from './ContactModule'
import mailiconw from '../../assests/img/mail_icon_white.svg';
import phoneiconw from '../../assests/img/phone_icon_white.svg';
import messageiconw from '../../assests/img/message_icon_white.svg';
import whatsappiconw from '../../assests/img/whatsapp_icon_white.svg';
import arrowIcon from '../../assests/img/arrow_white.svg';
import fbIcon from '../../assests/img/fb_icon_1.svg';
import instaIcon from '../../assests/img/insta_icon_1.svg';
import inIcon from '../../assests/img/in_icon_1.svg';
import whtsIcon from '../../assests/img/what_icon_1.svg';
import webIcon from '../../assests/img/web_icon_1.svg';
import shareIcon from '../../assests/img/share_icon_w.svg';
import addIcon from '../../assests/img/addContact.svg';
import addtoHome from '../../assests/img/addtoHome.jpg'

function ViewCardDetails({ card }) {

    const [qrModal, setQrModal] = useState(false)

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                text: "check it out",
                url: window.location.href,
                title: 'ZeeQR'
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }
    
    const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)



    return (
        <div>
            <section className="previewWrap">
                <span className='qr-code' onClick={() => setQrModal(true)} ><BsQrCodeScan size={22} /></span>
                <Link className='share'onClick={handleShare}><img src={shareIcon}/></Link>
                <Link className="addTo" to={`${card.vCard}`}><img src={addIcon}/></Link>

                <div className="bannerImage">
                    <img src={card.backgroundImage} alt='' />
                </div>
                <div className="previewContainer">
                    <div className="header"></div>
                    <div className="userDetails">
                        <figure>
                            <img src={card.profileImage} alt='' />
                        </figure>
                        <div className="user">
                            <h1>{card.name}</h1>
                            <p>{card.companyDesignation}</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <Link to={``} target="_blank">
                            <img src={mailiconw} />
                        </Link>
                        <Link to={``} target="_blank">
                            <img src={phoneiconw} />
                        </Link>
                        <Link to={``} target="_blank">
                            <img src={messageiconw} />
                        </Link>
                        <Link to={``} target="_blank">
                            <img src={whatsappiconw} />
                        </Link>
                    </div>

                    <div className="contactOptions">
                        <h2><span><img src={phoneiconw}/></span> Contact Me</h2>
                        <h3>Call</h3>
                        <Link to={`tel:+${card.phone}`} >{card.phone}</Link>
                        <h3>Email</h3>
                        <Link onClick={(e) => {
                            window.location = `mailto:${card.email}`;
                            e.preventDefault();
                        }} >{card.email}</Link>
                        <h3>Location</h3>
                        <Link >{card.address}</Link>
                        <a target='_blank' href={`${card.locationUrl}`} className='blk-btn'><img src={arrowIcon}/>Direction</a>
                    </div>

                    <div className="contactOptions">
                        <h4>Social Media</h4>
                        <div className="social-media">
                            {card.facebook ?
                                <Link to={`${card.facebook}`} target="_blank">
                                    <img src={fbIcon} alt='' />
                                    <h5>Facebook<span>Follow me on Facebook</span></h5>
                                </Link>
                            :""}
                         </div>
                    </div>
                    <div className="contactOptions">
                        <div className="social-media">
                            {card.linkedin ? 
                            <Link to={`${card.linkedin}`} target="_blank">
                                <img src={instaIcon} alt='' />
                                <h5>Instagram<span>Follow me on Instagram</span></h5>
                            </Link>
                            :""}
                         </div>
                    </div>
                    <div className="contactOptions">
                        <div className="social-media">
                            {card.phone ? 
                                <Link to={`https://wa.me/+${card.phone}?text=Hi%2C`} target="_blank">
                                    <img src={inIcon} alt='' />
                                    <h5>LinkedIn<span>Follow me on LinkedIn</span></h5>
                                </Link>
                            : ""}
                         </div>
                    </div>
                    <div className="contactOptions">
                        <div className="social-media">
                            {card.linkedin ? 
                            <Link to={`${card.linkedin}`} target="_blank">
                                <img src={whtsIcon} alt='' />
                                <h5>WhatsApp<span>Follow me on WhatsApp</span></h5>
                            </Link>
                            :""}
                         </div>
                    </div>
                    
                    

                    <div className="contactOptions">
                        <h4>Website</h4>
                        <div className="social-media">
                            <Link to={`${card.websiteUrl}`} target="_blank" >
                                <img src={webIcon} alt='' />
                                <h5> {card.websiteName}</h5>
                            </Link>
                        </div>
                    </div>


                    {card.highlightPhotos.length === 0 ? '' :
                        <div>
                            <div className="photoGrid">
                                {card.highlightPhotos.map((img) => (
                                    // <figure>
                                    <img className='mb-4' src={img} alt="" />
                                    // </figure>
                                ))}
                            </div>
                        </div>

                    }

                </div>

            </section>

            {qrModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                                {/*body*/}
                                <div className="popup-container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal" >
                                    
                                    <div className="userDetails">
                                        <figure>
                                            <img src={card.profileImage} alt='' />
                                        </figure>
                                        <div className="user">
                                            <h1>{card.name}</h1>
                                            <p>{card.companyDesignation}</p>
                                        </div>
                                        <img src={card.QRCode} className="my-qr-code" alt="" />
                                        <div className='addToHome' onClick={onClick}>Add to Home Screen</div>
                                        { showResults ? <img className='addtoHomeImage' src={addtoHome}/> : null } 
                                        
                                    </div>
                                    
                                    <button className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setQrModal(false)} >
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

export default ViewCardDetails