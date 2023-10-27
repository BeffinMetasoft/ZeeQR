import React, { useContext, useEffect, useState } from "react";
import "./AntiqueTheme.css";
import { Link } from "react-router-dom";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import Website from "../Common/websiteCards/Website";
import QRModal from "../Common/QRModal";
import Downloads from "../Common/fileDownloadsCards/Downloads";
import Review from "../Common/reviewCards/Reviews";
import { IoLinkSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import ContactCard1 from "../Common/contactCards/ContactCard1";
import ListSocialMedia from "../Common/socialMedia/ListSocialMedia";
import { HighlightImageValid, SocialMediaValid } from "../Common/DivValidation";
import { UserOutlined } from '@ant-design/icons';
import { CardContext } from "../../store/CardContext";


const defaultBackgroundImage = "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage = "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function AntiqueTheme({ card, preview }) {

    const [cardData] = useContext(CardContext)


    // const backgroundImage = card?.backgroundImage
    // const bgImg = card?.bgImg
    // const bgImgType = card?.bgImgType
    // const bgImgRepeat = card?.bgImgRepeat
    // const profileImage = card?.profileImage
    // const companyLogo = card?.companyLogo
    // const personalDetails = {
    //     name: card?.name,
    //     companyDesignation: card?.companyDesignation,
    //     companyName: card?.companyName,
    //     about: card?.about,
    //     aboutHeadline: card?.aboutHeadline,
    //     phone: card?.phone,
    //     secondaryPhone: card?.secondaryPhone,
    //     email: card?.email,
    //     secondaryEmail: card?.secondaryEmail,
    // }
    // const websiteDetails = {
    //     websiteName: card?.websiteName,
    //       websiteUrl: card?.websiteUrl,
    // }
    // const website = card?.website
    // const review = card?.reviews
    // const contactDetails = {
    //     address: card?.address,
    //     state: card?.state,
    //     country: card?.country,
    //     locationUrl: card?.locationUrl,
    // }
    // const websiteImage = card?.websiteImage
    // const fileName = {
    //     fileName1: card?.files?.file1?.fileName,
    //     fileName2: card?.files?.file2?.fileName,
    //     fileName3: card?.files?.file3?.fileName,
    //     fileName4: card?.files?.file4?.fileName,

    // }
    // const files = {
    //     file1: card?.files?.file1?.fileUrl,
    //     file2: card?.files?.file2?.fileUrl,
    //     file3: card?.files?.file3?.fileUrl,
    //     file4: card?.files?.file4?.fileUrl,
    // }
    // const vCard = card?.vCard
    // const QRCode = card?.QRCode
    // const checkProfile = card?.checkProfile
    // const checkPfCard = card?.checkPfCard
    // const checkLogo = card?.checkLogo
    // const checkHighlight = card?.checkHighlight
    // const SMediaPostion = card?.SMediaPostion

    const {
        backgroundImage,
        profileImage,
        personalDetails,
        website,
        review,
        contactDetails,
        fileName,
        files,
        vCard,
        checkProfile,
        checkPfCard,
    } =cardData

    // const Highlightcolor = card?.colorCode ? card?.colorCode : "";
    const Textcolor = card?.textColor ? card?.textColor : "#000000";;
    const Iconcolor = card?.iconBgColor ? card?.iconBgColor : "#000000";
    // const BgColor = card?.bgColor ? card?.bgColor : "";
    const BtIColor = card?.btIconColor ? card?.btIconColor : "#FFFFFF";

    const [section1Open, setSection1Open] = useState(false);
    const [section2Open, setSection2Open] = useState(false);
    const [section3Open, setSection3Open] = useState(false);
    const [section4Open, setSection4Open] = useState(false);
    const [section5Open, setSection5Open] = useState(false);
    const [reviewSection, setReviewSection] = useState(false);
    const [downloadSection, setDownloadSection] = useState(false);

    const toggleSection1 = () => {
        setSection1Open(!section1Open);
    };

    const toggleSection2 = () => {
        setSection2Open(!section2Open);
    };
    const toggleSection3 = () => {
        setSection3Open(!section3Open);
    };

    const toggleSection4 = () => {
        setSection4Open(!section4Open);
    };
    const toggleSection5 = () => {
        setSection5Open(!section5Open);
    };
    const toggleSection6 = () => {
        setReviewSection(!reviewSection);
    };
    const toggleSection7 = () => {
        setDownloadSection(!downloadSection);
    };
    useEffect(() => {
        if (!preview) {
            toggleSection2()
        }
    }, [])





    const [qrModal, setQrModal] = useState(false);
    const SocialMediaImageCheck = SocialMediaValid();
    const HighlightImageCheck = HighlightImageValid();




    const handleClose = (e) => {
        setQrModal(false);
    };




    const rightArrow = (
        <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.36146 6.76349C8.55674 6.95883 8.66644 7.22373 8.66644 7.49994C8.66644 7.77616 8.55674 8.04106 8.36146 8.2364L2.46875 14.1291C2.37266 14.2286 2.25772 14.308 2.13063 14.3626C2.00354 14.4171 1.86686 14.4459 1.72854 14.4471C1.59023 14.4483 1.45307 14.4219 1.32505 14.3696C1.19703 14.3172 1.08073 14.2398 0.982923 14.142C0.885118 14.0442 0.807771 13.9279 0.755395 13.7999C0.703019 13.6719 0.676663 13.5347 0.677865 13.3964C0.679067 13.2581 0.707803 13.1214 0.762396 12.9943C0.816988 12.8672 0.896344 12.7523 0.995834 12.6562L6.15208 7.49994L0.995834 2.34369C0.806086 2.14723 0.701092 1.88411 0.703465 1.61098C0.705839 1.33786 0.81539 1.0766 1.00852 0.883466C1.20166 0.690333 1.46292 0.580782 1.73604 0.578409C2.00916 0.576035 2.27229 0.681029 2.46875 0.870777L8.36146 6.76349Z"
                fill={Iconcolor}
            />
        </svg>
    );

    const downArrow = (
        <svg
            width="15"
            height="18"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.23645 8.36143C8.04111 8.55671 7.77621 8.66641 7.49999 8.66641C7.22378 8.66641 6.95888 8.55671 6.76354 8.36143L0.870828 2.46872C0.771337 2.37263 0.69198 2.25769 0.637387 2.1306C0.582795 2.00351 0.55406 1.86682 0.552858 1.72851C0.551657 1.5902 0.578012 1.45304 0.630388 1.32502C0.682764 1.197 0.760112 1.0807 0.857917 0.982892C0.955722 0.885087 1.07202 0.80774 1.20004 0.755364C1.32806 0.702988 1.46523 0.676632 1.60354 0.677834C1.74185 0.679036 1.87854 0.707772 2.00562 0.762365C2.13271 0.816957 2.24765 0.896313 2.34374 0.995803L7.49999 6.15205L12.6562 0.995804C12.8527 0.806056 13.1158 0.701062 13.389 0.703435C13.6621 0.705808 13.9233 0.815359 14.1165 1.00849C14.3096 1.20163 14.4192 1.46289 14.4215 1.73601C14.4239 2.00913 14.3189 2.27226 14.1292 2.46872L8.23645 8.36143Z"
                fill={Iconcolor}
            />
        </svg>
    );

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





    return (
        <div className="previewWrapantique">
            <div className="relative">
                <div className="bannerImageantique">
                    {backgroundImage ? (
                        <img
                            src={backgroundImage}
                            alt=""
                        />
                    ) : (
                        <img src={defaultBackgroundImage} alt="" />
                    )}
                </div>
                {checkPfCard ? (
                    <div className="flex items-center m-auto justify-center ">
                        <div className="absolute top-10">
                            {checkProfile ? (
                                <div className=" border border-2 border-none  m-[20px] rounded-[50%]">
                                    {profileImage ? (
                                        <img
                                            src={profileImage}
                                            alt=""
                                            className="w-[150px] h-[150px] border border-2 border-none  m-[20px] rounded-[50%]"
                                        />
                                    ) : (
                                        <img src={defaultProfileImage} alt="" className="w-[150px] h-[150px] border border-2 border-none  m-[20px] rounded-[50%]" />
                                    )}
                                </div>
                            ) : (
                                ""
                            )}

                        </div>
                        <div className="absolute bottom-[45px]">
                            <p className="text-center tracking-normal text-white m-0 text-[24px] font-bold ">
                                {personalDetails?.name ? personalDetails.name : ""}
                            </p>

                            <p className=" text-[12px] font-normal text-white mt-2 text-center">
                                {personalDetails?.companyDesignation
                                    ? personalDetails.companyDesignation
                                    : ""}
                            </p>

                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="absolute top-[280px]">

                <div className="">
                    <svg
                        width="100%"
                        height="115"
                        viewBox="0 0 393 115"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_193_93)">
                            <path
                                d="M178.5 76.0017C31 72.7247 94 -1.99827 -108 23.0017L-58.5 668.001H394L594 246C594 209 554.5 31.5013 353.5 0.500583C287.5 -9.67875 227 77.0792 178.5 76.0017Z"
                                fill="#A5A5A5"
                            />
                            <path
                                d="M172 67.5002C107.5 90.0002 91.5 4.00016 0 57.5002V665.5H403V32.5001C396.833 36.6668 372.3 42.5001 323.5 32.5001C262.5 20.0001 236.5 45.0002 172 67.5002Z"
                                fill="#D9D9D9"
                            />
                            <path
                                d="M241.594 62.7784C180.857 75.2726 116.391 14.3006 -20 62.7784V669H427V62.7784C421.672 51.2836 404.091 26.9947 376.386 21.7971C341.756 15.3001 302.33 50.2841 241.594 62.7784Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_193_93">
                                <rect width="393" height="115" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="mb-16">
                    {personalDetails?.about ?
                        <div className=" border-b border-[#EBEBEB]   p-4 ">
                            <div
                                className="flex justify-between cursor-pointer"
                                onClick={toggleSection1}
                            >
                                <div className="flex gap-3 items-center">
                                    <div className="flex w-8 h-8 border items-center border-2 border flex justify-items-center  border rounded-[50%]">
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                className="w-[30px] h-[30px] rounded-full"
                                                alt="profileimgteme4"
                                            ></img>
                                        ) : (
                                            // <img src={defaultProfileImage} alt="" className="w-[30px] h-[30px] rounded-full" />
                                            <UserOutlined className="m-auto" />
                                        )}
                                    </div>
                                    <span className="font-medium text-lg text-left p-0 text-[#5A5A5A] leading-[15px]">
                                        About me
                                    </span>{" "}
                                </div>
                                <div>
                                    {section1Open ? downArrow : rightArrow}
                                </div>
                            </div>
                            {section1Open && (
                                <div className="mt-4">
                                    <p className="text-[16px] font-semibold leadning-[21px] text-left text-[#5A5A5A]">
                                        Bio
                                    </p>
                                    <p className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">
                                        {personalDetails?.about}
                                    </p>
                                </div>
                            )}
                        </div>
                        : ''
                    }

                    <div className=" border-b border-[#EBEBEB]   p-4 ">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={toggleSection2}
                        >
                            <div className="flex gap-3 items-center ">
                                <div className="flex w-8 h-8 border items-center border-2 border flex justify-items-center  border rounded-[50%]">
                                    <svg className="m-auto"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.86167 5.29417C3.70167 6.945 5.055 8.2925 6.70583 9.13833L7.98917 7.855C8.14667 7.6975 8.38 7.645 8.58417 7.715C9.2375 7.93083 9.94333 8.0475 10.6667 8.0475C10.9875 8.0475 11.25 8.31 11.25 8.63083V10.6667C11.25 10.9875 10.9875 11.25 10.6667 11.25C5.18917 11.25 0.75 6.81083 0.75 1.33333C0.75 1.0125 1.0125 0.75 1.33333 0.75H3.375C3.69583 0.75 3.95833 1.0125 3.95833 1.33333C3.95833 2.0625 4.075 2.7625 4.29083 3.41583C4.355 3.62 4.30833 3.8475 4.145 4.01083L2.86167 5.29417Z"
                                            fill="#5A5A5A"
                                        />
                                    </svg>
                                </div>
                                <span className="font-medium text-left text-lg text-[#5A5A5A] leading-[15px]">
                                    Contact Info
                                </span>{" "}
                            </div>
                            <div> {section2Open ? downArrow : rightArrow}
                            </div>
                        </div>
                        {section2Open && (
                            
                            <ContactCard1 preview={preview} Textcolor={Textcolor} Iconcolor={Iconcolor} BtIColor={BtIColor}  />

                        )}
                    </div>
                    {SocialMediaImageCheck ? (
                        <div className=" border-b border-[#EBEBEB]   p-4 ">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={toggleSection3}
                            >
                                <div className="flex gap-3 items-center ">
                                    <div className="flex w-8 h-8 items-center border border-2 border flex justify-items-center  border rounded-[50%]">
                                        <svg className="m-auto"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 14 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4687 0.83753C12.3183 0.740214 12.1463 0.68134 11.9678 0.666083C11.7893 0.650826 11.6098 0.679653 11.445 0.75003L6.04625 2.87628C5.91843 2.9283 5.78174 2.95504 5.64375 2.95503H2.1875C1.89742 2.95503 1.61922 3.07026 1.4141 3.27538C1.20898 3.4805 1.09375 3.7587 1.09375 4.04878V4.13628H0V6.76128H1.09375V6.87503C1.1006 7.16054 1.21886 7.43204 1.42324 7.63151C1.62762 7.83099 1.90191 7.94261 2.1875 7.94253L3.5 10.725C3.58887 10.9124 3.72879 11.0709 3.90369 11.1824C4.07859 11.2938 4.28137 11.3536 4.48875 11.355H5.04C5.32856 11.3527 5.60452 11.2365 5.80775 11.0316C6.01098 10.8267 6.12501 10.5499 6.125 10.2613V8.04753L11.445 10.1738C11.5759 10.2259 11.7154 10.2526 11.8562 10.2525C12.0747 10.249 12.2875 10.1821 12.4687 10.06C12.6127 9.96286 12.7314 9.83282 12.8151 9.68066C12.8987 9.5285 12.945 9.35861 12.95 9.18503V1.73878C12.9492 1.56073 12.9049 1.38557 12.8211 1.22851C12.7372 1.07145 12.6163 0.937236 12.4687 0.83753ZM5.03125 4.04878V6.87503H2.1875V4.04878H5.03125ZM5.03125 10.2613H4.48L3.40375 7.94253H5.03125V10.2613ZM6.44875 7.00628C6.34486 6.95319 6.23653 6.90927 6.125 6.87503V3.98753C6.23546 3.96474 6.34378 3.93254 6.44875 3.89128L11.8562 1.73878V9.15878L6.44875 7.00628ZM12.9762 4.35503V6.54253C13.2663 6.54253 13.5445 6.4273 13.7496 6.22218C13.9548 6.01706 14.07 5.73886 14.07 5.44878C14.07 5.1587 13.9548 4.8805 13.7496 4.67538C13.5445 4.47026 13.2663 4.35503 12.9762 4.35503Z"
                                                fill="#5A5A5A"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-left text-lg text-[#5A5A5A] leading-[15px]">
                                        Socials
                                    </span>{" "}
                                </div>
                                <div>
                                    {section3Open ? downArrow : rightArrow}
                                </div>
                            </div>
                            {section3Open && (
                                // <SocialMedia data={data} />
                                <ListSocialMedia preview={preview} theme={'antique'}  />
                            )}
                        </div>
                    ) : (
                        ""
                    )}

                    {website[0]?.websiteName ? (
                        <div className=" border-b border-[#EBEBEB]   p-4 ">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={toggleSection4}
                            >
                                <div className="flex gap-3 items-center ">
                                    <div className="flex w-8 h-8 items-center border border-2 border flex justify-items-center  border rounded-[50%]">

                                        <IoLinkSharp color={'#5A5A5A'} className="m-auto text-base" />

                                    </div>
                                    <span className="font-medium text-left text-lg text-[#5A5A5A] leading-[15px]">
                                        Website
                                    </span>{" "}
                                </div>
                                <div
                                >
                                    {section4Open ? downArrow : rightArrow}
                                </div>
                            </div>

                            {section4Open &&
                                <Website website={website} preview={preview} theme={'antique'} />
                            }
                        </div>

                    ) : (
                        ""
                    )}


                    {/*  ------------------------- Review section ------------------------  */}

                    {review[0]?.reviewName ? (
                        <div className=" border-b border-[#EBEBEB]   p-4 ">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={toggleSection6}
                            >
                                <div className="flex gap-3 items-center ">
                                    <div className="flex items-center w-8 h-8 border border-2 border flex justify-items-center  border rounded-[50%]">

                                        <MdReviews color={'#5A5A5A'} className="w-[20px] m-auto" />
                                    </div>
                                    <span className="font-medium text-left  text-[#5A5A5A] leading-[15px]">
                                        Review
                                    </span>{" "}
                                </div>
                                <div
                                >
                                    {reviewSection ? downArrow : rightArrow}
                                </div>
                            </div>

                            {reviewSection &&
                                <Review review={review} preview={preview} theme={'antique'} />
                            }
                        </div>

                    ) : (
                        ""
                    )}
                    {/*  ------------------------- download section ------------------------  */}
                    {fileName?.fileName1 || fileName?.fileName2 || fileName?.fileName3 || fileName?.fileName4 ? (
                        <div className=" border-b border-[#EBEBEB]   p-4 ">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={toggleSection7}
                            >
                                <div className="flex gap-3 items-center ">
                                    <div className="flex items-center w-8 h-8 border border-2 border flex justify-items-center  border rounded-[50%]">

                                        <FaFileDownload color={'#5A5A5A'} className="w-[20px] m-auto" />
                                    </div>
                                    <span className="font-medium text-left  text-[#5A5A5A] leading-[15px]">
                                        Downloads
                                    </span>{" "}
                                </div>
                                <div
                                >
                                    {downloadSection ? downArrow : rightArrow}
                                </div>
                            </div>

                            {downloadSection &&
                                <Downloads fileName={fileName} files={files} preview={preview} theme={'antique'} />
                            }
                        </div>

                    ) : (
                        ""
                    )}

                    {/*  ------------------------- highlight image section ------------------------  */}

                    {HighlightImageCheck ? (
                            <div className=" border-b border-[#EBEBEB]   p-4 ">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={toggleSection5}
                                >
                                    <div className="flex gap-3">
                                        <div className=" border border-2 border flex   border rounded-[50%]">
                                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_213_1088)">
                                                    <path d="M10.5 4.66667C10.5 4.97609 10.3771 5.27283 10.1583 5.49162C9.93952 5.71042 9.64277 5.83333 9.33335 5.83333C9.02393 5.83333 8.72719 5.71042 8.5084 5.49162C8.2896 5.27283 8.16669 4.97609 8.16669 4.66667C8.16669 4.35725 8.2896 4.0605 8.5084 3.84171C8.72719 3.62292 9.02393 3.5 9.33335 3.5C9.64277 3.5 9.93952 3.62292 10.1583 3.84171C10.3771 4.0605 10.5 4.35725 10.5 4.66667Z" fill="#5A5A5A" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96676 0.729004H7.03326C8.38017 0.729004 9.43542 0.729004 10.2591 0.839837C11.1014 0.953004 11.7664 1.18984 12.2885 1.71134C12.8106 2.23342 13.0468 2.89842 13.16 3.74134C13.2708 4.56442 13.2708 5.61967 13.2708 6.96659V7.01792C13.2708 8.1315 13.2708 9.04267 13.2102 9.78467C13.1495 10.5313 13.0253 11.1538 12.7464 11.6718C12.6239 11.8998 12.4723 12.1046 12.2885 12.2883C11.7664 12.8104 11.1014 13.0467 10.2585 13.1598C9.43542 13.2707 8.38017 13.2707 7.03326 13.2707H6.96676C5.61984 13.2707 4.56459 13.2707 3.74092 13.1598C2.89859 13.0467 2.23359 12.8098 1.71151 12.2883C1.24892 11.8258 1.00976 11.25 0.883172 10.5348C0.757755 9.83309 0.735005 8.95984 0.730338 7.876C0.729172 7.60009 0.729172 7.30842 0.729172 7.00042V6.96659C0.729172 5.61967 0.729172 4.56442 0.840005 3.74075C0.953172 2.89842 1.19001 2.23342 1.71151 1.71134C2.23359 1.18925 2.89859 0.953004 3.74151 0.839837C4.56459 0.729004 5.61984 0.729004 6.96676 0.729004ZM3.85759 1.70667C3.11209 1.807 2.66234 1.99834 2.33042 2.33025C1.99792 2.66275 1.80717 3.11192 1.70684 3.858C1.60534 4.61634 1.60417 5.61267 1.60417 6.99984V7.49217L2.18809 6.98059C2.44429 6.75646 2.7761 6.63809 3.11631 6.64947C3.45651 6.66084 3.77968 6.8011 4.02034 7.04184L6.52284 9.54434C6.71703 9.73849 6.97349 9.85793 7.24708 9.88161C7.52066 9.9053 7.79383 9.83173 8.01851 9.67384L8.19234 9.55134C8.51649 9.32357 8.90833 9.21252 9.30379 9.23636C9.69924 9.2602 10.0749 9.41752 10.3693 9.68259L12.0202 11.1683C12.187 10.8195 12.2856 10.361 12.3381 9.71409C12.3953 9.01117 12.3958 8.135 12.3958 6.99984C12.3958 5.61267 12.3947 4.61634 12.2932 3.858C12.1928 3.11192 12.0015 2.66217 11.6696 2.32967C11.3371 1.99775 10.8879 1.807 10.1418 1.70667C9.38351 1.60517 8.38717 1.604 7.00001 1.604C5.61284 1.604 4.61592 1.60517 3.85759 1.70667Z" fill="#5A5A5A" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_213_1088">
                                                        <rect width="14" height="14" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                        <span className="font-medium text-left  text-[#5A5A5A] leading-[15px]">
                                            Media
                                        </span>{" "}
                                    </div>
                                    <div
                                    >
                                        {section5Open ? downArrow : rightArrow}
                                    </div>
                                </div>
                                {section5Open && (
                                    <div>
                                        <div className=' mt-5  gap-2 items-center'>
                                            <HighlightImage />
                                        </div>

                                    </div>
                                )}
                            </div>
                      
                    ) : (
                        ""
                    )}
                </div>

                {preview ? (
                    <div className="flex justify-center gap-[20px] fixed top-[90%]  items-center lg:left-[41%] left-[30%] ">
                        <Link className="" to={`${preview ? vCard : ''}`}>
                            <button className="w-[50px] h-[50px] p-[15px] rounded-[12px]  bg-white">
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
                        {contactDetails?.locationUrl ? (
                            <Link to={`${preview ? contactDetails?.locationUrl : ""}`}
                                target={`${preview ? "_blank" : ""}`}
                            >
                                <button className="w-[50px] h-[50px] p-[10px] rounded-[12px] bg-white">
                                    <div className="flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2463 3.36842C18.6355 2.35759 17.6421 1.36426 16.6313 1.75342L2.46798 7.20009C1.33465 7.63509 1.42465 9.26676 2.59798 9.57509L8.44048 11.1126C8.54764 11.1407 8.6454 11.1968 8.72374 11.2752C8.80208 11.3535 8.85819 11.4513 8.88631 11.5584L10.4238 17.4001C10.7321 18.5743 12.3638 18.6634 12.7988 17.5309L18.2463 3.36842Z" fill="black" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        ) : (
                            ""
                        )}
                        <button className="w-[50px] h-[50px] p-[10px] rounded-[12px] bg-white" onClick={() => setQrModal(true)} >
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
                        <button className="w-[50px] h-[50px] p-[10px] rounded-[12px] bg-white" onClick={handleShare}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z" fill="black" />
                            </svg>

                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
            {qrModal ? <QRModal handleClose={handleClose} /> : null}

        </div >
    );
}

export default AntiqueTheme;