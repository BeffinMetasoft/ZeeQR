import React, { useContext, useState } from "react";
import "./DigitalTheme1.css";
import { IoMdCall } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsLink } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import Website from "../Common/websiteCards/Website";
import Review from "../Common/reviewCards/Reviews";
import Downloads from "../Common/fileDownloadsCards/Downloads";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import ProfileCard from "../Common/profileCards/ProfileCard";
import ContactCard1 from "../Common/contactCards/ContactCard1";
import ListSocialMedia from "../Common/socialMedia/ListSocialMedia";
import { HighlightImageValid, SocialMediaValid } from "../Common/DivValidation";
import QRModal from "../Common/qrModals/QRModal";
import { CardContext } from "../../store/CardContext";
import ListSocialMedias from "../Common/socialMedia/ListSocialMedias";
const defaultBackgroundImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function DigitalTheme1({ card, preview }) {
  const [cardData] = useContext(CardContext)
  const {
    backgroundImage,
    website,
    review,
    fileName,
    files,
    checkProfile,
    checkPfCard,
  } = cardData

  const [activeTab, setActiveTab] = useState(1);
  const [qrModal, setQrModal] = useState(false);

  const Highlightcolor = card?.colorCode ? card?.colorCode : "#1A1F23";
  const Textcolor = card?.textColor ? card?.textColor : "#FFFFFF";
  const Iconcolor = card?.iconBgColor ? card?.iconBgColor : "#FFFFFF";
  // const BgColor = card?.bgColor ? card?.bgColor : "";
  const BtIColor = card?.btIconColor ? card?.btIconColor : "#000000";





  const SocialMediaImageCheck = SocialMediaValid();
  const HighlightImageCheck = HighlightImageValid();
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: "Please check it out.",
          url: window.location.href,
          title: "ZeeQR",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const handleClose = (e) => {
    setQrModal(false);
    setShowResults(false);
  };




  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };





  return (
    <>
      <div className="previewWrapdigital_1  ">

        <div className="bannerImagedigital_1">
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
          className="previewContainerdigital_1  bg-[#1A1F23]"
        // style={{ color: `${color === "black" ? "white" : "black"}` }}
        >
          {checkPfCard ? (
            <ProfileCard Highlightcolor={Highlightcolor} Textcolor={Textcolor} theme={'digital'} />
          ) : (
            ""
          )}

          <div className="flex ">
            <div className="w-[65px] bg-gray-200 pl-4" >
              <ul className="text-[30px]  sticky top-0 ">
                <li
                  className={`mb-2 w-[49px] h-[60px] ${activeTab === 1
                    ? "font-bold text-black border-r-4  flex items-center border-[#FF0000] "
                    : "text-[#AFAFAF]  flex items-center "
                    }`}
                  onClick={() => handleTabClick(1)}
                >
                  <IoMdCall className="" />
                </li>

                {SocialMediaImageCheck || (card?.socialMedias && card?.socialMedias?.length !== 0) ? (
                  <li
                    className={`mb-2 w-[49px] h-[60px] ${activeTab === 2
                      ? "font-bold text-black  flex items-center border-r-4   border-[#FF0000]"
                      : "text-[#AFAFAF]  flex items-center"
                      }`}
                    onClick={() => handleTabClick(2)}
                  >
                    <TfiAnnouncement />
                  </li>
                ) : (
                  ""
                )}

                {website[0]?.websiteName ? (
                  <li
                    className={`mb-2 w-[49px] h-[60px] ${activeTab === 3
                      ? "font-bold text-black border-r-4  flex items-center border-[#FF0000]"
                      : "text-[#AFAFAF]  flex items-center"
                      }`}
                    onClick={() => handleTabClick(3)}
                  >
                    <BsLink />
                  </li>
                ) : (
                  ""
                )}
                {review[0]?.reviewName ? (
                  <li
                    className={`mb-2 w-[49px] h-[60px] ${activeTab === 4
                      ? "font-bold text-black border-r-4  flex items-center border-[#FF0000]"
                      : "text-[#AFAFAF]  flex items-center"
                      }`}
                    onClick={() => handleTabClick(4)}
                  >
                    <MdReviews />
                  </li>
                ) : (
                  ""
                )}
                {fileName?.fileName1 || fileName?.fileName2 || fileName?.fileName3 || fileName?.fileName4 ? (
                  <li
                    className={`mb-2 w-[49px] h-[60px] ${activeTab === 5
                      ? "font-bold text-black  flex items-center border-r-4 border-[#FF0000]"
                      : "text-[#AFAFAF]  flex items-center"
                      }`}
                    onClick={() => handleTabClick(5)}
                  >
                    <FaFileDownload />
                  </li>
                ) : (
                  ""
                )}
                {HighlightImageCheck ?
                  <li
                    className={`mb-2 w-[49px] h-[60px] ${activeTab === 6
                      ? "font-bold text-black  flex items-center border-r-4 border-[#FF0000]"
                      : "text-[#AFAFAF]  flex items-center"
                      }`}
                    onClick={() => handleTabClick(6)}
                  >
                    <RiGalleryLine />
                  </li>
                  : ""
                }
                {/* <li
                  className={`mb-2 w-[49px] h-[60px] ${
                    activeTab === 7
                      ? "font-bold text-black border-r-4 border-[#FF0000]"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => handleTabClick(5)}
                >
                  <BsFillCameraVideoFill />
                </li> */}
              </ul>
            </div>

            {/* Display the content based on the activeTab state */}
            <div className={`w-full min-h-[${checkPfCard && checkProfile ? '380px' : '440px'}]`} style={{
              backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
            }}>
              {/* ------------------------------- Basic Info ------------------------------- */}
              {activeTab === 1 && (
                <div className="ml-3">

                  <ContactCard1 preview={preview} Textcolor={Textcolor} Iconcolor={Iconcolor} BtIColor={BtIColor} />

                </div>
              )}
              {/* ------------------------------- socialMediaDetails ------------------------------- */}
              {preview ? (
                <div>
                  {activeTab === 2 && (

                    <div className=" mx-2 ">
                      {/* <SocialMedia data={data} /> */}
                      {(card?.socialMedias && card?.socialMedias?.length !== 0) ?
                        <ListSocialMedias preview={preview} />
                        :
                        <ListSocialMedia preview={preview} />
                      }
                    </div>

                  )}
                </div>
              ) : (
                <div>
                  {activeTab === 2 && (

                    <div className=" mx-2 ">
                      {/* <SocialMedia data={data} /> */}
                      {(card?.socialMedias && card?.socialMedias?.length !== 0) ?
                        <ListSocialMedias preview={preview} />
                        :
                        <ListSocialMedia preview={preview} />
                      }
                    </div>

                  )}
                </div>
              )}
              {/* ------------------------------- Website ------------------------------- */}
              {preview ? (
                <div>
                  {activeTab === 3 && (
                    <div>
                      <div className="   text-white p-[6px]   rounded-[12px] ">
                        <Website website={website} preview={preview} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {activeTab === 3 && (
                    <div>
                      <div className="   text-white p-[6px]  rounded-[12px] ">
                        <Website website={website} preview={preview} />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* ------------------------------- Review ------------------------------- */}
              {preview ? (
                <div>
                  {activeTab === 4 && (
                    <div>
                      <div className="  text-white p-[6px] rounded-[12px] ">
                        <Review review={review} preview={preview} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {activeTab === 4 && (
                    <div>
                      <div className="   text-white p-[6px] rounded-[12px] ">
                        <Review review={review} preview={preview} />
                      </div>
                    </div>

                  )}
                </div>)}
              {/* ------------------------------- Downloads ------------------------------- */}
              {preview ? (
                <div>
                  {activeTab === 5 && (
                    <div>
                      <div className="  text-white p-[6px]  rounded-[12px] ">
                        <Downloads files={files} fileName={fileName} preview={preview} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {activeTab === 5 && (
                    <div>
                      <div className="text-white p-[6px]  rounded-[12px] ">
                        <Downloads files={files} fileName={fileName} preview={preview} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 6 && (
                <div>
                  <div className="    text-white p-[6px]  rounded-[12px] ">
                    <div className="grid grid-rows-2 grid-flow-col gap-4  ">
                      <HighlightImage />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 7 && (
                <div>
                  <div className="   text-white p-[6px]  rounded-[12px] ">
                    <div className="grid  gap-4  ">
                      <img
                        src={defaultProfileImage}
                        alt="profile_interfacevideoimg"
                      ></img>
                      <img
                        src={defaultProfileImage}
                        alt="profile_interfacevideoimg"
                      ></img>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {preview ? (
              <div className="flex justify-center gap-[20px] fixed top-[90%] left-[54%]   ">
                <button className="w-[50px] h-[50px] p-[15px] shadow-xl rounded-[12px]  bg-white" onClick={handleShare}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.8833 12.0083 16.7623 12.025 16.637C12.0417 16.5117 12.0667 16.3993 12.1 16.3L5.05 12.2C4.76667 12.45 4.45 12.646 4.1 12.788C3.75 12.93 3.38333 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.38333 7 3.75 7.071 4.1 7.213C4.45 7.355 4.76667 7.55067 5.05 7.8L12.1 3.7C12.0667 3.6 12.0417 3.48767 12.025 3.363C12.0083 3.23833 12 3.11733 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6167 6 14.25 5.92933 13.9 5.788C13.55 5.64667 13.2333 5.45067 12.95 5.2L5.9 9.3C5.93333 9.4 5.95833 9.51267 5.975 9.638C5.99167 9.76333 6 9.884 6 10C6 10.1167 5.99167 10.2377 5.975 10.363C5.95833 10.4883 5.93333 10.6007 5.9 10.7L12.95 14.8C13.2333 14.55 13.55 14.3543 13.9 14.213C14.25 14.0717 14.6167 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z"
                      fill="black"
                    />
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
        </div>

        {qrModal ? <QRModal handleClose={handleClose} Highlightcolor={Highlightcolor} Textcolor={Textcolor} /> : null}

      </div>
    </>
  );
}

export default DigitalTheme1;
