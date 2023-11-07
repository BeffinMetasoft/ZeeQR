import React, { useContext, useState } from "react";
import "./UltraTheme.css";
import {
  MenuOutlined,
  QrcodeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { downArrow, upArrow } from "../Common/SvgIcon";
import { defaultBackgroundImage } from "../Common/DefaultImage";
import { FloatButton } from "antd";
import { FaLocationArrow } from "react-icons/fa";
import QRModal from "../Common/QRModal";
import HighlightImage from "../Common/highlightImagesCards/HighlightImage";
import SlideSocialMedia from "../Common/socialMedia/SlideSocialMedia";
import { HighlightImageValid, SocialMediaValid } from "../Common/DivValidation";
import { Link } from "react-router-dom";
import ProfileCardUltra from "../Common/profileCards/ProfileCardUltra";
import WebsiteUltra from "../Common/websiteCards/WebsiteUltra";
import ReviewCardUltra from "../Common/reviewCards/ReviewCardUltra";
import DownloadCardUltra from "../Common/fileDownloadsCards/DownloadCardUltra";
import ContactCardUltra from "../Common/contactCards/ContactCardUltra";
import { CardContext } from "../../store/CardContext";

function UltraTheme({ preview }) {
  const [cardData] = useContext(CardContext)

  const { backgroundImage, personalDetails,website,review, contactDetails } = cardData
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [qrModal, setQrModal] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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

  const handleClose = (e) => {
    setQrModal(false);
  };

  const HighlightImageCheck = HighlightImageValid();
  const SocialMediaImageCheck = SocialMediaValid();

  return (
    <>
      <div className="ultratheme">
        <div className="ultrathemecoloum">
          <div className="ultrathemebanner">
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
            className={`absolute transition-all ease-in-out min-w-fit w-[100%]  max-w-[380px]  ${isExpanded ? " top-[0px] " : " top-[270px]"
              }`}
          >
            <div className="ultrathemedetails">
              <div className={`${isExpanded ? "  rounded-[16px]  min-h-screen bg-gradient-to-b from-[#00F0E2] to-[#B089E1]  justify-between" : "  rounded-[16px] min-h-screen  bg-gradient-to-b from-[#00F0E2] to-[#B089E1]  justify-between"}`}>
                <div className="flex justify-center items-center">
                  <div className="cursor-pointer" onClick={toggleExpand}>
                    {isExpanded ? downArrow : upArrow}
                  </div>
                </div>

                <div className="info">
                  <ProfileCardUltra preview={preview} />
                  <ContactCardUltra preview={preview} />
                </div>

                <div className="info more-info">
                  {isExpanded && (
                    <div>
                      {SocialMediaImageCheck ? <SlideSocialMedia preview={preview} /> : ""}

                      {personalDetails?.about ? (
                        <div className="text-center m-[15px] ">
                          <p className="text-[#000000] text-[16px] font-semibold mt-5">
                            About
                          </p>
                          <p className="text-[#000000] text-[12px] font-medium whitespace-pre-line">
                            {personalDetails?.about}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                      <WebsiteUltra website={website} preview={preview} />
                      <ReviewCardUltra review={review} preview={preview}  />
                      <DownloadCardUltra preview={preview}  />

                      <div className="text-center m-[15px] mb-0">
                        <p className="text-[#000000] text-[14px] font-semibold">
                          {HighlightImageCheck ? "Media" : ""}
                        </p>
                        <div className="flex p-1 justify-center">
                          <div className="flex  flex-wrap gap-1">
                            {HighlightImageCheck ? <HighlightImage /> : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        { preview && !qrModal ?


          <FloatButton.Group className="shadow-xl"
            trigger="click"
            color="black share_button"
            style={{
              left: "50%", 
              color: "white",
              position: "fixed",
              bottom: 20,
              marginLeft: '-20px',

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
      
    </>
  );
}

export default UltraTheme;
