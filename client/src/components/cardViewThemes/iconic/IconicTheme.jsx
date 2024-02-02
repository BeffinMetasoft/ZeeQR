import React, { useContext, useState } from "react";
import "./IconicTheme.css";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import GridWebsite from "../Common/websiteCards/GridWebsite";
import GridReview from "../Common/reviewCards/GridReview";
import GridDownloads from "../Common/fileDownloadsCards/GridDownloads";
import QRModal from "../Common/QRModal";
import { defaultBackgroundImage } from "../Common/DefaultImage";
import TabMenu from "./TabMenu";
import SocialMediaGrid from "../Common/socialMedia/SocialMediaGrid";
import ProfileCardIconic from "../Common/profileCards/ProfileCardIconic";
import ContactCardIconic from "../Common/contactCards/ContactCardIconic";
import { CardContext } from "../../store/CardContext";
import SocialMediaIconicGrid from "../Common/socialMedia/SocialMediaIconicGrid";
function IconicTheme({ card, preview }) {
  const [cardData] = useContext(CardContext)
  const {
    backgroundImage,
    website,
    review,
    fileName,
    files,

  } = cardData

  const Highlightcolor = card?.colorCode ? card?.colorCode : "";
  const [qrModal, setQrModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleClose = (e) => {
    setQrModal(false);
  };
  const handleShare = () => {
    if (navigator.share && preview) {
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
    <div className="iconictheme relative ">
      <div className="iconictheme_banner">
        <div className="flex items-center justify-center ">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              alt=""
            />
          ) : (
            <img src={defaultBackgroundImage} alt="" />
          )}
        </div>
      </div>

      <div className="iconictheme_details absolute top-[78%]">
        <ProfileCardIconic preview={preview} />

        <div className="mt-[40px] mb-[40px] overflow-hidden ">
          <TabMenu activeTab={activeTab} handleTabClick={handleTabClick} Highlightcolor={Highlightcolor} />
          <>
            {activeTab === 1 && <ContactCardIconic preview={preview} Highlightcolor={Highlightcolor} />}
            {activeTab === 2 &&
              ((card?.socialMedias && card?.socialMedias?.length !== 0) ?
                <SocialMediaIconicGrid preview={preview} />
                :
                <SocialMediaGrid preview={preview} />
              )
            }
            {activeTab === 3 && (
              <div className="grid  grid-cols-2 items-center">
                {" "}
                <HighlightImage preview={preview} />
              </div>
            )}
            {activeTab === 4 && (
              <GridWebsite website={website} preview={preview} />
            )}
            {activeTab === 5 && (
              <GridReview review={review} preview={preview} />
            )}
            {activeTab === 6 && (
              <GridDownloads
                files={files}
                fileName={fileName}
                preview={preview}
              />
            )}
          </>
        </div>
        {preview ? (
          <div className="flex justify-center gap-[20px] fixed top-[90%] lg:left-[45%] left-[35%]   ">
            <button
              className="w-[50px] h-[50px] flex justify-center p-[15px] rounded-[12px] shadow bg-white"
              onClick={handleShare}
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
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="w-[50px] h-[50px] flex justify-center shadow p-[10px] rounded-[12px] bg-white"
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
                  fill={Highlightcolor ? Highlightcolor : "black"}
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
  );
}

export default IconicTheme;
