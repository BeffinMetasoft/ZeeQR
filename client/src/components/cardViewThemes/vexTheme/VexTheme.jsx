import React, { useContext, useState } from "react";
import "./VexTheme.css";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import { HighlightImageValid, SocialMediaValid } from "../Common/DivValidation";
import {
  defaultBackgroundImage,
  defaultProfileImage,
} from "../Common/DefaultImage";
import VerticalSlideSM from "../Common/socialMedia/VerticalSlideSM";
import { Link } from "react-router-dom";
import QRModal from "../Common/QRModal";
import WebsiteBasic from "../Common/websiteCards/WebsiteBasic";
import ReviewCardBasic from "../Common/reviewCards/ReviewCardBasic";
import DownloadBasic from "../Common/fileDownloadsCards/DownloadBasic";
import { CardContext } from "../../store/CardContext";

function VexTheme({ preview }) {
  const [cardData] = useContext(CardContext)

  const {
    profileImage,
    backgroundImage,
    personalDetails,
    checkProfile,
    contactDetails,
    website,
    review,
    fileName,
    file1,
    file2,
    file3,
    file4,
    SMediaPostion,
    companyLogo,
    checkLogo,
    vCard
  } = cardData

  const files = {
    file1: file1,
    file2: file2,
    file3: file3,
    file4: file4,
  };

  const HighlightImageCheck = HighlightImageValid();
  const SocialMediaImageCheck = SocialMediaValid();
  const array = personalDetails?.name ? personalDetails?.name?.split(" ") : "";

  const pfImage = backgroundImage ?  backgroundImage : defaultBackgroundImage

  const imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${pfImage})`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "sticky"
  };

  const shareMail = (e) => {
    window.location = `mailto:${personalDetails?.email}`;
    e.preventDefault();
  };
  const shareMail2 = (e) => {
    window.location = `mailto:${personalDetails?.secondaryEmail}`;
    e.preventDefault();
  };
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
  };

  return (
    <div className="flex justify-center">
      <div className="relative ">

        <div className="digitalcontainer4 fixed h-screen overflow-auto scrollbar-hide " style={imageStyle}>

          <div className=" mt-5 mx-3  ">
            {/* ------------------------------ first section -----------------------------  */}
            <div className="flex gap-2 ">

              <div className=" flex flex-col items-center gap-2 w-1/2 ">
                {/* {checkPfCard ? ( */}
                <div className="relative h-[260px] w-full bg-gradient-to-b from-[#383B42] to-[#000000]  flex justify-center rounded-[22px]">

                  {checkProfile ? (
                    <>
                      {
                        profileImage ? (
                          <img
                            className="h-full w-full object-cover  rounded-[22px]"
                            src={profileImage}
                            alt=""
                          />
                        ) : (
                          <img src={defaultProfileImage} className="h-full w-full object-cover  rounded-[22px]" alt="" />
                        )
                      }
                    </>
                  ) : (
                    ''
                  )}
                  <div className={` ${checkProfile ? 'absolute bottom-0' : 'flex flex-col justify-center '}  text-center text-white px-1`} >
                    <h1 className="font-bold "
                      style={{
                        // width: `${!checkProfile ? "max-content" : ""}`,
                        fontSize: `${array[0]?.length > 12 ||
                          array[1]?.length > 12 ||
                          array[2]?.length > 12
                          ? "20px"
                          : ""
                          }`,
                      }}
                    >
                      {" "}
                      {personalDetails?.name ? personalDetails.name : ""}
                    </h1>


                    <p className="text-[14px]  text-white font-medium text-center">
                      {personalDetails?.companyDesignation
                        ? personalDetails.companyDesignation
                        : ""}
                    </p>
                  </div>
                </div>
                {/* ) : (
                ""
              )} */}

                {companyLogo[0]?.thumbUrl &&
                  companyLogo[0]?.status !== "removed" ? (
                  checkLogo ? (
                    <div className="bg-gradient-to-b from-[#383B42] to-[#000000] h-[170px] rounded-[22px]" >
                      <img
                        className="h-full w-full rounded-[22px]"
                        src={
                          companyLogo[0]?.originFileObj?.type
                            ? URL.createObjectURL(
                              companyLogo[0]?.originFileObj
                            )
                            : companyLogo[0].thumbUrl
                        }
                        alt="Logo"
                      />
                    </div>
                  ) : (
                    <Link className="w-full"
                      to={`${preview ? contactDetails?.locationUrl : ""}`}
                      target={`${preview ? "_blank" : ""}`}
                    >

                      {SMediaPostion?.pos5 &&
                        <div className="bg-gradient-to-b from-[#383B42] to-[#000000] h-[170px] rounded-[22px] w-full flex items-center justify-center" >
                          <div className="flex flex-col items-center justify-center  mx-2">
                            <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z"
                                fill="white"
                              />
                            </svg>
                            <p className="text-[14px] text-white font-medium text-center">
                              {contactDetails?.address
                                ? contactDetails.address
                                : ""}
                            </p>
                          </div>{" "}
                        </div>}
                    </Link>
                  )
                ) : (
                  <Link className="w-full"
                    to={`${preview ? contactDetails?.locationUrl : ""}`}
                    target={`${preview ? "_blank" : ""}`}
                  >

                    {SMediaPostion?.pos5 &&
                      <div className="bg-gradient-to-b from-[#383B42] to-[#000000] h-[170px] rounded-[22px] w-full flex items-center justify-center" >
                        <div className="flex flex-col items-center justify-center  mx-2">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z"
                              fill="white"
                            />
                          </svg>
                          <p className="text-[14px] text-white font-medium text-center">
                            {contactDetails?.address
                              ? contactDetails.address
                              : ""}
                          </p>
                        </div>{" "}
                      </div>}
                  </Link>
                )}

              </div>
              {SocialMediaImageCheck ?
                <div className="bg-gradient-to-b from-[#383B42] to-[#000000] w-1/2 max-h-[438px] rounded-[22px] flex items-center justify-center ">
                  <div className="flex items-center justify-center ">
                    <VerticalSlideSM preview={preview}/>
                  </div>
                </div>
                : ''
              }

            </div>

            {/* ------------------------------ second section -----------------------------  */}

            <div className="flex mt-5 gap-2 justify-between">

              <div className=" w-1/2 h-[166px] bg-gradient-to-b from-[#383B42] to-[#000000]  rounded-[22px] items-center p-6  ">
                <div className="flex items-center justify-center h-[54px] ">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.12 10.79C8.56 13.62 10.88 15.93 13.71 17.38L15.91 15.18C16.18 14.91 16.58 14.82 16.93 14.94C18.05 15.31 19.26 15.51 20.5 15.51C21.05 15.51 21.5 15.96 21.5 16.51V20C21.5 20.55 21.05 21 20.5 21C11.11 21 3.5 13.39 3.5 4C3.5 3.45 3.95 3 4.5 3H8C8.55 3 9 3.45 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Link to={preview ? `tel:+${personalDetails?.phone}` : ""}>
                  <p className="text-[14px] text-white font-medium text-center">
                    +
                    {personalDetails?.phone
                      ? personalDetails.phone
                      : "123 456 7890"}
                  </p>
                </Link>
                <Link to={preview ? `tel:+${personalDetails?.secondaryPhone}` : ""}>
                  <p className="text-[14px] text-white font-medium text-center">

                    {personalDetails?.secondaryPhone
                      ? "+" + personalDetails.secondaryPhone
                      : ""}
                  </p>
                </Link>
              </div>

              <div className="w-1/2 h-[166px] bg-gradient-to-b from-[#383B42] to-[#000000] rounded-[22px] items-center p-6 ">
                <div className="flex items-center justify-center h-[54px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-[14px] text-white font-medium text-center overflow-auto scrollbar-hide">
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

            </div>
            {
              (SMediaPostion?.pos5 && checkLogo && (companyLogo[0]?.thumbUrl &&
                companyLogo[0]?.status !== "removed")) || (!SMediaPostion?.pos5) ?
                <Link
                  to={`${preview ? contactDetails?.locationUrl : ""}`}
                  target={`${preview ? "_blank" : ""}`}
                >
                  <div className="max-w-[361px] h-[166px] mt-[20px] bg-gradient-to-b from-[#383B42] to-[#000000] rounded-[22px] items-center p-6 ">
                    <div className="flex items-center justify-center h-[54px]">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z"
                          fill="white"
                        />
                      </svg>
                    </div>{" "}
                    <p className="text-[14px] text-white font-medium text-center">
                      {contactDetails?.address
                        ? contactDetails.address
                        : "2709 Hwy 51,Janesville"}
                    </p>
                  </div>
                </Link>
                : ''
            }

            {personalDetails?.about ?

              <div className="max-w-[361px]  bg-gradient-to-b from-[#383B42] mt-[20px] to-[#000000] rounded-[22px] items-center p-6 ">
                <div className=" h-[34px]">
                  <p className="text-[18px] text-white font-medium text-left">
                    About
                  </p>
                </div>

                <p className="text-[14px] text-white font-medium text-left">
                  {personalDetails?.about}
                </p>
              </div>
              : ''
            }
            <div className="flex mt-[20px] gap-2">
              {website[0]?.websiteName ? (

                <div className=" w-1/2 max-h-[250px] overflow-auto scrollbar-hide mb-2 bg-gradient-to-b from-[#383B42] to-[#000000]  rounded-[22px] items-center p-6  ">
                  <div className="flex items-center justify-center h-[54px] ">
                    <p className="text-[18px] text-white font-semibold h-[0px]  text-center">
                      Website
                    </p>
                  </div>

                  <WebsiteBasic preview={preview} color={'white'} />
                </div>

              ) : (
                ""
              )}

              {review[0]?.reviewName ? (
                <div className="w-1/2  max-h-[250px] overflow-auto scrollbar-hide mb-2 bg-gradient-to-b from-[#383B42] to-[#000000]  rounded-[22px] items-center p-6  ">
                  <div className="flex items-center justify-center h-[54px] ">
                    <p className="text-[14px] text-white font-semibold h-[0px]  text-center">
                      Review
                    </p>
                  </div>

                  <ReviewCardBasic preview={preview} color={'white'} />
                </div>
              ) : (
                ""
              )}
            </div>

            {fileName?.fileName1 || fileName?.fileName2 || fileName?.fileName3 || fileName?.fileName4 ? (
              <div className="max-w-[361px]  bg-gradient-to-b from-[#383B42] mt-[20px] to-[#000000] rounded-[22px] items-center p-6 ">
                <div className=" h-[34px]">
                  <p className="text-[14px] text-white font-medium text-left">
                    Downloads
                  </p>
                </div>
                <p className="text-[14px] text-white font-medium text-left">
                  <DownloadBasic preview={preview} fileName={fileName} files={files} color={'white'} />
                </p>
              </div>
            ) : (
              ""
            )}
            <div className=" mt-[20px] ">
              {HighlightImageCheck ? <HighlightImage /> : ""}
            </div>





          </div>





        </div>
        {preview ?
          <div className='absolute bottom-5 left-20  flex items-center gap-2 justify-center my-2 '>

            <div >
              <Link to={`${preview ? vCard : ''}`}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="12" fill="white" />
                  <path d="M32.2913 23.9587H26.0413V17.7087C26.0413 17.4324 25.9315 17.1674 25.7362 16.9721C25.5408 16.7767 25.2759 16.667 24.9996 16.667C24.7233 16.667 24.4584 16.7767 24.263 16.9721C24.0677 17.1674 23.9579 17.4324 23.9579 17.7087V23.9587H17.7079C17.4317 23.9587 17.1667 24.0684 16.9714 24.2638C16.776 24.4591 16.6663 24.7241 16.6663 25.0003C16.6663 25.2766 16.776 25.5415 16.9714 25.7369C17.1667 25.9322 17.4317 26.042 17.7079 26.042H23.9579V32.292C23.9579 32.5683 24.0677 32.8332 24.263 33.0286C24.4584 33.2239 24.7233 33.3337 24.9996 33.3337C25.2759 33.3337 25.5408 33.2239 25.7362 33.0286C25.9315 32.8332 26.0413 32.5683 26.0413 32.292V26.042H32.2913C32.5675 26.042 32.8325 25.9322 33.0278 25.7369C33.2232 25.5415 33.3329 25.2766 33.3329 25.0003C33.3329 24.7241 33.2232 24.4591 33.0278 24.2638C32.8325 24.0684 32.5675 23.9587 32.2913 23.9587Z" fill="black" />
                </svg>
              </Link>
            </div>
            {contactDetails?.locationUrl ?
              <div >
                <Link
                  to={`${preview ? contactDetails?.locationUrl : ""}`}
                  target={`${preview ? "_blank" : ""}`}
                >
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12" fill="white" />
                    <path d="M33.2463 18.3684C33.6355 17.3576 32.6421 16.3643 31.6313 16.7534L17.468 22.2001C16.3346 22.6351 16.4246 24.2668 17.598 24.5751L23.4405 26.1126C23.5476 26.1407 23.6454 26.1968 23.7237 26.2752C23.8021 26.3535 23.8582 26.4513 23.8863 26.5584L25.4238 32.4001C25.7321 33.5743 27.3638 33.6634 27.7988 32.5309L33.2463 18.3684Z" fill="black" />
                  </svg>
                </Link>
              </div>
              : ''
            }
            <div  >
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => setQrModal(true)}>
                <rect width="50" height="50" rx="12" fill="white" />
                <path d="M12.25 17.2083C12.25 15.8933 12.7724 14.6321 13.7023 13.7023C14.6321 12.7724 15.8933 12.25 17.2083 12.25H19.849C20.2247 12.25 20.5851 12.3993 20.8507 12.6649C21.1164 12.9306 21.2657 13.2909 21.2657 13.6667C21.2657 14.0424 21.1164 14.4027 20.8507 14.6684C20.5851 14.9341 20.2247 15.0833 19.849 15.0833H17.2083C16.6447 15.0833 16.1042 15.3072 15.7057 15.7057C15.3072 16.1042 15.0833 16.6447 15.0833 17.2083V19.849C15.0833 20.2247 14.9341 20.5851 14.6684 20.8507C14.4027 21.1164 14.0424 21.2657 13.6667 21.2657C13.2909 21.2657 12.9306 21.1164 12.6649 20.8507C12.3993 20.5851 12.25 20.2247 12.25 19.849V17.2083ZM28.7343 13.6667C28.7343 13.2909 28.8836 12.9306 29.1493 12.6649C29.4149 12.3993 29.7753 12.25 30.151 12.25H32.7917C34.1067 12.25 35.3679 12.7724 36.2977 13.7023C37.2276 14.6321 37.75 15.8933 37.75 17.2083V19.849C37.75 20.2247 37.6007 20.5851 37.3351 20.8507C37.0694 21.1164 36.7091 21.2657 36.3333 21.2657C35.9576 21.2657 35.5973 21.1164 35.3316 20.8507C35.0659 20.5851 34.9167 20.2247 34.9167 19.849V17.2083C34.9167 16.6447 34.6928 16.1042 34.2943 15.7057C33.8958 15.3072 33.3553 15.0833 32.7917 15.0833H30.151C29.7753 15.0833 29.4149 14.9341 29.1493 14.6684C28.8836 14.4027 28.7343 14.0424 28.7343 13.6667ZM13.6667 28.7343C14.0424 28.7343 14.4027 28.8836 14.6684 29.1493C14.9341 29.4149 15.0833 29.7753 15.0833 30.151V32.7917C15.0833 33.3553 15.3072 33.8958 15.7057 34.2943C16.1042 34.6928 16.6447 34.9167 17.2083 34.9167H19.849C20.2247 34.9167 20.5851 35.0659 20.8507 35.3316C21.1164 35.5973 21.2657 35.9576 21.2657 36.3333C21.2657 36.7091 21.1164 37.0694 20.8507 37.3351C20.5851 37.6007 20.2247 37.75 19.849 37.75H17.2083C15.8933 37.75 14.6321 37.2276 13.7023 36.2977C12.7724 35.3679 12.25 34.1067 12.25 32.7917V30.151C12.25 29.7753 12.3993 29.4149 12.6649 29.1493C12.9306 28.8836 13.2909 28.7343 13.6667 28.7343ZM36.3333 28.7343C36.7091 28.7343 37.0694 28.8836 37.3351 29.1493C37.6007 29.4149 37.75 29.7753 37.75 30.151V32.7917C37.75 34.1067 37.2276 35.3679 36.2977 36.2977C35.3679 37.2276 34.1067 37.75 32.7917 37.75H30.151C29.7753 37.75 29.4149 37.6007 29.1493 37.3351C28.8836 37.0694 28.7343 36.7091 28.7343 36.3333C28.7343 35.9576 28.8836 35.5973 29.1493 35.3316C29.4149 35.0659 29.7753 34.9167 30.151 34.9167H32.7917C33.3553 34.9167 33.8958 34.6928 34.2943 34.2943C34.6928 33.8958 34.9167 33.3553 34.9167 32.7917V30.151C34.9167 29.7753 35.0659 29.4149 35.3316 29.1493C35.5973 28.8836 35.9576 28.7343 36.3333 28.7343ZM22.1667 17.9167H17.9167V22.1667H22.1667V27.8333H17.9167V32.0833H22.1667V27.8333H27.8333V32.0833H32.0833V27.8333H27.8333V22.1667H32.0833V17.9167H27.8333V22.1667H22.1667V17.9167Z" fill="black" />
              </svg>

            </div>
            <div>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={handleShare}>
                <rect width="50" height="50" rx="12" fill="white" />
                <path d="M31 35C30.1667 35 29.4583 34.7083 28.875 34.125C28.2917 33.5417 28 32.8333 28 32C28 31.8833 28.0083 31.7623 28.025 31.637C28.0417 31.5117 28.0667 31.3993 28.1 31.3L21.05 27.2C20.7667 27.45 20.45 27.646 20.1 27.788C19.75 27.93 19.3833 28.0007 19 28C18.1667 28 17.4583 27.7083 16.875 27.125C16.2917 26.5417 16 25.8333 16 25C16 24.1667 16.2917 23.4583 16.875 22.875C17.4583 22.2917 18.1667 22 19 22C19.3833 22 19.75 22.071 20.1 22.213C20.45 22.355 20.7667 22.5507 21.05 22.8L28.1 18.7C28.0667 18.6 28.0417 18.4877 28.025 18.363C28.0083 18.2383 28 18.1173 28 18C28 17.1667 28.2917 16.4583 28.875 15.875C29.4583 15.2917 30.1667 15 31 15C31.8333 15 32.5417 15.2917 33.125 15.875C33.7083 16.4583 34 17.1667 34 18C34 18.8333 33.7083 19.5417 33.125 20.125C32.5417 20.7083 31.8333 21 31 21C30.6167 21 30.25 20.9293 29.9 20.788C29.55 20.6467 29.2333 20.4507 28.95 20.2L21.9 24.3C21.9333 24.4 21.9583 24.5127 21.975 24.638C21.9917 24.7633 22 24.884 22 25C22 25.1167 21.9917 25.2377 21.975 25.363C21.9583 25.4883 21.9333 25.6007 21.9 25.7L28.95 29.8C29.2333 29.55 29.55 29.3543 29.9 29.213C30.25 29.0717 30.6167 29.0007 31 29C31.8333 29 32.5417 29.2917 33.125 29.875C33.7083 30.4583 34 31.1667 34 32C34 32.8333 33.7083 33.5417 33.125 34.125C32.5417 34.7083 31.8333 35 31 35Z" fill="black" />
              </svg>

            </div>

          </div>
          : ""
        }
        {qrModal ? <QRModal handleClose={handleClose} /> : null}
      </div >
    </div>


  );
}

export default VexTheme;
