import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ClassicTheme.css'
import { saveAs } from 'file-saver'
import { BsQrCodeScan } from 'react-icons/bs'
import mailiconw from '../../../assests/img1/mail_icon_white.svg';
import phoneiconw from '../../../assests/img1/phone_icon_white.svg';
import messageiconw from '../../../assests/img1/message_icon_white.svg';
import whatsappiconw from '../../../assests/img1/whatsapp_icon_white.svg';
import arrowIcon from '../../../assests/img1/arrow_white.svg';
import fbIcon from '../../../assests/img1/fb_icon_1.svg';
import instaIcon from '../../../assests/img1/insta_icon_1.svg';
import inIcon from '../../../assests/img1/in_icon_1.svg';
import whtsIcon from '../../../assests/img1/what_icon_1.svg';
import webIcon from '../../../assests/img1/web_icon_1.svg';
import shareIcon from '../../../assests/img1/share_icon_w.svg';
import addIcon from '../../../assests/img1/addContact.svg';
import addtoHome from '../../../assests/img1/addtoHome.jpg'
import background from '../../../assests/img1/background.jpg'
import tiktok from '../../../assests/img/tiktok.png'
import twitter from '../../../assests/img/twitter.png'
import skype from '../../../assests/img/skype.png'
import youtube from '../../../assests/img/youtube4.png'
// import youtube from '../../../assests/img/youtube1.webp'
// import youtube from '../../../assests/img/youtube2.jpg'
import arrow from '../../../assests/img/more_icon.svg'
import arrow_white from '../../../assests/img/chevron-right-white.svg'
import companyProfile from '../../../assests/img/companyProfile.jpg'
import downloadIcon from '../../../assests/img1/download-circled-outline.svg'
import ftLogo from '../../../assests/img/footer_logo.svg'

// import { IoIosArrowForward } from 'react-icons/io';

