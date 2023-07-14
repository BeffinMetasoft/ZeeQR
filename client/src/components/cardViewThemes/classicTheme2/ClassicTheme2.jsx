import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClassicTheme2.css";
import { saveAs } from "file-saver";
import { BsPlus, BsQrCodeScan, BsUpload } from "react-icons/bs";
import mailiconw from "../../../assests/img1/mail_icon_white.svg";
import phoneiconw from "../../../assests/img1/phone_icon_white.svg";
import messageiconw from "../../../assests/img1/message_icon_white.svg";
import whatsappiconw from "../../../assests/img1/whatsapp_icon_white.svg";
import arrowIcon from "../../../assests/img1/arrow_white.svg";
import fbIcon from "../../../assests/img1/fb_icon_1.svg";
import instaIcon from "../../../assests/img1/insta_icon_1.svg";
import inIcon from "../../../assests/img1/in_icon_1.svg";
import whtsIcon from "../../../assests/img1/what_icon_1.svg";
import webIcon from "../../../assests/img1/Subtract_white.svg";
import addtoHome from "../../../assests/img1/addtoHome.jpg";
import skype from "../../../assests/img1/skype_icon.svg";
import youtube from "../../../assests/img1/youtube.svg";
import snapchat from "../../../assests/img1/snapchat.svg";
import twitter from "../../../assests/img1/twitter.png";
import tiktok from "../../../assests/img1/tiktok.png";
import companypfImage from "../../../assests/img1/companyProfile_clss.svg";


const defaultBackgroundImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function ClassicTheme2({ card, preview }) {


  const [qrModal, setQrModal] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: "Please check it out.",
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

  const Highlightcolor = card?.colorCode ? card?.colorCode : "";
  const Textcolor = card?.textColor ? card?.textColor : "";;
  const Iconcolor = card?.iconBgColor ? card?.iconBgColor : "";
  const BgColor = card?.bgColor ? card?.bgColor : "";

  const shareMail = (e) => {
    window.location = `mailto:${card?.email}`;
    e.preventDefault();
  };

  const array = card?.name ? card?.name?.split(" ") : "";

  //--------------------------------------FaceBookIcon1-----------------------------------------------

  const FaceBookIcon1 = (
    <Link
      to={`${preview ? card?.facebook : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={fbIcon} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Facebook
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Facebook
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------InstagramIcon1-----------------------------------------------
  const InstagramIcon1 = (
    <Link
      to={`${preview ? card?.instagram : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={instaIcon} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Instagram
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Instagram
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------WhatsAppIcon1-----------------------------------------------
  const WhatsAppIcon1 = (
    <Link
      to={`https://wa.me/+${preview ? card?.whatsappNumber : ""
        }?text=Hi%2C`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={whtsIcon} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        WhatsApp
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on WhatsApp
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------LinkedInIcon1-----------------------------------------------
  const LinkedInIcon1 = (
    <Link
      to={`${preview ? card?.linkedin : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={inIcon} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        LinkedIn
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on LinkedIn
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------TwitterIcon1-----------------------------------------------
  const TwitterIcon1 = (
    <Link
      to={`${preview ? card?.twitter : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={twitter} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Twitter
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Twitter
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------YoutubeIcon1-----------------------------------------------
  const YoutubeIcon1 = (
    <Link
      to={`${preview ? card?.youtube : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={youtube} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        youtube
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Youtube
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------SkypeIcon1-----------------------------------------------
  const SkypeIcon1 = (
    <Link
      to={`${preview ? card?.skype : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={skype} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Skype
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Skype
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------SnapChatIcon1-----------------------------------------------
  const SnapChatIcon1 = (
    <Link
      to={`${preview ? card?.snapchat : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={snapchat} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Snapchat
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Snapchat
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------TikTokIcon1-----------------------------------------------
  const TikTokIcon1 = (
    <Link
      to={`${preview ? card?.tiktok : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={tiktok} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Tiktok
        <span style={{ color: `${Textcolor ? Textcolor : ""}`, opacity: ".8" }}>
          Follow me on Tiktok
        </span>
      </h5>
    </Link>
  );
  //--------------------------------------CompanyProfileIcon1-----------------------------------------------
  const CompanyProfileIcon1 = (
    <Link
      to={`${preview ? card?.companyProfile : ""}`}
      target={`${preview ? "_blank" : ""}`}
    >
      <img src={companypfImage} alt="" />
      <h5
        style={{
          color: `${Textcolor ? Textcolor : ""}`,
        }}
      >
        Company Profile
      </h5>
    </Link>
  );
  //------------------------------------------------------------------------------------------------------

  //--------------------------------------FaceBookIcon-----------------------------------------------

  const FaceBookIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div style={{ marginBottom: "1px" }}>
          <Link
            to={`${preview ? card?.facebook : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={fbIcon} alt="" />
            <div>
              <h5
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                }}
              >
                Facebook <span>Follow me on Facebook</span>
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------InstagramIcon-----------------------------------------------
  const InstagramIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.instagram : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={instaIcon} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Instagram
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Instagram
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------WhatsAppIcon-----------------------------------------------
  const WhatsAppIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`https://wa.me/+${preview ? card?.whatsappNumber : ""
              }?text=Hi%2C`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={whtsIcon} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              WhatsApp
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on WhatsApp
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------LinkedInIcon-----------------------------------------------
  const LinkedInIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.linkedin : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={inIcon} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              LinkedIn
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on LinkedIn
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------TwitterIcon-----------------------------------------------
  const TwitterIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.twitter : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={twitter} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Twitter
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Twitter
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------YoutubeIcon-----------------------------------------------
  const YoutubeIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.youtube : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={youtube} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              youtube
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Youtube
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------SkypeIcon-----------------------------------------------
  const SkypeIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.skype : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={skype} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Skype
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Skype
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------SnapChatIcon-----------------------------------------------
  const SnapChatIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.snapchat : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={snapchat} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Snapchat
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Snapchat
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------TikTokIcon-----------------------------------------------
  const TikTokIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.tiktok : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={tiktok} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Tiktok
              <span
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  opacity: ".8",
                }}
              >
                Follow me on Tiktok
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //--------------------------------------CompanyProfileIcon-----------------------------------------------
  const CompanyProfileIcon = (
    <div
      className="contactOptions2"
      style={{
        backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
      }}
    >
      <div className="social-media2" style={{ display: "block" }}>
        <div>
          <Link
            to={`${preview ? card?.companyProfile : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <img src={companypfImage} alt="" />
            <h5
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              Company Profile
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
  //------------------------------------------------------------------------------------------------------
  return (
    <div>
      {/* <Helmet>
        <title class="notranslate" >{card?.name}</title>
        <link rel="icon" href={profileImage[0]?.thumbUrl} />
        <link rel="apple-touch-icon" sizes="144x144" href={profileImage[0]?.thumbUrl} ></link>
        <meta name="description" class="notranslate" content={card?.companyDesignation} />
        <meta property="og:title" class="notranslate" content={card?.name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" class="notranslate" content={card?.companyDesignation} />
        <meta property="og:image" content={profileImage[0]?.thumbUrl} />
      </Helmet> */}

      <section
        className="previewWrap2"
        style={{
          backgroundSize: "100%",
          backgroundPosition: "center 150px",
          backgroundColor: `${BgColor ? BgColor : "#0a0f29"}`,
        }}
      >
        {preview ? (
          <>
            <span
              style={{
                backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
              }}
              className="qr-code1"
              onClick={() => setQrModal(true)}
            >
              <BsQrCodeScan size={22} color={Textcolor} />
            </span>
            <Link
              style={{
                backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
              }}
              className="share"
              onClick={handleShare}
            >
              {/* <img src={shareIcon} alt="" /> */}
              <BsUpload size={23} color={Textcolor} />
            </Link>
            {/* <Link style={{
                  backgroundColor: `${Iconcolor ? Iconcolor : ""
                    }`}} className="addToContact" to={`${vCard}`}>
              <img src={addIcon} alt="" />
            </Link> */}
            <Link
              className="addToContact flex"
              to={`${card?.vCard}`}
              style={{ backgroundColor: `${Iconcolor ? Iconcolor : ""}` }}
            >
              <p
                className="w-12 ml-6 my-2 text-white text-sm"
                style={{ color: `${Textcolor ? Textcolor : ""}` }}
              >
                Add to Contacts
              </p>
              <div
                className="ml-6 rounded-full   my-2 p-2 w-10 h-10"
                src=""
                alt=""
                style={{ backgroundColor: `${Textcolor ? Textcolor : ""}` }}
              >
                <BsPlus size={23} color={Iconcolor} />
              </div>
            </Link>
          </>
        ) : (
          ""
        )}

        <div className="bannerImage2">
          {card?.backgroundImage ? (
            <img
              src={
                card?.backgroundImage
              }
              alt=""
            />
          ) : (
            <img src={defaultBackgroundImage} alt="" />
          )}
          {/* <img src={card.backgroundImage ? card.backgroundImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg' } alt='' /> */}
        </div>
        <div className="previewContainer2">
          <div className="header"></div>
          {card?.checkPfCard ? (
            <div
              className={`userDetails ${!card?.checkProfile ? "flex flex-col jutify-center" : ""
                }`}
              style={{
                backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
              }}
            >
              {card?.checkProfile ? (
                <figure>
                  {card?.profileImage ? (
                    <img
                      src={
                        card?.profileImage
                      }
                      alt=""
                    />
                  ) : (
                    <img src={defaultProfileImage} alt="" />
                  )}
                </figure>
              ) : (
                ""
              )}
              <div
                className="user"
                style={{ width: `${card?.checkProfile ? "calc(100% - 122px)" : ""}` }}
              >
                <h1
                  style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                    width: `${!card?.checkProfile ? "max-content" : ""}`,
                    fontSize: `${array[0]?.length > 12 ||
                      array[1]?.length > 12 ||
                      array[2]?.length > 12
                      ? "20px"
                      : ""
                      }`,
                  }}
                >
                  {" "}
                  {card?.name}
                </h1>
                <p
                  style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                  }}
                >
                  {card?.companyDesignation}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {card?.companyLogo ? (
            card?.checkLogo ? (
              <div className="companyLogo ">
                <img
                  src={
                    card?.companyLogo
                  }
                  alt=""
                />
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <div
            className="social-links"
            style={{
              backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
            }}
          >
            <Link
              style={{
                backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
              }}
              onClick={preview ? shareMail : ""}
            >
              <img src={mailiconw} alt="" />
            </Link>
            <Link
              style={{
                backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
              }}
              to={preview ? `tel:+${card?.phone}` : ""}
            >
              <img src={phoneiconw} alt="" />
            </Link>
            <Link
              style={{
                backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
              }}
              to={preview ? `sms:+${card?.phone}` : ""}
            >
              <img src={messageiconw} alt="" />
            </Link>
            {preview ? (
              <Link
                style={{
                  backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                }}
                to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                target="_blank"
              >
                <img src={whatsappiconw} alt="" />
              </Link>
            ) : (
              <Link
                style={{
                  backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                }}
              >
                <img src={whatsappiconw} alt="" />
              </Link>
            )}
          </div>

          {card?.about ? (
            <div
              className="contactOptions2"
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
                backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
              }}
            >
              <h2>About Me</h2>
              <p>{card?.about}</p>
            </div>
          ) : (
            ""
          )}

          <div
            className="contactOptions2"
            style={{
              color: `${Textcolor ? Textcolor : ""}`,
              backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
            }}
          >
            <h2>
              <span
                style={{
                  backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                }}
              >
                <img src={phoneiconw} alt="" />
              </span>{" "}
              Contact Me
            </h2>
            <h3>Call</h3>
            <Link
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
              to={preview ? `tel:+${card?.phone}` : ""}
            >
              +{card?.phone}
            </Link>
            <h3>Email</h3>
            <Link
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
              onClick={preview ? shareMail : ""}
            >
              {card?.email}
            </Link>
            <h3>Location</h3>
            <Link
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
              }}
            >
              {" "}
              {card?.address}
            </Link>
            {card?.locationUrl ? (
              <Link
                style={{
                  color: `${Textcolor ? Textcolor : ""}`,
                  backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                }}
                to={`${preview ? card?.locationUrl : ""}`}
                target={`${preview ? "_blank" : ""}`}
                className="blk-btn"
              >
                <img src={arrowIcon} alt="" />
                Direction
              </Link>
            ) : (
              ""
            )}
          </div>

          {/* ------------------------------------------------------------------------------------------------------------------------------- */}

          {(card?.facebook && card?.SMediaPostion?.pos1) ||
            (card?.whatsappNumber && card?.SMediaPostion?.pos1) ||
            (card?.linkedin && card?.SMediaPostion?.pos1) ||
            (card?.instagram && card?.SMediaPostion?.pos1) ||
            (card?.twitter && card?.SMediaPostion?.pos1) ||
            (card?.skype && card?.SMediaPostion?.pos1) ||
            (card?.tiktok && card?.SMediaPostion?.pos1) ||
            (card?.youtube && card?.SMediaPostion?.pos1) ||
            (card?.snapchat && card?.SMediaPostion?.pos1) ||
            (card?.companyProfile && card?.SMediaPostion?.pos1) ? (
            <div>
              <div
                className="contactOptions2"
                style={{
                  backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
                }}
              >
                <div className="social-media2" style={{ display: "block" }}>
                  <div
                    style={{
                      color: `${Textcolor ? Textcolor : ""}`,
                      marginBottom: "15px",
                    }}
                  >
                    <h4>Social Media</h4>
                  </div>
                  <div>
                    {card?.SMediaPostion?.pos1 === "facebook"
                      ? card?.facebook
                        ? FaceBookIcon1
                        : ""
                      : card?.SMediaPostion?.pos1 === "instagram"
                        ? card?.instagram
                          ? InstagramIcon1
                          : ""
                        : card?.SMediaPostion?.pos1 === "whatsappNumber"
                          ? card?.whatsappNumber
                            ? WhatsAppIcon1
                            : ""
                          : card?.SMediaPostion?.pos1 === "linkedin"
                            ? card?.linkedin
                              ? LinkedInIcon1
                              : ""
                            : card?.SMediaPostion?.pos1 === "twitter"
                              ? card?.twitter
                                ? TwitterIcon1
                                : ""
                              : card?.SMediaPostion?.pos1 === "youtube"
                                ? card?.youtube
                                  ? YoutubeIcon1
                                  : ""
                                : card?.SMediaPostion?.pos1 === "skype"
                                  ? card?.skype
                                    ? SkypeIcon1
                                    : ""
                                  : card?.SMediaPostion?.pos1 === "snapchat"
                                    ? card?.snapchat
                                      ? SnapChatIcon1
                                      : ""
                                    : card?.SMediaPostion?.pos1 === "tiktok"
                                      ? card?.tiktok
                                        ? TikTokIcon1
                                        : ""
                                      : card?.SMediaPostion?.pos1 === "companyProfile"
                                        ? card?.companyProfile
                                          ? CompanyProfileIcon1
                                          : ""
                                        : ""}
                  </div>
                </div>
              </div>

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
                        : card?.SMediaPostion?.pos2 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos2 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos2 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos2 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos3 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos3 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos3 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos3 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos4 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos4 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos4 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos4 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos5 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos5 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos5 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos5 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos6 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos6 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos6 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos6 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos7 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos7 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos7 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos7 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos8 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos8 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos8 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos8 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos9 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos9 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos9 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos9 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
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
                        : card?.SMediaPostion?.pos10 === "youtube"
                          ? card?.youtube
                            ? YoutubeIcon
                            : ""
                          : card?.SMediaPostion?.pos10 === "skype"
                            ? card?.skype
                              ? SkypeIcon
                              : ""
                            : card?.SMediaPostion?.pos10 === "snapchat"
                              ? card?.snapchat
                                ? SnapChatIcon
                                : ""
                              : card?.SMediaPostion?.pos10 === "tiktok"
                                ? card?.tiktok
                                  ? TikTokIcon
                                  : ""
                                : card?.SMediaPostion?.pos10 === "companyProfile"
                                  ? card?.companyProfile
                                    ? CompanyProfileIcon
                                    : ""
                                  : ""}
            </div>
          ) : (
            ""
          )}

          {card?.websiteImage ||
            card?.websiteName ||
            card?.websiteUrl || card?.website?.length > 0 ? (
            <div
              className="contactOptions2"
              style={{
                color: `${Textcolor ? Textcolor : ""}`,
                backgroundColor: `${Highlightcolor ? Highlightcolor : ""}`,
              }}
            >
              <h4 >Website</h4>
              {card?.websiteName &&
                card?.websiteUrl ?
                <div className="social-media2 ">
                  <Link
                  className="mb-5"
                    to={`${preview ? card?.websiteUrl : ""}`}
                    target={`${preview ? "_blank" : ""}`}
                  >
                    <img
                      className="rounded-full p-2 "
                      src={webIcon}
                      alt=""
                      style={{
                        backgroundColor: `${Iconcolor ? Iconcolor : "black"}`,
                      }}
                    />

                    <h5
                      style={{
                        color: `${Textcolor ? Textcolor : ""}`,
                      }}
                    >
                      {" "}
                      {card?.websiteName}
                    </h5>
                  </Link>
                </div>
                : ''
              }
              {card?.website?.map(webData => <div className="social-media2">
                <Link to={`${preview ? webData?.websiteUrl : ''}`} target={`${preview ? "_blank" : ''}`} className="mb-5" >
                  <img
                    className="rounded-full p-2 "
                    src={webIcon}
                    alt=""
                    style={{
                      backgroundColor: `${Iconcolor ? Iconcolor : "black"}`,
                    }}
                  />
                  <h5 style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                  }}> {webData?.websiteName ? webData.websiteName : "Website Name"}</h5>
                </Link>
              </div>)}
            </div>
          ) : (
            ""
          )}

          {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {(card?.highlightPhotos[0].highlightPhotos1) ||
            (card?.highlightPhotos[0].highlightPhotos2) ||
            (card?.highlightPhotos[0].highlightPhotos3) ||
            (card?.highlightPhotos[0].highlightPhotos4) ? (
            card?.checkHighlight ? (
              <div>
                <div className="flex">
                  <h2
                    style={{
                      color: `${Textcolor ? Textcolor : ""}`,
                    }}
                  >
                    Gallery
                  </h2>
                  <p
                    style={{
                      borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "black"
                        }`,
                      height: "4px",
                      marginTop: "18px",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp;{" "}
                  </p>
                </div>
                <div className="photoGrid">
                  {card?.highlightPhotos[0].highlightPhotos1 ? (
                    <img
                      className="mb-4"
                      src={
                        card?.highlightPhotos[0].highlightPhotos1}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {card?.highlightPhotos[0].highlightPhotos2 ? (
                    <img
                      className="mb-4"
                      src={
                        card?.highlightPhotos[0].highlightPhotos2}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {card?.highlightPhotos[0].highlightPhotos3 ? (
                    <img
                      className="mb-4"
                      src={
                        card?.highlightPhotos[0].highlightPhotos3}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {card?.highlightPhotos[0].highlightPhotos4 ? (
                    <img
                      className="mb-4"
                      src={
                        card?.highlightPhotos[0].highlightPhotos4}
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
      </section>

      {qrModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                {/*body*/}
                <div
                  className="popup-container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
                  id="modal"
                >
                  <div className="w-full" style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                    backgroundColor: `${Highlightcolor ? Highlightcolor : ""
                      }`
                  }}>
                    <div className="userDetails">
                      <figure>
                        {card?.profileImage ? (
                          <img src={card?.profileImage} alt="" />
                        ) : (
                          <img src={defaultProfileImage} alt="" />
                        )}
                        {/* <img src={card.profileImage} alt='' /> */}
                      </figure>
                      <div className="user">
                        <h1 style={{ color: `${Textcolor ? Textcolor : ""}` }}>
                          {card?.name}
                        </h1>
                        <p style={{ color: `${Textcolor ? Textcolor : ""}` }}>
                          {" "}
                          {card?.companyDesignation}
                        </p>
                      </div>
                      <img
                        src={card?.QRCode}
                        className="my-qr-code p-3 bg-white  border-2 rounded-xl border-black"
                        width="200px"
                        alt=""
                      />
                      <p className="my-qr-download" onClick={handleDownload}>
                        Download QR Code
                      </p>
                      {!showResults ? (
                        <div
                          className="addToHome"
                          onClick={onClick}
                          style={{
                            color: `${Textcolor ? Textcolor : ""}`,
                            backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                          }}
                        >
                          Add to Home Screen
                        </div>
                      ) : (
                        <img
                          className="addtoHomeImage"
                          src={addtoHome}
                          alt=""
                        />
                      )}
                    </div>

                    <button
                      style={{
                        backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                      }}
                      className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                      onClick={handleClose}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke={Textcolor}
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
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default ClassicTheme2;