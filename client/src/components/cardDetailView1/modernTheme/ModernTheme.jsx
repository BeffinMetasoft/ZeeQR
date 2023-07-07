import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModernTheme.css'
import { saveAs } from 'file-saver'
import { BsQrCodeScan } from 'react-icons/bs'
// import logo from '../../../assests/img/zeeqr-logo-white.svg';
import ftLogo from "../../../assests/img/footer_logo.svg";
import share from "../../../assests/img/share_icon.svg";
import linkedin from "../../../assests/img/linkedIn_white.svg";
import insta from "../../../assests/img/insta_white.svg";
import fb from "../../../assests/img/fb_white.svg";
import twitter from "../../../assests/img/tw_white.svg";
import whatsapp from "../../../assests/img/Whatsapp_white.svg";
// import phn from '../../../assests/img/phone_icon.svg'
// import video from "../../../assests/img1/video.png";
// import video1 from "../../../assests/img1/image.png";
// import loc from '../../../assests/img/loc_icon.svg'
// import email from '../../../assests/img1/mail2.png'
import addtoHome from '../../../assests/img1/addtoHome.jpg'

import { ImProfile } from 'react-icons/im'


function ModernTheme({ card }) {
    const [qrModal, setQrModal] = useState(false);

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    text: "check it out",
                    url: window.location.href,
                    title: card.name,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        }
    };

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
            <section className="previewWrap31 " style={{ backgroundColor: `${card.color ? card.color : 'white'}` }}  >
                <span
                    className="qr-code-modern fixed bottom-0 center-0 z-10 ml-[330px] md:ml-[800px] border rounded-full  text-white p-2 my-6"
                    onClick={() => setQrModal(true)}
                >

                    <BsQrCodeScan size={30} />
                </span>

                {/* <div
                    className="header1"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "black",
                        padding: "30px"

                    }}
                >
                    <img src={logo} alt="logo zeeqr" />
                    <Link
                        className="btn"
                        to={"https://zeeqr.co/"}
                        target="_blank"
                        style={{ color: "#fff", fontSize: "15px", border: "solid 1px", padding: "4px" }}
                    >
                        Get your card
                    </Link>
                </div> */}
                <div className="bannerImage" style={{ marginTop: "0px" }}>
                    <img src={card.profileImage ? card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'} alt="" />
                </div>
                <div className="previewContainer31" style={{ color: `${card.color ? card.color : "black"}` }} >

                    <div className="buttons w-[280px] md:w-[350px] fixed bottom-0 z-10 ">
                        <Link className='addTo' to={`${card.vCard}`} style={{ backgroundColor: `${card.colorCode ? card.colorCode : 'black'}` }} >Add to contacts</Link>
                        <Link onClick={handleShare} ><img src={share} alt='' />Share it </Link>
                    </div>
                    <div className="header">
                        {/* <img src={logo} alt="logo zeeqr" />
                          <Link className="btn" to={"https://zeeqr.co/"} target="_blank">Get your card</Link>  */}
                    </div>
                    <div className="logo" />
                    <div className="userDetails">
                        <div
                            className="text"
                            style={{
                                fontSize: "22px",
                                hieght: "100px",
                                color: "white",
                                fontWeight: "bold",
                                // padding: "20px",
                                paddingLeft: "20px"
                            }}
                        >
                            {card.name}
                            <div
                                className="text"
                                style={{ fontSize: "15px", fontFamily: "bold" }}
                            >
                                Designations
                            </div>
                        </div>
                        {
                            card.backgroundImage ? 
                        <div className="companyLogo">
                            <img src={card.backgroundImage ? card.backgroundImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg'} alt="" />
                        </div> : ''
                        }

                    </div>

                    {card.companyLogo ?
                        (card.checkLogo ?
                            <div className="companyLogoDown">
                                <img src={card.companyLogo} alt='' />
                            </div> : "")
                        : ''
                    }


                    {card.about ?
                        <div>
                            <h2>About</h2>
                            <div className="about">{card.about}</div>
                        </div>
                        : ""
                    }
                    <h2>Social media links</h2>
                    <div className="social-links overflow-x-scroll scrollbar-hide">
                        {card.linkedin ? (
                            <Link to={`${card.linkedin}`} target="_blank">
                                <img src={linkedin} alt="" />
                            </Link>
                        ) : (
                            ""
                        )}
                        {card.instagram ? (
                            <Link to={`${card.instagram}`} target="_blank">
                                <img src={insta} alt="" />
                            </Link>
                        ) : (
                            ""
                        )}
                        {card.facebook ? (
                            <Link to={`${card.facebook}`} target="_blank">
                                <img src={fb} alt="" />
                            </Link>
                        ) : (
                            ""
                        )}
                        {card.twitter ? (
                            <Link to={`${card.twitter}`} target="_blank">
                                <img src={twitter} alt="" />
                            </Link>
                        ) : (
                            ""
                        )}
                        {card.whatsappNumber ? (
                            <Link
                                to={`https://wa.me/+${card.whatsappNumber}?text=Hi%2C`}
                                target="_blank"
                            >
                                <img src={whatsapp} alt="" />
                            </Link>
                        ) : (
                            ""
                        )}
                        {card.tiktok ? (
                            <Link to={`${card.tiktok}`} target="_blank">
                                {/* <img src={tiktok} alt="" /> */}
                                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" color='white' class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" /> </svg>


                            </Link>
                        ) : (
                            ""
                        )}
                        {card.companyProfile ?
                            <Link to={`${card.companyProfile}`} target="_blank">
                                <ImProfile size={20}  style={{color:"white"}} />
                            </Link>
                            : ''}
                    </div>
                    <h2>Contact Info</h2>
                    <div className="contactOptions">
                        <Link to={`tel:+${card.phone}`} >
                            {/* <img src={phn} alt='' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> </svg>
                            {card.phone}
                        </Link>
                        <Link
                            onClick={(e) => {
                                window.location = `mailto:${card.email}`;
                                e.preventDefault();
                            }}
                        >
                            {/* <img src={email} alt="" style={{ color: "white" }} /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 13 20"> <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" /> </svg>
                            {card.email}
                        </Link>
                        {card.locationUrl ?
                            <Link to={`${card.locationUrl}`} target="_blank">
                                {/* <img src={loc} alt="" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 16.016c1.245.529 2 1.223 2 1.984 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984" /><path fill="currentColor" fill-rule="evenodd" d="M11.262 17.675 12 17l-.738.675zm1.476 0 .005-.005.012-.014.045-.05.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05.012.014.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" clip-rule="evenodd" /></svg>
                                {card.address}
                            </Link> :
                            <Link >
                                {/* <img src={loc} alt="" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 16.016c1.245.529 2 1.223 2 1.984 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984" /><path fill="currentColor" fill-rule="evenodd" d="M11.262 17.675 12 17l-.738.675zm1.476 0 .005-.005.012-.014.045-.05.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05.012.014.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" clip-rule="evenodd" /></svg>
                                {card.address}
                            </Link>
                        }



                    </div>
                    {card.websiteImage ?
                        <>
                            <h2>Website/Portfolio</h2>
                            <div className="otherLinks">
                                <Link to={`${card.websiteUrl}`} target="_blank">
                                    <figure>
                                        <img src={card.websiteImage} alt="" />
                                    </figure>
                                    <figcaption> {card.websiteName}</figcaption>
                                </Link>

                            </div>
                            {card.websiteImage1 ?
                                <div className="otherLinks ">
                                    <Link to={`${card.websiteUrl1}`} target="_blank" >
                                        <figure><img src={card.websiteImage1} alt='' /></figure>
                                        <figcaption> {card.websiteName1}</figcaption>
                                    </Link>

                                </div>
                                : ''
                                }
                        </>
                        : ''
                    }

                    {card.highlightPhotos.length === 0 ? (
                        ""
                    ) : (card.checkHighlight ?
                        <div>
                            <h2>Photos of Highlight</h2>

                            <div className="photoGrid">
                                {card.highlightPhotos.map((img) => (
                                    // <figure>
                                    <img className="mb-6" src={img} alt="" />
                                    // </figure>
                                ))}
                            </div>
                        </div> : " "
                    )}
                    {/* <div className="ourVideo">
                        <h2>Video of Highlight</h2>
                        <Link className="video">
                            <img className="img-fluid mb-5" src={video} alt="" />
                        </Link>
                        <Link className="video ">
                            <img className="img-fluid mb-5" src={video1} alt="" />
                        </Link>
                    </div> */}
                </div>
                <div className="footer flex flex-col items-center">
                    <p>
                        Powered by{" "}
                        <Link to={"https://zeeqr.co/"} target="_blank">
                        ZEEQR
                        </Link>
                    </p>
                    <img className="w-18" src={ftLogo} alt="" />
                </div>
            </section>

            {qrModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                                {/*body*/}
                                <div className="popup-container2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal"  >

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
                                            <div className='addToHome2' onClick={onClick}  >Add to Home Screen</div>
                                            :
                                            <img className='addtoHomeImage2' src={addtoHome} alt='' />}

                                    </div>

                                    <button className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleClose}  >
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
    );
}

export default ModernTheme