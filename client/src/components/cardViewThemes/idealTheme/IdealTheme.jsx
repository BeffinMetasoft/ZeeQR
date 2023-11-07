import React, { useContext, useState } from 'react'
import "./IdealTheme.css";
import { Link } from 'react-router-dom';
import { HighlightImageValid, SocialMediaValid } from '../Common/DivValidation';
import SlideSocialMedia from '../Common/socialMedia/SlideSocialMedia';
import HighlightImage from '../Common/highlightImagesCards/HighlightImage';
import { FloatButton } from 'antd';
import { MenuOutlined, QrcodeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { FaLocationArrow } from 'react-icons/fa';
import QRModal from '../Common/QRModal';
import WebsiteUltra from '../Common/websiteCards/WebsiteUltra';
import ReviewCardUltra from '../Common/reviewCards/ReviewCardUltra';
import DownloadCardUltra from '../Common/fileDownloadsCards/DownloadCardUltra';
import { CardContext } from '../../store/CardContext';


function IdealTheme({card, preview }) {
    const defaultProfileImage =
        "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

    const [cardData] = useContext(CardContext)

    const {
        profileImage,
        personalDetails,
        website,
        review,
        contactDetails,
        vCard,
        
    } = cardData

    // const [showResults, setShowResults] = useState(false);
    // const onClick = () => setShowResults(true);
    const handleClose = (e) => {
        setQrModal(false);
        // setShowResults(false);
    };


    const [qrModal, setQrModal] = useState(false);

    const shareMail = (e) => {
        window.location = `mailto:${personalDetails?.email}`;
        e.preventDefault();
    };
    const shareMail2 = (e) => {
        window.location = `mailto:${personalDetails?.secondaryEmail}`;
        e.preventDefault();
    };
    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    text: "Please check it out.",
                    url: window.location.href,
                    title: "ZEEQR",
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        }
    };

    const HighlightImageCheck = HighlightImageValid();
    const SocialMediaImageCheck = SocialMediaValid();

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const pfImage = profileImage ? profileImage : defaultProfileImage

    const imageStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${pfImage})`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "sticky"
    };
    return (
        <div className='flex justify-center'>
            <div className="digitalcontainer6 ">
                <div className="digitalcontainer_center6  ">
                    <div className="digitalcontainer_banner6 relative h-screen overflow-auto scrollbar-hide  "
                        style={imageStyle}
                    >
                        <div className=' w-[400px]'>

                            {/* {profileImage[0]?.thumbUrl &&
                                profileImage[0]?.status !== "removed" ? (
                                <img
                                    className='min-h-screen sticky top-0 w-[380px]'
                                    src={
                                        profileImage[0]?.originFileObj?.type
                                            ? URL.createObjectURL(
                                                profileImage[0]?.originFileObj
                                            )
                                            : profileImage[0].thumbUrl
                                    }
                                    alt=""
                                />
                            ) : (
                                <img className='min-h-screen sticky w-[380px]' src={defaultProfileImage} alt="" />
                            )} */}
                        </div>

                        <div
                            className={` bottom-[200px] left-0 right-0 transform transition-transform ease-in-out  absolute  duration-300 ${isExpanded ? "translate-y-0 m-0 top-[0px]  " : "translate-y-full top-[450px]  "
                                }`}
                        >
                            <div className="digitaldetails6  ">
                                <div className="profilecard6  min-h-[200px] justify-between" style={{ background: 'rgba(000, 000, 000, 0.7)', marginTop: "-1px" }}>



                                    <div className="flex justify-center items-center">
                                        <div className="cursor-pointer" onClick={toggleExpand}>
                                            {isExpanded ? (
                                                <svg
                                                    width="44"
                                                    height="44"
                                                    viewBox="0 0 44 44"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M23.2961 28.7962C22.9523 29.1399 22.4861 29.333 22 29.333C21.5138 29.333 21.0476 29.1399 20.7038 28.7962L10.3326 18.4251C9.99868 18.0793 9.8139 17.6162 9.81807 17.1355C9.82225 16.6548 10.0151 16.195 10.355 15.8551C10.6949 15.5152 11.1547 15.3223 11.6354 15.3182C12.1161 15.314 12.5792 15.4988 12.925 15.8327L22 24.9077L31.075 15.8327C31.4207 15.4988 31.8838 15.314 32.3645 15.3182C32.8452 15.3223 33.3051 15.5151 33.645 15.8551C33.9849 16.195 34.1777 16.6548 34.1819 17.1355C34.1861 17.6162 34.0013 18.0793 33.6673 18.4251L23.2961 28.7962Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="44"
                                                    height="44"
                                                    viewBox="0 0 44 44"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clip-path="url(#clip0_381_288)">
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M20.7038 15.2038C21.0476 14.8601 21.5139 14.667 22 14.667C22.4861 14.667 22.9524 14.8601 23.2962 15.2038L33.6673 25.5749C34.0013 25.9207 34.1861 26.3838 34.1819 26.8645C34.1777 27.3452 33.9849 27.805 33.645 28.1449C33.3051 28.4849 32.8453 28.6777 32.3646 28.6818C31.8839 28.686 31.4208 28.5012 31.075 28.1673L22 19.0923L12.925 28.1673C12.5792 28.5012 12.1161 28.686 11.6354 28.6818C11.1547 28.6777 10.6949 28.4849 10.355 28.1449C10.0151 27.805 9.82227 27.3452 9.81809 26.8645C9.81392 26.3838 9.99871 25.9207 10.3327 25.5749L20.7038 15.2038Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_381_288">
                                                            <rect width="44" height="44" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    <div className="info  ">
                                        <p className='text-3xl text-white mb-1 font-bold text-center'>
                                            {personalDetails?.name ? personalDetails.name : ""}
                                        </p>
                                        <p className='text-sm text-white mt-5 font-semibold text-center'>
                                            {personalDetails?.companyDesignation ? personalDetails.companyDesignation : ""}
                                        </p>
                                    </div>

                                    {isExpanded && (
                                        <div className='min-h-screen '>
                                            <div>
                                                <div>


                                                    <p className='text-[14px] text-white font-normal mt-5 leading-[15px] text-center'>Call</p>
                                                    <p className='text-[14px] text-white font-normal mt-3 leading-[15px] text-center'>
                                                        <Link to={preview ? `tel:+${personalDetails?.phone}` : ""} >
                                                            <p>
                                                                + {personalDetails?.phone ? personalDetails.phone : ""}
                                                            </p>
                                                        </Link>
                                                        <Link to={preview ? `tel:+${personalDetails?.secondaryPhone}` : ""}  >
                                                            <p>
                                                                {personalDetails?.secondaryPhone ? "+" + personalDetails.secondaryPhone : ""}
                                                            </p>
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className='text-[14px] text-white font-normal mt-5 leading-[15px] text-center'>Email</p>
                                                    <p className='text-[14px] text-white font-normal mt-3 leading-[15px] text-center'>
                                                        <Link onClick={preview ? shareMail : ""}>
                                                            {personalDetails?.email
                                                                ? personalDetails.email
                                                                : ""}
                                                        </Link>

                                                        <div className="mt-2">
                                                            <Link onClick={preview ? shareMail2 : ""}>
                                                                {personalDetails?.secondaryEmail
                                                                    ? personalDetails.secondaryEmail
                                                                    : ""}
                                                            </Link>
                                                        </div>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className='text-[14px] text-white font-normal mt-5 leading-[15px] text-center'>Location</p>
                                                    <p className='text-[14px] text-white font-normal mt-3 leading-[15px] text-center'>
                                                        <Link
                                                            to={`${preview ? contactDetails?.locationUrl : ""
                                                                }`}
                                                            target={`${preview ? "_blank" : ""}`}
                                                            className="blk-btn"
                                                        >
                                                            <p>
                                                                {contactDetails?.address
                                                                    ? contactDetails.address
                                                                    : "2709 Hwy 51,Janesville"}
                                                            </p>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex justify-center items-center mt-[50px]'>
                                                    <Link className="" to={`${preview ? vCard : ''}`}>
                                                        <button className='bg-white w-[150px] h-[45px] flex gap-[10px] p-3 rounded-[3px] '>
                                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.333 9.16732H11.333V4.16732C11.333 3.9463 11.2452 3.73434 11.0889 3.57806C10.9326 3.42178 10.7207 3.33398 10.4997 3.33398C10.2787 3.33398 10.0667 3.42178 9.91042 3.57806C9.75414 3.73434 9.66634 3.9463 9.66634 4.16732V9.16732H4.66634C4.44533 9.16732 4.23337 9.25512 4.07709 9.4114C3.92081 9.56768 3.83301 9.77964 3.83301 10.0007C3.83301 10.2217 3.92081 10.4336 4.07709 10.5899C4.23337 10.7462 4.44533 10.834 4.66634 10.834H9.66634V15.834C9.66634 16.055 9.75414 16.267 9.91042 16.4232C10.0667 16.5795 10.2787 16.6673 10.4997 16.6673C10.7207 16.6673 10.9326 16.5795 11.0889 16.4232C11.2452 16.267 11.333 16.055 11.333 15.834V10.834H16.333C16.554 10.834 16.766 10.7462 16.9223 10.5899C17.0785 10.4336 17.1663 10.2217 17.1663 10.0007C17.1663 9.77964 17.0785 9.56768 16.9223 9.4114C16.766 9.25512 16.554 9.16732 16.333 9.16732Z" fill="black" />
                                                            </svg>
                                                            <p className='text-[13px] font-noremal text-black m-0'>Add contacts</p>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className='mt-5 px-2'>
                                                    {SocialMediaImageCheck ? <SlideSocialMedia preview={preview} color={'white'} /> : ""}

                                                </div>

                                            </div>
                                            {personalDetails?.about ?
                                                <div className='mt-[40px] mx-5'>

                                                    <p className='text-[14px] text-white font-normal leading-[15px] text-center'>About</p>
                                                    <p className='text-[14px] text-white font-normal leading-[15px] text-center whitespace-pre-line'> {personalDetails?.about}</p>

                                                </div>
                                                : ''}
                                            <div className='mt-[40px]'>
                                                <WebsiteUltra website={website} preview={preview} color={'white'} />
                                                <ReviewCardUltra review={review} preview={preview} color={'white'} />
                                                <DownloadCardUltra preview={preview} color={'white'} />

                                            </div>
                                            {HighlightImageCheck ?
                                                <div className='mt-[50px]'>

                                                    <p className='text-[14px] text-white font-normal leading-[15px] text-center'>media</p>
                                                    <div>
                                                        <div className='grid grid-cols-2 gap-2 items-center z-1'>
                                                            <HighlightImage />


                                                        </div>

                                                    </div>
                                                </div>
                                                : ""}

                                        </div>)}


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {preview && !qrModal ?


                    <FloatButton.Group className='shadow-xl fixed lg:right-[48%] right-[45%] bottom-10'
                        trigger="click"
                        color="black"
                        style={{
                            left: "50%",
                            color: "white",
                            position: "fixed",
                            bottom: 38,
                            marginLeft: "-20px"

                        }}
                        icon={<MenuOutlined />}
                    >
                        <FloatButton
                            icon={<ShareAltOutlined />}
                            onClick={handleShare}
                        />
                        <FloatButton
                            icon={<QrcodeOutlined />}
                            onClick={() => setQrModal(true)}
                        />
                        <Link to={contactDetails?.locationUrl} target={`${preview ? "_blank" : ""}`}>
                            <FloatButton icon={<FaLocationArrow />} />
                        </Link>

                    </FloatButton.Group>

                    : ""}
                {qrModal ? <QRModal handleClose={handleClose} /> : null}
            </div>
        </div>
    )
}

export default IdealTheme