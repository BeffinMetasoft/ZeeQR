import React, { useContext, useState } from "react";
import "./EpicTheme.css";
import { MdReviews } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import Review from "../Common/reviewCards/Reviews";
import Downloads from "../Common/fileDownloadsCards/Downloads";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import Website from "../Common/websiteCards/Website";
import ProfileCard from "../Common/profileCards/ProfileCard";
import ContactCard1 from "../Common/contactCards/ContactCard1";
import ListSocialMedia from "../Common/socialMedia/ListSocialMedia";
import { SocialMediaValid, HighlightImageValid } from "../Common/DivValidation";
import QRModal from "../Common/qrModals/QRModal";
import { CardContext } from "../../store/CardContext";


function EpicTheme({ card,preview }) {
    const defaultBackgroundImage =
        "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";

    const [cardData] = useContext(CardContext)

    const {
       
        backgroundImage,
        website,
        review,
        fileName,
        files,
        checkPfCard,
    } = cardData

    // const [showResults, setShowResults] = useState(false);
    // const onClick = () => setShowResults(true);
    const handleClose = (e) => {
        setQrModal(false);
        // setShowResults(false);
    };



    const Textcolor =  card?.textColor ? card?.textColor : "#FFFFFF";
    const Iconcolor =  card?.iconBgColor ? card?.iconBgColor : "#FFFFFF";
    const BgColor = card?.bgColor ? card?.bgColor : "#000000";
    const Highlightcolor = card?.colorCode ? card?.colorCode : "#2D2D2D";
    const BtIColor = card?.btIconColor ? card?.btIconColor : "#000000";



    const SocialMediaImageCheck = SocialMediaValid();
    const HighlightImageCheck = HighlightImageValid();

    const [qrModal, setQrModal] = useState(false);
 


    // const [isExpanded, setIsExpanded] = useState(false);
    const [contactExpand, setContactExpand] = useState(false);
    console.log("contactExpand", contactExpand);
    const [socialMediaExpand, setSocialMediaExpand] = useState(false);

    const [websiteExpand, setWebsiteExpand] = useState(false);
    const [reviewExpand, setReviewExpand] = useState(false);
    const [downloadsExpand, setDownloadsExpand] = useState(false);
    const [galleryExpand, setGalleryExpand] = useState(false);
    const [videoExpand, setVideoExpand] = useState(false);
    // const { Panel } = Collapse;

    const toggleSection1 = () => {
        setContactExpand(!contactExpand);
    };

    const toggleSection2 = () => {
        setSocialMediaExpand(!socialMediaExpand);
    };
    const toggleSection3 = () => {
        setWebsiteExpand(!websiteExpand);
    };

    const toggleSection4 = () => {
        setReviewExpand(!reviewExpand);
    };
    const toggleSection5 = () => {
        setDownloadsExpand(!downloadsExpand);
    };
    const toggleSection6 = () => {
        setGalleryExpand(!galleryExpand);
    };

    // useEffect(()=>{
    //     if (!preview) {
    //         toggleSection1()
    //     }
    // },[])


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
                fill={Textcolor}
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
                fill={Textcolor}
            />
        </svg>
    );

    const phone = (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="white"
            />
        </svg>
    );

    const headling = (
        <span className="flex">
            {phone}
            <p className="text-white ml-2">Contact Info</p>
        </span>
    );





    return (
        <>
            <div className="min-h-screen w-full" >
                <section className="previewWrapdigital min-h-screen  h-full relative"
                    style={{
                        backgroundColor: `${BgColor}`,
                    }}
                >
                    {/* <div className="h-full relative"> */}



                    <div className="bannerImagedigital absolute">
                        {backgroundImage ? (
                            <img
                                src={backgroundImage}
                                alt=""
                            />
                        ) : (
                            <img src={defaultBackgroundImage} alt="" />
                        )}
                    </div>
                    <div
                        className="previewContainerdigital"
                    // style={{ color: `${color === "black" ? "white" : "black"}` }}

                    >

                        <div className="header">
                            {/* <img src={logo} alt="logo zeeqr" /> */}
                            {/* <Link className="btn" to={"https://zeeqr.co/"} target="_blank">Get your card</Link> */}
                        </div>

                        {checkPfCard ? (
                            
                            <ProfileCard Highlightcolor={Highlightcolor} Textcolor={Textcolor} />
                        ) : (
                            ""
                        )}

                        <div >
                            <div
                                className="w-full items-center h-full text-white  p-[8px] flex items-center rounded-[12px] justify-between"
                                style={{
                                    backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                                }}
                            >
                                <div className="w-full">
                                    <details className="flex w-full items-center justify-between"   >
                                        <summary className="flex pr-4  items-center justify-between cursor-pointer" onClick={toggleSection1}>
                                            <div className="py-2 flex items-center ">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[40px]"
                                                >
                                                    <path
                                                        d="M3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3M12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6ZM0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2Z"
                                                        fill={Textcolor}
                                                    />
                                                </svg>
                                                <p
                                                    className="w-[240px]  m-0 "
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}

                                                >
                                                    CONTACT info
                                                </p>
                                            </div>
                                            <div >
                                                {contactExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>

                                        {contactExpand && (
                                           
                                            <ContactCard1 preview={preview} Textcolor={Textcolor} Iconcolor={Iconcolor} BtIColor={BtIColor} />
                                        )}

                                    </details>
                                </div>
                            </div>
                        </div>

                        {/* --------------------------------- social ---------------------------------  */}
                        {SocialMediaImageCheck ? (
                            <div className="mt-5">
                                <div
                                    className="  w-full   h-full text-white p-[8px]  flex rounded-[12px] justify-between"
                                    style={{
                                        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                                    }}
                                    onClick={toggleSection2}
                                >
                                    <details className="flex items-center w-full justify-between text-black">
                                        <summary className="flex pr-4 items-center justify-between ">
                                            <div className="  flex py-2  items-center ">
                                                <svg
                                                    width="24"
                                                    height="20"
                                                    viewBox="0 0 26 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[40px]"
                                                >
                                                    <g clip-path="url(#clip0_9_43)">
                                                        <path
                                                            d="M22.7656 3.14996C22.497 2.98314 22.1898 2.88221 21.871 2.85605C21.5523 2.8299 21.2317 2.87932 20.9375 2.99996L11.2969 6.64496C11.0686 6.73414 10.8245 6.77998 10.5781 6.77996H4.40625C3.88825 6.77996 3.39146 6.97751 3.02518 7.32914C2.6589 7.68077 2.45312 8.15768 2.45312 8.65496V8.80496H0.5V13.305H2.45312V13.5C2.46536 13.9894 2.67653 14.4548 3.04149 14.7968C3.40646 15.1388 3.89627 15.3301 4.40625 15.33L6.75 20.1C6.9087 20.4212 7.15856 20.6929 7.47088 20.8839C7.78319 21.075 8.14531 21.1776 8.51562 21.18H9.5C10.0153 21.176 10.5081 20.9767 10.871 20.6255C11.2339 20.2743 11.4375 19.7997 11.4375 19.305V15.51L20.9375 19.155C21.1712 19.2442 21.4204 19.29 21.6719 19.29C22.062 19.2839 22.442 19.1693 22.7656 18.96C23.0226 18.7934 23.2346 18.5705 23.384 18.3096C23.5335 18.0488 23.6161 17.7575 23.625 17.46V4.69496C23.6236 4.38974 23.5445 4.08946 23.3948 3.82021C23.245 3.55097 23.029 3.32089 22.7656 3.14996ZM9.48437 8.65496V13.5H4.40625V8.65496H9.48437ZM9.48437 19.305H8.5L6.57812 15.33H9.48437V19.305ZM12.0156 13.725C11.8301 13.6339 11.6367 13.5587 11.4375 13.5V8.54996C11.6348 8.51089 11.8282 8.45569 12.0156 8.38496L21.6719 4.69496V17.415L12.0156 13.725ZM23.6719 9.17996V12.93C24.1899 12.93 24.6867 12.7324 25.0529 12.3808C25.4192 12.0292 25.625 11.5522 25.625 11.055C25.625 10.5577 25.4192 10.0808 25.0529 9.72914C24.6867 9.37751 24.1899 9.17996 23.6719 9.17996Z"
                                                            fill={Textcolor}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9_43">
                                                            <rect
                                                                width="25"
                                                                height="24"
                                                                fill="white"
                                                                transform="translate(0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <p
                                                    className="w-[240px]  m-0"
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}

                                                >
                                                    {" "}
                                                    Socials
                                                </p>
                                            </div>
                                            <div>
                                                {socialMediaExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>

                                        {/*  --------------------------------- social media --------------------------------- */}

                                        {socialMediaExpand && (

                                            // <SocialMedia data={data} />
                                            <ListSocialMedia preview={preview} />
                                        )}
                                    </details>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {/* ------------------Webiste_Area--------------------------------------------------------- */}
                        {website[0]?.websiteName ? (
                            <div className="mt-5">
                                <div
                                    className="  w-full   h-full text-white   p-[8px] flex rounded-[12px] justify-between"
                                    style={{
                                        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                                    }}
                                    onClick={toggleSection3}
                                >
                                    <details className="flex justify-between w-full items-center">
                                        <summary className="flex pr-4  items-center justify-between">
                                            <div className="py-2  flex items-center">
                                                {/* <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[40px]"
                                                >
                                                    <path
                                                        d="M11 17H7C5.61667 17 4.43733 16.5123 3.462 15.537C2.48667 14.5617 1.99933 13.3827 2 12C2 10.6167 2.48767 9.43733 3.463 8.462C4.43833 7.48667 5.61733 6.99933 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5627 7.48767 20.538 8.463C21.5133 9.43833 22.0007 10.6173 22 12C22 13.3833 21.5123 14.5627 20.537 15.538C19.5617 16.5133 18.3827 17.0007 17 17H13Z"
                                                        fill={Textcolor}
                                                    />
                                                </svg> */}
                                                <IoLinkSharp color={Textcolor} size={20} className="w-[40px]" />
                                                <p
                                                    className="w-[240px] m-0"
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}

                                                >
                                                    Website
                                                </p>
                                            </div>
                                            <div>
                                                {websiteExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>

                                        {websiteExpand &&
                                            <Website website={website} preview={preview} />
                                        }
                                    </details>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* ------------------Webiste_Area Ends--------------------------------------------------------- */}

                        {/* ------------------Review_Area--------------------------------------------------------- */}
                        {review[0]?.reviewName ? (
                            <div className="mt-5">
                                <div
                                    className="  w-full   h-full text-white   p-[8px] flex rounded-[12px] justify-between"
                                    style={{
                                        backgroundColor: `${Highlightcolor}`,
                                    }}
                                >
                                    <details className="flex justify-between w-full items-center">
                                        <summary className="flex pr-4  items-center justify-between">
                                            <div className="py-2 flex items-center">
                                                <MdReviews color={Textcolor} size={20} className="w-[40px]" />
                                                <p
                                                    className="w-[240px] m-0 "
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}
                                                    onClick={toggleSection4}
                                                >
                                                    Review
                                                </p>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setReviewExpand(!reviewExpand);
                                                }}
                                            >
                                                {reviewExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>

                                        {/* <ReviewSection review={review} /> */}
                                        <Review review={review} preview={preview} />


                                    </details>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}


                        {/* ------------------Downloads_Area--------------------------------------------------------- */}

                        {fileName?.fileName1 || fileName?.fileName2 || fileName?.fileName3 || fileName?.fileName4 ? (
                            <div className="mt-5">
                                <div
                                    className="  w-full   h-full text-white   p-[8px] flex rounded-[12px] justify-between"
                                    style={{
                                        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                                    }}
                                    onClick={toggleSection5}
                                >
                                    <details className="flex justify-between w-full items-center">
                                        <summary className="flex pr-4  items-center justify-between">
                                            <div className=" py-2 flex items-center">
                                                <FaFileDownload color={Textcolor} size={20} className="w-[40px]" />
                                                <p
                                                    className="w-[240px] m-0 "
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}

                                                >
                                                    Downloads
                                                </p>
                                            </div>
                                            <div>
                                                {websiteExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>
                                        {/* <DownloadsSection files={files} fileName={fileName} /> */}
                                        <Downloads files={files} fileName={fileName} preview={preview} />


                                    </details>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* ------------------Files_Area Ends--------------------------------------------------------- */}


                        {HighlightImageCheck ?
                            <div className="mt-5">
                                <div
                                    className="  w-full  h-full text-white p-[8px]   flex rounded-[12px] justify-between"
                                    style={{
                                        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                                    }}
                                    onClick={toggleSection6}
                                >
                                    <details className="flex justify-between w-full items-center">
                                        <summary className="flex pr-4  items-center justify-between">
                                            <div className="py-2 items-center flex ">
                                                <svg
                                                    width="20"
                                                    height="18"
                                                    viewBox="0 0 21 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-[40px]"
                                                >
                                                    <g clip-path="url(#clip0_156_27)">
                                                        <path
                                                            d="M2.25 20.75L18.75 20.75C19.5784 20.75 20.25 20.0784 20.25 19.25L20.25 2.75C20.25 1.92157 19.5784 1.25 18.75 1.25L2.25 1.25C1.42157 1.25 0.75 1.92157 0.75 2.75L0.75 19.25C0.75 20.0784 1.42157 20.75 2.25 20.75Z"
                                                            stroke={Textcolor}
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M0.75 16.9999H20.25M5.76 16.9999L13.575 9.67994C13.7098 9.56769 13.8796 9.50623 14.055 9.50623C14.2304 9.50623 14.4002 9.56769 14.535 9.67994L20.25 13.7749"
                                                            stroke={Textcolor}
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M6.75 9.5C7.99264 9.5 9 8.49264 9 7.25C9 6.00736 7.99264 5 6.75 5C5.50736 5 4.5 6.00736 4.5 7.25C4.5 8.49264 5.50736 9.5 6.75 9.5Z"
                                                            stroke={Textcolor}
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_156_27">
                                                            <rect
                                                                width="21"
                                                                height="21"
                                                                fill={Textcolor}
                                                                transform="translate(0 0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {/* <GrGallery color={Textcolor} size={20} className="w-[40px]" /> */}

                                                <p
                                                    className="w-[240px]  m-0 "
                                                    style={{
                                                        color: `${Textcolor}`,
                                                    }}

                                                >
                                                    {" "}
                                                    Gallery{" "}
                                                </p>
                                            </div>

                                            <div>
                                                {galleryExpand ? downArrow : rightArrow}
                                            </div>
                                        </summary>
                                        {galleryExpand && (
                                            <div>
                                                <HighlightImage />
                                            </div>
                                        )}
                                    </details>
                                </div>
                            </div>
                            : ""

                        }

                        {preview ? (
                            <div className="flex justify-center gap-[20px] fixed top-[90%] items-center left-[36%] lg:left-[45%]   ">
                                <button
                                    onClick={handleShare}
                                    className="w-[50px] h-[50px] p-[10px] rounded-[12px]   "
                                    style={{
                                        backgroundColor: `${Iconcolor}`,
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22Z"
                                            fill={BtIColor}
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setQrModal(true)}
                                    className="w-[50px] h-[50px] p-[10px] rounded-[12px] bg-white "
                                    style={{
                                        backgroundColor: `${Iconcolor}`,
                                    }}
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
                                            fill={BtIColor}
                                        />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            ""
                        )}

                    </div>
                    
                    {qrModal ? <QRModal handleClose={handleClose} Highlightcolor={Highlightcolor} Textcolor={Textcolor} Iconcolor={Iconcolor} BtIColor={BtIColor} /> : null}

                </section>
            </div>
        </>
    );
}

export default EpicTheme;