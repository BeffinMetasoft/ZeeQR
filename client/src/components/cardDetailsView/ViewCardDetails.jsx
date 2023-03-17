import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PreviewCard.css'
import logo from '../../assests/img/zeeqr-logo-white.svg'
import linkedin from '../../assests/img/in_icon.svg'
import insta from '../../assests/img/ig_icon.svg'
import fb from '../../assests/img/fb_icon.svg'
import twitter from '../../assests/img/twt_icon.svg'
import whatsapp from '../../assests/img/wha_icon.svg'

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

    const handleAddToContact = (phone,name)=>{
        const url = `tel:${phone};name=${encodeURIComponent(name)}`;
        window.location.href = url
    }

    return (
        <div>
            <section className="previewWrap">
                <div className="bannerImage">
                    <img src={card.backgroundImage} alt='' />
                </div>
                <div className="previewContainer">
                    <div className="header">
                        <img src={logo} alt="logo zeeqr" />
                        <Link className="btn" to={"https://zeeqr.info"} target="_blank">Get your card</Link>
                    </div>
                    <div className="userDetails">
                        <figure>
                            <img src={card.profileImage} alt='' />
                        </figure>
                        <div className="user">
                            <h1>{card.name}</h1>
                            <p>{card.companyDesignation}</p>
                        </div>
                    </div>
                    <div className="companyLogo">
                        <img src={card.companyLogo} alt='' />
                    </div>
                    <div className="buttons">
                        <Link className="addTo" onClick={()=>handleAddToContact('45464564564','hai')} >Add to contacts</Link>
                        <Link onClick={handleShare} ><img src="./assets/img/share_icon.svg" alt='' />Share it </Link>
                    </div>
                    <h2>About</h2>
                    <div className="about">{card.about}</div>
                    <h2>Social media links</h2>
                    <div className="social-links">
                        <Link to={`${card.linkedin}`} target="_blank">
                            <img src={linkedin} alt='' />
                        </Link>
                        <Link to={`${card.instagram}`} target="_blank">
                            <img src={insta} alt='' />
                        </Link>
                        <Link to={`${card.facebook}`} target="_blank">
                            <img src={fb} alt='' />
                        </Link>
                        <Link to={`${card.twitter}`} target="_blank">
                            <img src={twitter} alt='' />
                        </Link>
                        <Link target="_blank">
                            <img src={whatsapp} alt='' />
                        </Link>
                    </div>
                    <h2>Contact Info</h2>
                    <div className="contactOptions">
                        <Link to={`tel:${card.phone}`} ><img src="./assets/img/phone_icon.svg" alt='' />{card.phone}</Link>
                        <Link onClick={(e) => {
                            window.location = `mailto:${card.email}`;
                            e.preventDefault();
                        }} ><img src="./assets/img/mail_icon.svg" alt='' />{card.email}</Link>
                        <Link><img src="./assets/img/loc_icon.svg" alt='' />{card.address}</Link>
                    </div>
                    <h2>Website/Portfolio</h2>
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
                    <h2>Photos of Highlight</h2>
                    <div className="photoGrid">
                        {card.highlightPhotos.map((img) => (
                            // <figure>
                            <img className='h-28 w-40  shadow-xl ' src={img} alt="" />
                        // </figure>
                        ))}

                        
                    </div>
                </div>
                <div className="footer">
                    <p>Powered by <Link to={"https://zeeqr.info"} target="_blank">Zeeqr</Link></p>
                    <img src="./assets/img/footer_logo.svg" alt='' />
                </div>
            </section>
        </div>
    )
}

export default ViewCardDetails