function ClassicTheme({ card }) {
    const [qrModal, setQrModal] = useState(false)
    // const [letter,setLetter]= useState('')
    const array = card.name.split(" ");
    console.log(card.bgImg, 'haiiii');

    // const bg= card.bgImg


    // console.log(array, '1234wer');

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
            <section className="previewWrap1 " style={{ backgroundImage: `url(${card.bgImg ? card.bgImg : background})`, backgroundSize: '100%', backgroundPosition: 'center 150px', backgroundColor: `${card.bgImg ? '#0a0f23' : ''}` }}>
                <span className='qr-code1' onClick={() => setQrModal(true)} ><BsQrCodeScan size={22} /></span>
                <Link className='share' onClick={handleShare}><img src={shareIcon} alt='' /></Link>
                <Link className="addToContact" to={`${card.vCard}`}><img src={addIcon} alt='' /></Link>

                <div className="bannerImage">
                    <img src={card.backgroundImage ? card.backgroundImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg'} alt='' />
                </div>
                <div className="previewContainer1">
                    <div className="header"></div>
                    {card.checkPfCard ?

                        <div className={`userDetails ${!card.checkProfile ? "flex flex-col jutify-center" : ''}`} style={{backgroundColor: `${card.pfCardColor ? card.pfCardColor : ''}`}}>
                            {!card.checkProfile ? '' :

                                <figure>
                                    <img src={card.profileImage ? card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'} alt='' />
                                </figure>
                            }
                            <div className="user " style={{ width: `${card.checkProfile ? 'calc(100% - 122px)' : ''}` }}>

                                <h1 style={{ width: `${!card.checkProfile ? "max-content" : ''}`, fontSize: `${array[0]?.length > 12 || array[1]?.length > 12 || array[2]?.length > 12 ? '20px' : ''}` }} >{card.name}</h1>

                                <p>{card.companyDesignation}</p>
                            </div>
                        </div> : ''
                    }
                    <div className="social-links">
                        <Link onClick={(e) => {
                            window.location = `mailto:${card.email}`;
                            e.preventDefault();
                        }} target="_blank">
                            <img src={mailiconw} alt='' />
                        </Link>
                        <Link to={`tel:+${card.phone}`} >
                            <img src={phoneiconw} alt='' />
                        </Link>
                        <Link to={`sms:+${card.phone}`} >
                            <img src={messageiconw} alt='' />
                        </Link>
                        <Link to={`https://wa.me/+${card.whatsappNumber}?text=Hi%2C`} target="_blank">
                            <img src={whatsappiconw} alt='' />
                        </Link>
                    </div>

                    <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}`, color: `${card.colorCode ? 'white' : ''}` }}>
                        <h2><span><img src={phoneiconw} alt='' /></span> Contact Me</h2>
                        <h3>Call</h3>
                        <Link to={`tel:+${card.phone}`} style={{ color: `${card.colorCode ? 'white' : ''}` }} >+{card.phone}</Link>
                        {card.altPhone ?
                            <>
                                <h3>Work</h3>
                                <Link to={`tel:+${card.altPhone}`} style={{ color: `${card.colorCode ? 'white' : ''}` }} >+{card.altPhone}</Link>
                            </>
                            : ''
                        }
                        <h3>Email</h3>
                        <Link onClick={(e) => {
                            window.location = `mailto:${card.email}`;
                            e.preventDefault();
                        }} style={{ color: `${card.colorCode ? 'white' : ''}` }} >{card.email}</Link>
                        <h3>Location</h3>
                        <Link style={{ color: `${card.colorCode ? 'white' : ''}` }} >{card.address}</Link>
                        {card.locationUrl ?
                            <Link target='_blank' to={`${card.locationUrl}`} className='blk-btn'><img src={arrowIcon} alt='' />Direction</Link>
                            : ""
                        }
                    </div>

                    {card.facebook || card.whatsappNumber || card.linkedin || card.instagram || card.twitter || card.skype ?
                        <div>

                            <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                <h4 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Social Media</h4>
                                <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                                    {card.whatsappNumber ?
                                        <Link to={`https://wa.me/+${card.whatsappNumber}?text=Hi%2C`} target="_blank">
                                            <img src={whtsIcon} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>WhatsApp<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on WhatsApp</span></h5>
                                        </Link>
                                        : ""}
                                </div>
                            </div>
                            {card.instagram ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.instagram}`} target="_blank">
                                            <img src={instaIcon} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Instagram<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Instagram</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.facebook ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.facebook}`} target="_blank">
                                            <img src={fbIcon} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Facebook<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Facebook</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.linkedin ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.linkedin}`} target="_blank">
                                            <img src={inIcon} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>LinkedIn<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on LinkedIn</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.tiktok ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.tiktok}`} target="_blank">
                                            <img className='rounded-full' src={tiktok} alt='' />
                                            {/* <svg className='bg-black text-white p-1 rounded-full ' xmlns="http://www.w3.org/2000/svg" width="40"  height="40" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg> */}
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Tiktok<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Tiktok</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.twitter ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.twitter}`} target="_blank">
                                            <img className='rounded-full' src={twitter} alt='' />
                                            {/* <svg className='bg-black text-white p-1 rounded-full ' xmlns="http://www.w3.org/2000/svg" width="40"  height="40" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg> */}
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Twitter<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Twitter</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.skype ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.skype}`} target="_blank">
                                            <img className='rounded-full' src={skype} alt='' />
                                            {/* <svg className='bg-black text-white p-1 rounded-full ' xmlns="http://www.w3.org/2000/svg" width="40"  height="40" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg> */}
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Skype<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Skype</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.youtube ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.youtube}`} target="_blank">
                                            <img className='rounded-full' src={youtube} alt='' />
                                            {/* <svg className='bg-black text-white p-1 rounded-full ' xmlns="http://www.w3.org/2000/svg" width="40"  height="40" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg> */}
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Youtube<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>Follow me on Youtube</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                            {card.companyProfile ?
                                <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                                    <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

                                        <Link to={`${card.companyProfile}`} target="_blank">
                                            <img src={companyProfile} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Company Profile<span style={{ color: `${card.colorCode ? 'white' : ''}` }}>company profile</span></h5>
                                        </Link>

                                    </div>
                                </div>
                                : ""}
                        </div> : ""
                    }

                    {card.websiteUrl ?
                        <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                            <h4 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Website</h4>
                            <div className="social-media" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                                <Link to={`${card.websiteUrl}`} target="_blank" >
                                    <img className='rounded-full bg-white' src={webIcon} alt='' />
                                    <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}> {card.websiteName}</h5>
                                </Link>
                            </div>
                            {card.websiteName1 ?
                                <div className="social-media mt-5" style={{ backgroundImage: `url(${card.colorCode ? arrow_white : arrow})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                                    <Link to={`${card.websiteUrl1}`} target="_blank" >
                                        <img className='rounded-full bg-white' src={webIcon} alt='' />
                                        <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}> {card.websiteName1}</h5>
                                    </Link>
                                </div>
                                : ''
                            }
                        </div>
                        : ""}


                    {card.downloads ?
                        <div className="contactOptions" style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'white'}` }}>
                            <h4 style={{ color: `${card.colorCode ? 'white' : ''}` }}>Downloads</h4>
                            {card.downloads.map((obj) => {
                                return (

                                    <div className="social-media" >
                                        <Link to={`${obj.itemLink}`}  >
                                            <img className='rounded-full bg-white' src={downloadIcon} alt='' />
                                            <h5 style={{ color: `${card.colorCode ? 'white' : ''}` }}> {obj.itemName}</h5>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                        : ""}




                    {card.highlightPhotos.length === 0 ? '' :
                        (card.checkHighlight ?
                            <div>
                                <div className="photoGrid">
                                    {card.highlightPhotos.map((img) => (
                                        // <figure>
                                        <img className='mb-4 w-full' src={img} alt="" />
                                        // </figure>
                                    ))}
                                </div>
                            </div>
                            : '')


                    }



                </div>

            </section>
            {card.footer ?
                <div className="footerClassic flex flex-col items-center " style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }}  >
                    <p>POWERED BY <Link to={"https://zeeqr.co/"} target="_blank">ZEEQR</Link></p>
                    <Link to={"https://zeeqr.co/"} target="_blank" > <img className='w-18' src={ftLogo} alt='' /></Link>
                </div>
                : ''
            }

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
                                        <img src={card.QRCode} className="my-qr-code p-3 bg-white  border-2 rounded-xl border-black" width="200px" alt="" />
                                        <p className='my-qr-download' onClick={handleDownload}>
                                            Download QR Code
                                        </p>
                                        {!showResults ?
                                            <div className='addToHome' onClick={onClick}>Add to Home Screen</div>
                                            :
                                            <img className='addtoHomeImage' src={addtoHome} alt='' />}

                                    </div>

                                    <button className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleClose} >
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


export default ClassicTheme