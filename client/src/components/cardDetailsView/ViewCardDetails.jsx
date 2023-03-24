import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PreviewCard.css'
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





    return (
        <div>
            <section className="previewWrap">
                <span className='qr-code fixed bottom-0 cursor-pointer center-0 z-10 ml-[330px] md:ml-[800px] border rounded-full  text-white p-2 my-6' style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} onClick={() => setQrModal(true)} ><BsQrCodeScan size={30} /></span>

                <div className="bannerImage">
                    <img src={card.backgroundImage} alt='' />
                </div>
                <div className="previewContainer">
                    <div className="header">
                        {/* <img src={logo} alt="logo zeeqr" /> */}
                        {/* <Link className="btn" to={"https://zeeqr.co/"} target="_blank">Get your card</Link> */}
                    </div>
                    <div className='userDetails ' style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} >
                        <figure>
                            <img src={card.profileImage} alt='' />
                        </figure>
                        <div className="user">
                            <h1>{card.name}</h1>
                            <p>{card.companyDesignation}</p>
                        </div>
                    </div>
                    {card.companyLogo ?
                        <div className="companyLogo ">
                            <img src={card.companyLogo} alt='' />
                        </div> : ''
                    }
                    <div className="buttons">
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
                    }

                    {card.facebook || card.whatsappNumber || card.linkedin || card.instagram || card.twitter || card.skype ?
                        <div>
                            <div className='flex'>
                                <h2>Social media links</h2>
                                <p style={{ borderBottom: `3px solid ${card.colorCode ? card.colorCode : 'black'}`, height: '4px', marginTop: '18px' }} >&nbsp; &nbsp; &nbsp; </p>
                            </div>
                            <div className="social-links">
                                {card.linkedin ?
                                    <Link to={`${card.linkedin}`} target="_blank">
                                        <img src={linkedin} alt='' />
                                    </Link>
                                    : ""}
                                {card.instagram ?
                                    <Link to={`${card.instagram}`} target="_blank">
                                        <img src={insta} alt='' />
                                    </Link>
                                    : ''}
                                {card.facebook ?
                                    <Link to={`${card.facebook}`} target="_blank">
                                        <img src={fb} alt='' />
                                    </Link>
                                    : ""}
                                {card.twitter ?
                                    <Link to={`${card.twitter}`} target="_blank">
                                        <img src={twitter} alt='' />
                                    </Link>
                                    : ''}
                                {card.whatsappNumber ?
                                    <Link to={`https://wa.me/+${card.whatsappNumber}?text=Hi%2C`} target="_blank">
                                        <img src={whatsapp} alt='' />
                                    </Link>
                                    : ""}
                            </div>
                        </div> : " "
                    }

                    <div className='flex'>
                        <h2>Contact Info</h2>
                        <p style={{ borderBottom: `3px solid ${card.colorCode ? card.colorCode : 'black'}`, height: '4px', marginTop: '18px' }} >&nbsp; &nbsp; &nbsp; </p>
                    </div>
                    <div className="contactOptions">
                        <Link to={`tel:+${card.phone}`} ><img src={phn} alt='' />{card.phone}</Link>
                        <Link onClick={(e) => {
                            window.location = `mailto:${card.email}`;
                            e.preventDefault();
                        }} ><img src={mail} alt='' />{card.email}</Link>
                        <Link to={`${card.locationUrl}`} target="_blank" ><img src={loc} alt='' />{card.address}</Link>
                    </div>
                    <div className='flex'>
                        <h2>Website</h2>
                        <p style={{ borderBottom: `3px solid ${card.colorCode ? card.colorCode : 'black'}`, height: '4px', marginTop: '18px' }} >&nbsp; &nbsp; &nbsp; </p>
                    </div>
                    <div className="otherLinks">
                        <Link to={`${card.websiteUrl}`} target="_blank" >
                            <figure><img src={card.websiteImage} alt='' /></figure>
                            <figcaption> {card.websiteName}</figcaption>
                        </Link>
                        {/* <Link >
                            <figure><img src="https://metasoftit.com/wp-content/uploads/2020/08/service4.jpg" alt='' /></figure>
                            <figcaption>Work testimonials</figcaption>
                        </Link>
                        <Link >
                            <figure><img src="https://metasoftit.com/wp-content/uploads/2020/08/service4.jpg" alt='' /></figure>
                            <figcaption>My works & vides</figcaption>
                        </Link> */}
                    </div>
                    {card.highlightPhotos.length === 0 ? '' :
                        <div>
                            <div className='flex'>
                                <h2>Gallery</h2>
                                <p style={{ borderBottom: `3px solid ${card.colorCode ? card.colorCode : 'black'}`, height: '4px', marginTop: '18px' }} >&nbsp; &nbsp; &nbsp; </p>
                            </div>
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
                <div className="footer flex flex-col items-center " style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }}  >
                    <p>Powered by <Link to={"https://zeeqr.co/"} target="_blank">Zeeqr</Link></p>
                    <Link to={"https://zeeqr.co/"} target="_blank" > <img className='w-18' src={ftLogo} alt='' /></Link>
                </div>
            </section>

            {qrModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                                {/*body*/}
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal" onClick={() => setQrModal(false)} >

                                    <img src={card.QRCode} alt="" />
                                    <button className="cursor-pointer absolute top-0 right-0 mt-8   mr-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setQrModal(false)} >
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