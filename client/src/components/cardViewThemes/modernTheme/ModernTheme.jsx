import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ModernTheme.css";
import { saveAs } from "file-saver";
import { BsQrCodeScan } from "react-icons/bs";
import ftLogo from "../../../assests/img/footer_logo.svg";
import share from "../../../assests/img/share_icon.svg";
import linkedin from "../../../assests/img/linkedIn_white.svg";
import insta from "../../../assests/img/insta_white.svg";
import fb from "../../../assests/img/fb_white.svg";
import twitter from "../../../assests/img/tw_white.svg";
import whatsapp from "../../../assests/img/Whatsapp_white.svg";

import addtoHome from "../../../assests/img1/addtoHome.jpg";
import tiktok from "../../../assests/img1/tiktok-white.svg";
import skype from "../../../assests/img1/skype-white.svg";
import youtube from "../../../assests/img1/youtube-white.svg";
import snapchat from "../../../assests/img1/snapchat-white.svg";
import leftarrow from "../../../assests/img1/left_arrow.svg";
import arrow from "../../../assests/img/more_icon.svg";
import companypfImage from "../../../assests/img1/companyProfile_wht.svg";

const defaultBackgroundImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function ModernTheme({ card, preview }) {
  

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

  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const handleClose = (e) => {
    setQrModal(false);
    setShowResults(false);
  };

  const handleDownload = () => {
    let url = card?.QRCode;
    saveAs(url, card?.name);
  };

  const Highlightcolor = card?.colorCode;

  const shareMail = (e) => {
    window.location = `mailto:${card?.email}`;
    e.preventDefault();
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  };

  const array = card?.name ? card?.name?.split(" ") : "";

  //--------------------------------------FaceBookIcon-----------------------------------------------
  const FaceBookIcon = (
    <Link
      to={`${preview ? card?.facebook : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={fb} alt="" />{" "}
    </Link>
  );
  //--------------------------------------InstagramIcon-----------------------------------------------
  const InstagramIcon = (
    <Link
      to={`${preview ? card?.instagram : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={insta} alt="" />{" "}
    </Link>
  );
  //--------------------------------------WhatsAppIcon-----------------------------------------------
  const WhatsAppIcon = (
    <Link
      to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
      target="_blank"
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={whatsapp} alt="" />{" "}
    </Link>
  );
  //--------------------------------------LinkedInIcon-----------------------------------------------
  const LinkedInIcon = (
    <Link
      to={`${preview ? card?.linkedin : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={linkedin} alt="" />{" "}
    </Link>
  );
  //--------------------------------------TwitterIcon-----------------------------------------------
  const TwitterIcon = (
    <Link
      to={`${preview ? card?.twitter : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={twitter} alt="" />{" "}
    </Link>
  );
  //--------------------------------------YoutubeIcon-----------------------------------------------
  const YoutubeIcon = (
    <Link
      to={`${preview ? card?.youtube : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={youtube} alt="" />{" "}
    </Link>
  );
  //--------------------------------------SkypeIcon-----------------------------------------------
  const SkypeIcon = (
    <Link
      to={`${preview ? card?.skype : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={skype} alt="" />{" "}
    </Link>
  );
  //--------------------------------------SnapChatIcon-----------------------------------------------
  const SnapChatIcon = (
    <Link
      to={`${preview ? card?.snapchat : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={snapchat} alt="" />{" "}
    </Link>
  );
  //--------------------------------------TikTokIcon-----------------------------------------------
  const TikTokIcon = (
    <Link
      to={`${preview ? card?.tiktok : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      {" "}
      <img src={tiktok} alt="" />{" "}
    </Link>
  );
  //--------------------------------------CompanyProfileIcon-----------------------------------------------
  const CompanyProfileIcon = (
    <Link
      to={`${preview ? card?.companyProfile : ""}`}
      target={`${preview ? "_blank" : ""}`}
      style={{
        background: `${Highlightcolor
          ? Highlightcolor
          : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
          }`,
      }}
    >
      <img src={companypfImage} alt="" />
    </Link>
  );
  //------------------------------------------------------------------------------------------------------
  return (
    <div>
      <section className="previewWrapModern ">
        {preview ? (
          <span
            className="qr-codeModern fixed bottom-0 center-0 z-10 ml-[330px] md:ml-[800px] border rounded-full  text-white p-2 my-6"
            onClick={() => setQrModal(true)}
            style={{
              background: `${Highlightcolor
                ? Highlightcolor
                : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
                }`,
            }}
          >
            <BsQrCodeScan size={30} />
          </span>
        ) : (
          ""
        )}


        <div className="bannerImage" style={{ marginTop: "0px" }}>
          {card?.profileImage ? (
            card?.checkProfile ? (
              <img
                src={
                  card?.profileImage
                }
                alt=""
              />
            ) : (
              <img src={defaultProfileImage} alt="" />
            )
          ) : (
            <img src={defaultProfileImage} alt="" />
          )}
          {/* <img src={card.profileImage ? card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'} alt="" /> */}
        </div>
        {/* <div className="btnrelativeModern"> */}

          <div className="previewContainerModern">

            <div
              className={`buttons  ${preview
                  // ? "md:w-[450px]  bottom-0 z-10  md:left-[500px]"
                  ? "w-[280px] md:w-[350px] fixed bottom-0 z-10 "
                  : " md:w-[310px] fixed ml-4 z-10"
                }    `}
              style={{ marginBottom: `${preview ? "24px" : ""}` }}
            >
              <Link
                className="addTo"
                to={`${preview ? card?.vCard : ""}`}
                style={{
                  background: `${Highlightcolor
                      ? Highlightcolor
                      : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
                    }`,
                }}
              >
                Add to contacts
              </Link>
              <Link onClick={preview ? handleShare : ""}>
                <img src={share} alt="" />
                Share it{" "}
              </Link>
            </div>
            <div className="header">
              {/* <img src={logo} alt="logo zeeqr" />
                          <Link className="btn" to={"hhttps://zeeqr.com/"} target="_blank">Get your card</Link>  */}
            </div>
            <div className="logo" />
            {card?.checkPfCard ? (
              <div
                className="userDetails"
                style={{
                  background: `${Highlightcolor
                    ? Highlightcolor
                    : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
                    }`,
                }}
              >
                <div
                  className="text"
                  
                  style={{
                    width: `${!card?.checkLogo ? "max-content" : ""}`,
                    padding: `${!card?.checkLogo ? "10px 0 10px 20px" : " 0 0 0 20px"
                      }`,
                    color: "white",
                    fontWeight: "bold",
                    paddingLeft: "20px",
                    fontSize: `${array[0]?.length > 12 ||
                      array[1]?.length > 12 ||
                      array[2]?.length > 12
                      ? "20px"
                      : "25px"
                      }`,
                  }}
                >
                  {card?.name}
                  <div
                    className="text"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    {card?.companyDesignation
                    }
                  </div>
                </div>

                
                {card?.checkLogo ? (
                  <div className="companyLogo">
                    {card?.companyLogo ? (
                      <img
                        className="w-16"
                        src={
                          card?.companyLogo
                        }
                        alt=""
                      />
                    ) : (
                      <img src={defaultBackgroundImage} alt="" />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}




            {card?.about ? (
              <div className={`${!card?.checkPfCard ? "mt-20" : ""} `}>
                <div className="flex">
                  <h2>About {card?.aboutHeadline ? card?.aboutHeadline : '' }</h2>
                  <p
                    style={{
                      borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "#e71545"
                        }`,
                      height: "4px",
                      marginTop: "18px",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp;{" "}
                  </p>
                </div>
                <div className="about ">{card?.about}</div>
              </div>
            ) : (
              ""
            )}

            {/* ----------------------------------------------------------------------------------- */}

            {(card?.facebook && card?.SMediaPostion?.pos1) ||
              (card?.whatsappNumber && card?.SMediaPostion?.pos1) ||
              (card?.linkedin && card?.SMediaPostion?.pos1) ||
              (card?.instagram && card?.SMediaPostion?.pos1) ||
              (card?.twitter && card?.SMediaPostion?.pos1) ||
              (card?.skype && card?.SMediaPostion?.pos1) ||
              (card?.tiktok && card?.SMediaPostion?.pos1) ||
              (card?.youtube && card?.SMediaPostion?.pos1 )||
              (card?.snapchat && card?.SMediaPostion?.pos1) ||
              (card?.companyProfile && card?.SMediaPostion?.pos1) ? (
              <div
                className={`${!card?.checkPfCard && !card?.about ? "mt-20" : ""} `}
              >
                <div className="flex">
                  <h2>Social media links</h2>
                  <p
                    style={{
                      borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "#e71545"
                        }`,
                      height: "4px",
                      marginTop: "18px",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp;{" "}
                  </p>
                </div>
                <div className="flex">
                  {card?.SMediaPostion?.pos5 ?
                    <img
                      className="mb-8 cursor-pointer"
                      onClick={slideLeft}
                      src={leftarrow}
                      alt=""
                    /> : ''
                  }
                  <div
                    className="social-links overflow-x-scroll scrollbar-hide"
                    id="slider"
                  >
                    {card?.SMediaPostion?.pos1 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos1 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos1 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos1 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos1 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos1 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos1 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos1 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos1 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos1 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos2 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos2 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos2 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos2 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos2 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos2 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos2 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos2 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos2 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos2 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos3 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos3 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos3 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos3 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos3 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos3 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos3 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos3 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos3 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos3 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos4 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos4 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos4 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos4 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos4 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos4 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos4 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos4 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos4 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos4 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos5 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos5 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos5 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos5 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos5 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos5 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos5 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos5 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos5 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos5 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos6 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos6 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos6 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos6 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos6 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos6 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos6 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos6 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos6 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos6 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos7 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos7 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos7 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos7 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos7 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos7 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos7 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos7 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos7 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos7 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos8 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos8 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos8 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos8 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos8 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos8 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos8 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos8 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos8 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos8 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos9 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos9 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos9 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos9 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos9 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos9 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos9 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos9 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos9 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos9 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                    {card?.SMediaPostion?.pos10 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon
                        : ""
                      : card?.SMediaPostion?.pos10 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon
                          : ""
                        : card?.SMediaPostion?.pos10 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon
                            : ""
                          : card?.SMediaPostion?.pos10 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon
                              : ""
                            : card?.SMediaPostion?.pos10 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon
                                : ""
                              : card?.SMediaPostion?.pos10 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos10 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon
                                    : ""
                                  : card?.SMediaPostion?.pos10 === "youtube"
                                    ? card?.youtube
                                      ? YoutubeIcon
                                      : ""
                                    : card?.SMediaPostion?.pos10 === "snapchat"
                                      ? card?.snapchat
                                        ? SnapChatIcon
                                        : ""
                                      : card?.SMediaPostion?.pos10 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon
                                          : ""
                                        : ""}
                  </div>
                  {card?.SMediaPostion?.pos5 ?
                    <img
                      className="mb-8 cursor-pointer"
                      onClick={slideRight}
                      src={arrow}
                      alt=""
                    /> : ''}
                </div>
              </div>
            ) : (
              " "
            )}
            {/* ----------------------------------------------------------------------------------- */}



            <div
              className={`flex ${!card?.checkPfCard &&
                !card?.about &&
                !card?.SMediaPostion?.pos1
                ? "mt-20"
                : ""
                } `}
            >
              <h2>Contact Info</h2>
              <p
                style={{
                  borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "##e71545"
                    }`,
                  height: "4px",
                  marginTop: "18px",
                }}
              >
                &nbsp; &nbsp; &nbsp;{" "}
              </p>
            </div>
            <div className="contactOptions">
              <Link to={preview ? `tel:+${card?.phone}` : ""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{" "}
                </svg>
                +
                {card?.phone
                }
              </Link>
              <Link onClick={preview ? shareMail : ""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-envelope-open"
                  viewBox="0 0 13 20"
                >
                  {" "}
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />{" "}
                </svg>
                {card?.email
                }
              </Link>
              {card?.locationUrl ? (
                <Link
                  to={`${preview ? card?.locationUrl : ""}`}
                  target={`${preview ? "_blank" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 16.016c1.245.529 2 1.223 2 1.984 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.262 17.675 12 17l-.738.675zm1.476 0 .005-.005.012-.014.045-.05.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05.012.014.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {card?.address
                  }
                </Link>
              ) : (
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 16.016c1.245.529 2 1.223 2 1.984 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.262 17.675 12 17l-.738.675zm1.476 0 .005-.005.012-.014.045-.05.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05.012.014.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {card?.address
                  }
                </Link>
              )}
            </div>


            {card?.websiteImage ||
              card?.websiteName ||
              card?.websiteUrl ? (
              <div>
                <div className="flex">
                  <h2>Website</h2>
                  <p
                    style={{
                      borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "#e71545"
                        }`,
                      height: "4px",
                      marginTop: "18px",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp;{" "}
                  </p>
                </div>
                <div className="otherLinks">
                  <Link
                    to={`${preview ? card?.websiteUrl : ""}`}
                    target={`${preview ? "_blank" : ""}`}
                  >
                    <figure>
                      {card?.websiteImage ? (
                        <img
                          src={
                            card?.websiteImage
                          }
                          alt=""
                        />
                      ) : (
                        <img src={defaultBackgroundImage} alt="" />
                      )}
                    </figure>
                    <figcaption>
                      {card?.websiteName
                        ? card.websiteName
                        : "ZEEQR"}
                    </figcaption>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}



            {(card?.highlightPhotos[0].highlightPhotos1) ||
              (card?.highlightPhotos[0].highlightPhotos2) ||
              (card?.highlightPhotos[0].highlightPhotos3) ||
              (card?.highlightPhotos[0].highlightPhotos4) ||
              (card?.highlightPhotos[0].highlightPhotos5) ||
              (card?.highlightPhotos[0].highlightPhotos6) ||
              (card?.highlightPhotos[0].highlightPhotos7) ||
              (card?.highlightPhotos[0].highlightPhotos8) ? (
              card?.checkHighlight ? (
                <div>
                  <div className="flex">
                    <h2>Gallery</h2>
                    <p
                      style={{
                        borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "#e71545"
                          }`,
                        height: "4px",
                        marginTop: "18px",
                      }}
                    >
                      &nbsp; &nbsp; &nbsp;{" "}
                    </p>
                  </div>
                  <div className="photoGridModern">
                    {card?.highlightPhotos[0].highlightPhotos1 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos1
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos2 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos2
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos3 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos3
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos4 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos4
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos5 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos5
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos6 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos6
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos7 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos7
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {card?.highlightPhotos[0].highlightPhotos8 ? (
                      <img
                        className="mb-4"
                        src={
                          card?.highlightPhotos[0].highlightPhotos8
                        }
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}


          </div>
          <div className="footer flex flex-col items-center">
            {preview ? (
              <>
                <p>
                  Powered by{" "}
                  <Link to={"hhttps://zeeqr.com/"} target="_blank">
                  ZEEQR
                  </Link>
                </p>
                <Link to={"hhttps://zeeqr.com/"} target="_blank">
                  {" "}
                  <img className="w-18" src={ftLogo} alt="" />
                </Link>
              </>
            ) : (
              <>
                <p>
                  Powered by <Link> ZEEQR</Link>
                </p>
                <Link>
                  {" "}
                  <img className="w-18" src={ftLogo} alt="" />
                </Link>
              </>
            )}
          </div>
        {/* </div> */}
      </section>

      {qrModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                {/*body*/}
                <div
                  className="popup-containerModern justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
                  id="modal"
                >
                  <div className="userDetails">
                    <figure>
                      {card?.profileImage ? (
                        <img src={card?.profileImage} alt="" />
                      ) : (
                        <img src={defaultProfileImage} alt="" />
                      )}
                    </figure>
                    <div className="user">
                      <h1>
                        {card?.name}
                      </h1>
                      <p>
                        {" "}
                        {card?.companyDesignatio
                        }
                      </p>
                    </div>

                    <img
                      src={card?.QRCode}
                      className="my-qr-code"
                      width="200px"
                      alt=""
                    />
                    <p className="my-qr-download" onClick={handleDownload}>
                      Download QR Code
                    </p>
                    {!showResults ? (
                      <div
                        className="addToHomeModern"
                        onClick={onClick}
                        style={{
                          background: `${Highlightcolor
                            ? Highlightcolor
                            : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
                            }`,
                        }}
                      >
                        Add to Home Screen
                      </div>
                    ) : (
                      <img className="addtoHomeImageModern" src={addtoHome} alt="" />
                    )}
                  </div>

                  <button
                    className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    onClick={handleClose}
                    style={{
                      background: `${Highlightcolor
                        ? Highlightcolor
                        : "linear-gradient(90deg, #FE4F32 0%, #DD2474 100%)"
                        }`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
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

export default ModernTheme;
