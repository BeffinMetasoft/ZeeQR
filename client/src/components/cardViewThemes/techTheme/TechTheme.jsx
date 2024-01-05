import React, { useContext } from "react";
import "./TechTheme.css";
import { Link } from "react-router-dom";

import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import { HighlightImageValid, SocialMediaValid } from "../Common/DivValidation";
import { useState } from "react";
import QRModal from "../Common/QRModal";
import SlideSocialMedia from "../Common/socialMedia/SlideSocialMedia";
import ContactCard1 from "../Common/contactCards/ContactCard1";
import WebsiteBasic from "../Common/websiteCards/WebsiteBasic";
import ReviewCardBasic from "../Common/reviewCards/ReviewCardBasic";
import DownloadBasic from "../Common/fileDownloadsCards/DownloadBasic";
import { CardContext } from "../../store/CardContext";
import SlideSocialMedias from "../Common/socialMedia/SlideSocialMedias";

const defaultBackgroundImage =
    "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage =
    "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function TechTheme({ preview }) {
    const [cardData] = useContext(CardContext)
    const {
        contactDetails,
        backgroundImage,
        profileImage,
        website,
        vCard,
        review,
        fileName,
        files,
        personalDetails,
        socialMedias,
        checkProfile
    } = cardData



    const highlighCheck = HighlightImageValid();
    const SocialMediaImageCheck = SocialMediaValid();

    const Textcolor = "#000000";


    const [qrModal, setQrModal] = useState(false);
    // const [showResults, setShowResults] = useState(false);
    // const onClick = () => setShowResults(true);
    const handleClose = (e) => {
        setQrModal(false);
        // setShowResults(false);
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
    }

    return (
        <>
            <div className="Techtheme">
                <div className="Techtheme_banner ">
                    {backgroundImage ? (
                        <img
                            src={backgroundImage}
                            alt=""
                        />
                    ) : (
                        <img src={defaultBackgroundImage} alt="" />
                    )}
                </div>
                <div className="techdetails absolute top-[250px] pb-16">
                    <div className="flex items-center m-auto justify-center">
                        <div className=" ">
                            <div className=" border border-2 border-none flex items-center m-auto justify-center m-[20px] rounded-[50%]">
                                {checkProfile ? (
                                    <>
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt=""
                                                className="w-[150px] h-[150px] border border-2 border-none  m-[20px] rounded-[50%]"
                                            />
                                        ) : (
                                            <img
                                                src={defaultProfileImage}
                                                alt=""
                                                className="w-[150px] h-[150px] border border-2 border-none  m-[20px] rounded-[50%]"
                                            />
                                        )}
                                    </>
                                ) : ""
                                }
                            </div>

                            <p className={`text-center tracking-normal text-black leading-2  text-[24px] font-bold ${checkProfile ? '' : 'mt-32'} `}>
                                {personalDetails?.name ? personalDetails.name : ""}
                            </p>

                            <p className=" text-[#000] text-md  break-words font-normal leading-5 text-center ">
                                {personalDetails?.companyDesignation
                                    ? personalDetails.companyDesignation
                                    : ""}
                            </p>
                            <p className=" text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-center pl-2 pr-2 mt-3 whitespace-pre-line">
                                {personalDetails?.about}
                            </p>

                            <div className="flex items-center mt-10 justify-center gap-5">
                                {contactDetails?.googleMapUrl ? (
                                    <button className="bg-black w-[52px] h-[45px] items-center justify-center flex rounded-[23px]">
                                        <Link
                                            to={`${preview ? contactDetails?.locationUrl : ""}`}
                                            target={`${preview ? "_blank" : ""}`}
                                            className="blk-btn"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.2463 3.36842C18.6355 2.35759 17.6421 1.36426 16.6313 1.75342L2.46798 7.20009C1.33465 7.63509 1.42465 9.26676 2.59798 9.57509L8.44048 11.1126C8.54764 11.1407 8.6454 11.1968 8.72374 11.2752C8.80208 11.3535 8.85819 11.4513 8.88631 11.5584L10.4238 17.4001C10.7321 18.5743 12.3638 18.6634 12.7988 17.5309L18.2463 3.36842Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </Link>
                                    </button>
                                ) : (
                                    ""
                                )}
                                <Link className="" to={`${preview ? vCard : ''}`}>
                                    <button className="bg-black w-[160px] h-[45px]   rounded-[23px]">
                                        <div className="flex text-black flex justify-center  gap-2">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.833 9.16683H10.833V4.16683C10.833 3.94582 10.7452 3.73385 10.5889 3.57757C10.4326 3.42129 10.2207 3.3335 9.99967 3.3335C9.77866 3.3335 9.5667 3.42129 9.41042 3.57757C9.25414 3.73385 9.16634 3.94582 9.16634 4.16683V9.16683H4.16634C3.94533 9.16683 3.73337 9.25463 3.57709 9.41091C3.42081 9.56719 3.33301 9.77915 3.33301 10.0002C3.33301 10.2212 3.42081 10.4331 3.57709 10.5894C3.73337 10.7457 3.94533 10.8335 4.16634 10.8335H9.16634V15.8335C9.16634 16.0545 9.25414 16.2665 9.41042 16.4228C9.5667 16.579 9.77866 16.6668 9.99967 16.6668C10.2207 16.6668 10.4326 16.579 10.5889 16.4228C10.7452 16.2665 10.833 16.0545 10.833 15.8335V10.8335H15.833C16.054 10.8335 16.266 10.7457 16.4223 10.5894C16.5785 10.4331 16.6663 10.2212 16.6663 10.0002C16.6663 9.77915 16.5785 9.56719 16.4223 9.41091C16.266 9.25463 16.054 9.16683 15.833 9.16683Z"
                                                    fill="white"
                                                />
                                            </svg>

                                            <p className="font-bold text-white">Add contact</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------ other section -----------------------------  */}
                    {/* <Contactview preview={preview} /> */}
                    <div className="Techtheme ">
                        <div className="m-7">
                            <p className="text-center mt-[40px] text-[14px] text-black font-semibold uppercase">
                                Contact
                            </p>
                            <ContactCard1 preview={preview} Textcolor={Textcolor} controls={true} />
                        </div>

                    </div>

                    {SocialMediaImageCheck || (socialMedias && socialMedias?.length !== 0) ?
                        <>
                            <p className="text-center mt-[40px] text-[14px] text-black font-semibold uppercase">
                                Social
                            </p>
                            {(socialMedias && socialMedias?.length !== 0) ?
                                <SlideSocialMedias preview={preview} />
                                :
                                <SlideSocialMedia preview={preview} />
                            }
                        </>
                        : ''
                    }

                    {website[0]?.websiteName ?
                        <>
                            <h3 className="text-center mt-[20px] text-[14px] text-black font-semibold uppercase">
                                Website
                            </h3>
                            <div className="py-5 px-7">

                                <WebsiteBasic preview={preview} />
                            </div>
                        </>
                        : ''
                    }
                    {review[0]?.reviewName ?
                        <>
                            <h3 className="text-center mt-[20px] text-[14px] text-black font-semibold uppercase">
                                Review
                            </h3>
                            <div className="py-5 px-7">
                                <ReviewCardBasic review={review} preview={preview} />
                            </div>
                        </>
                        : ''
                    }
                    {fileName?.fileName1 || fileName?.fileName2 || fileName?.fileName3 || fileName?.fileName4 ?
                        <>
                            <h3 className="text-center mt-[20px] text-[14px] text-black font-semibold uppercase">
                                Downloads
                            </h3>
                            <div className="py-5 px-7">
                                <DownloadBasic files={files} fileName={fileName} preview={preview} />
                            </div>
                        </>
                        : ''
                    }



                    <>
                        {" "}
                        <div className="flex gap-3 justify-center items-center">
                            <span className="font-semibold text-center mb-4 text-black text-[14px]  text-[#5A5A5A] uppercase leading-[15px]">
                                {highlighCheck ? "Gallery" : ""}
                            </span>{" "}
                        </div>
                        <HighlightImage preview={preview} />
                    </>

                    {preview ? (
                        <div className="flex justify-center gap-[20px] fixed bottom-8 left-[25%] lg:left-[43%]   ">
                            <Link to={`${preview ? vCard : ''}`} >
                                <button className="w-[50px] h-[50px] shadow-xl p-[15px] rounded-[12px]  bg-white" >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.2913 7.95854H10.0413V1.70854C10.0413 1.43227 9.93151 1.16732 9.73616 0.971967C9.54081 0.776617 9.27586 0.66687 8.99959 0.66687C8.72333 0.66687 8.45837 0.776617 8.26302 0.971967C8.06767 1.16732 7.95793 1.43227 7.95793 1.70854V7.95854H1.70793C1.43166 7.95854 1.16671 8.06828 0.971357 8.26363C0.776007 8.45898 0.66626 8.72394 0.66626 9.0002C0.66626 9.27647 0.776007 9.54142 0.971357 9.73677C1.16671 9.93212 1.43166 10.0419 1.70793 10.0419H7.95793V16.2919C7.95793 16.5681 8.06767 16.8331 8.26302 17.0284C8.45837 17.2238 8.72333 17.3335 8.99959 17.3335C9.27586 17.3335 9.54081 17.2238 9.73616 17.0284C9.93151 16.8331 10.0413 16.5681 10.0413 16.2919V10.0419H16.2913C16.5675 10.0419 16.8325 9.93212 17.0278 9.73677C17.2232 9.54142 17.3329 9.27647 17.3329 9.0002C17.3329 8.72394 17.2232 8.45898 17.0278 8.26363C16.8325 8.06828 16.5675 7.95854 16.2913 7.95854Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </Link>
                            <button className="cursor-pointer shadow-xl w-[50px] shadow-xl  h-[50px]  rounded-[12px]  bg-white" onClick={handleShare}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={handleShare}>
                                    <rect width="50" height="50" rx="12" fill="white" />
                                    <path d="M31 35C30.1667 35 29.4583 34.7083 28.875 34.125C28.2917 33.5417 28 32.8333 28 32C28 31.8833 28.0083 31.7623 28.025 31.637C28.0417 31.5117 28.0667 31.3993 28.1 31.3L21.05 27.2C20.7667 27.45 20.45 27.646 20.1 27.788C19.75 27.93 19.3833 28.0007 19 28C18.1667 28 17.4583 27.7083 16.875 27.125C16.2917 26.5417 16 25.8333 16 25C16 24.1667 16.2917 23.4583 16.875 22.875C17.4583 22.2917 18.1667 22 19 22C19.3833 22 19.75 22.071 20.1 22.213C20.45 22.355 20.7667 22.5507 21.05 22.8L28.1 18.7C28.0667 18.6 28.0417 18.4877 28.025 18.363C28.0083 18.2383 28 18.1173 28 18C28 17.1667 28.2917 16.4583 28.875 15.875C29.4583 15.2917 30.1667 15 31 15C31.8333 15 32.5417 15.2917 33.125 15.875C33.7083 16.4583 34 17.1667 34 18C34 18.8333 33.7083 19.5417 33.125 20.125C32.5417 20.7083 31.8333 21 31 21C30.6167 21 30.25 20.9293 29.9 20.788C29.55 20.6467 29.2333 20.4507 28.95 20.2L21.9 24.3C21.9333 24.4 21.9583 24.5127 21.975 24.638C21.9917 24.7633 22 24.884 22 25C22 25.1167 21.9917 25.2377 21.975 25.363C21.9583 25.4883 21.9333 25.6007 21.9 25.7L28.95 29.8C29.2333 29.55 29.55 29.3543 29.9 29.213C30.25 29.0717 30.6167 29.0007 31 29C31.8333 29 32.5417 29.2917 33.125 29.875C33.7083 30.4583 34 31.1667 34 32C34 32.8333 33.7083 33.5417 33.125 34.125C32.5417 34.7083 31.8333 35 31 35Z" fill="black" />
                                </svg>

                            </button>
                            <button
                                className="w-[50px] h-[50px] p-[10px] shadow-xl rounded-[12px] bg-white"
                                onClick={() => setQrModal(true)}
                            >
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.25 9.20833C4.25 7.8933 4.77239 6.63213 5.70226 5.70226C6.63213 4.77239 7.8933 4.25 9.20833 4.25H11.849C12.2247 4.25 12.5851 4.39926 12.8507 4.66493C13.1164 4.93061 13.2657 5.29094 13.2657 5.66667C13.2657 6.04239 13.1164 6.40272 12.8507 6.6684C12.5851 6.93408 12.2247 7.08333 11.849 7.08333H9.20833C8.64475 7.08333 8.10425 7.30722 7.70573 7.70573C7.30722 8.10425 7.08333 8.64475 7.08333 9.20833V11.849C7.08333 12.2247 6.93408 12.5851 6.6684 12.8507C6.40272 13.1164 6.04239 13.2657 5.66667 13.2657C5.29094 13.2657 4.93061 13.1164 4.66493 12.8507C4.39926 12.5851 4.25 12.2247 4.25 11.849V9.20833ZM20.7343 5.66667C20.7343 5.29094 20.8836 4.93061 21.1493 4.66493C21.4149 4.39926 21.7753 4.25 22.151 4.25H24.7917C26.1067 4.25 27.3679 4.77239 28.2977 5.70226C29.2276 6.63213 29.75 7.8933 29.75 9.20833V11.849C29.75 12.2247 29.6007 12.5851 29.3351 12.8507C29.0694 13.1164 28.7091 13.2657 28.3333 13.2657C27.9576 13.2657 27.5973 13.1164 27.3316 12.8507C27.0659 12.5851 26.9167 12.2247 26.9167 11.849V9.20833C26.9167 8.64475 26.6928 8.10425 26.2943 7.70573C25.8958 7.30722 25.3553 7.08333 24.7917 7.08333H22.151C21.7753 7.08333 21.4149 6.93408 21.1493 6.6684C20.8836 6.40272 20.7343 6.04239 20.7343 5.66667ZM5.66667 20.7343C6.04239 20.7343 6.40272 20.8836 6.6684 21.1493C6.93408 21.4149 7.08333 21.7753 7.08333 22.151V24.7917C7.08333 25.3553 7.30722 25.8958 7.70573 26.2943C8.10425 26.6928 8.64475 26.9167 9.20833 26.9167H11.849C12.2247 26.9167 12.5851 27.0659 12.8507 27.3316C13.1164 27.5973 13.2657 27.9576 13.2657 28.3333C13.2657 28.7091 13.1164 29.0694 12.8507 29.3351C12.5851 29.6007 12.2247 29.75 11.849 29.75H9.20833C7.8933 29.75 6.63213 29.2276 5.70226 28.2977C4.77239 27.3679 4.25 26.1067 4.25 24.7917V22.151C4.25 21.7753 4.39926 21.4149 4.66493 21.1493C4.93061 20.8836 5.29094 20.7343 5.66667 20.7343ZM28.3333 20.7343C28.7091 20.7343 29.0694 20.8836 29.3351 21.1493C29.6007 21.4149 29.75 21.7753 29.75 22.151V24.7917C29.75 26.1067 29.2276 27.3679 28.2977 28.2977C27.3679 29.2276 26.1067 29.75 24.7917 29.75H22.151C21.7753 29.75 21.4149 29.6007 21.1493 29.3351C20.8836 29.0694 20.7343 28.7091 20.7343 28.3333C20.7343 27.9576 20.8836 27.5973 21.1493 27.3316C21.4149 27.0659 21.7753 26.9167 22.151 26.9167H24.7917C25.3553 26.9167 25.8958 26.6928 26.2943 26.2943C26.6928 25.8958 26.9167 25.3553 26.9167 24.7917V22.151C26.9167 21.7753 27.0659 21.4149 27.3316 21.1493C27.5973 20.8836 27.9576 20.7343 28.3333 20.7343ZM14.1667 9.91667H9.91667V14.1667H14.1667V19.8333H9.91667V24.0833H14.1667V19.8333H19.8333V24.0833H24.0833V19.8333H19.8333V14.1667H24.0833V9.91667H19.8333V14.1667H14.1667V9.91667Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                {qrModal ? <QRModal handleClose={handleClose} /> : null}
            </div>
        </>
    );
}

export default TechTheme;