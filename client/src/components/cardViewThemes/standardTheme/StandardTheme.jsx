import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StandardTheme.css";
import { saveAs } from "file-saver";
import ftLogo from "../../../assests/img/footer_logo.svg";
import share from "../../../assests/img/share_icon.svg";
import linkedin from "../../../assests/img/in_icon.svg";
import insta from "../../../assests/img/ig_icon.svg";
import fb from "../../../assests/img/fb_icon.svg";
import twitter from "../../../assests/img/twt_icon.svg";
import whatsapp from "../../../assests/img/wha_icon.svg";
import phn from "../../../assests/img/phone_icon.svg";
import mail from "../../../assests/img/mail_icon.svg";
import loc from "../../../assests/img/loc_icon.svg";
import { BsQrCodeScan } from "react-icons/bs";
import addtoHome from "../../../assests/img1/addtoHome.jpg";
import arrow from "../../../assests/img/more_icon.svg";
import leftarrow from "../../../assests/img1/left_arrow.svg";
import skype from "../../../assests/img1/skype_std.svg";
import youtube from "../../../assests/img1/youtube_std1.svg";
import snapchat from "../../../assests/img1/snapchat_std.svg";
import tiktok from "../../../assests/img1/tiktok.svg";
import companypfImage from "../../../assests/img1/companyProfile.svg";



const defaultBackgroundImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultBackground.jpg";
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function StandardTheme({ card, preview }) {
 

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
  let color

  return (
    <div>
      <section
        className="previewWrapStandard"
        style={{ backgroundColor: `${color ? color : "white"}` }}
      >
        {preview ? (
          <span
            className="qr-codeStandard fixed bottom-0 cursor-pointer center-0 z-10 ml-[330px] md:ml-[800px] border rounded-full  text-white p-2 my-6"
            style={{
              backgroundColor: `${Highlightcolor ? Highlightcolor : "black"}`,
            }}
            onClick={() => setQrModal(true)}
          >
            <BsQrCodeScan size={30} />
          </span>
        ) : (
          ""
        )}

        <div className="bannerImage">
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
        </div>
        <div
          className="previewContainerStandard"
          style={{ color: `${color === "black" ? "white" : "black"}` }}
        >
          <div className="header">
            {/* <img src={logo} alt="logo zeeqr" /> */}
            {/* <Link className="btn" to={"hhttps://zeeqr.com/"} target="_blank">Get your card</Link> */}
          </div>
          <div>
            {card?.checkPfCard ? (
              <div
                className={`userDetails ${!card?.checkProfile ? "flex flex-col jutify-center" : ""
                  }`}
                style={{
                  backgroundColor: `${Highlightcolor ? Highlightcolor : "black"
                    }`,
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
                  style={{
                    width: `${card?.checkProfile ? "calc(100% - 154px)" : ""}`,
                  }}
                >
                  <h1
                    style={{
                      width: `${!card?.checkProfile ? "max-content" : ""}`,
                      fontSize: `${array[0]?.length > 9 ||
                        array[1]?.length > 9 ||
                        array[2]?.length > 9
                        ? "20px"
                        : ""
                        }`,
                    }}
                  >
                    {" "}
                    {card?.name}
                  </h1>
                  <p>
                    {card?.companyDesignation
                    }
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            
            {card?.companyLogo ? (
              card?.checkLogo ? (
                <div className={`companyLogo ${!card?.checkPfCard ? "mt-12" : ""} `}>
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
            <div className={`buttons ${!card?.checkPfCard ? "mt-12" : ""} `}>
              <Link
                className="addTo"
                to={`${preview ? card?.vCard : ""}`}
                style={{
                  backgroundColor: `${Highlightcolor ? Highlightcolor : "black"
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
            {card?.about ? (
              <div>
                <div className="flex">
                  <h2>About {card?.aboutHeadline ? card?.aboutHeadline : '' }</h2>
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
                <div className="about ">{card?.about}</div>
              </div>
            ) : (
              ""
            )}

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
              <>
                <div className="flex">
                  <h2>Social media links</h2>
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
                <div className="flex">
                  {card?.SMediaPostion?.pos5 ? (
                    <img
                      className="mb-8 cursor-pointer"
                      onClick={slideLeft}
                      src={leftarrow}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <div
                    className="social-links overflow-x-scroll scrollbar-hide"
                    id="slider"
                  >
                    {card?.SMediaPostion?.pos1 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos1 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* -------------------------------------------------Position_2----------------------------------------------------- */}
                    {card?.SMediaPostion?.pos2 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos2 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* ------------------------------------------------Position_3-------------------------------------------------------- */}
                    {card?.SMediaPostion?.pos3 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos3 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* -------------------------------------------------Position_4------------------------------------------------------- */}
                    {card?.SMediaPostion?.pos4 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos4 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* ------------------------------------------------Position_5-------------------------------------------------------- */}
                    {card?.SMediaPostion?.pos5 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos5 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* ---------------------------------------------Position_6----------------------------------------------------------- */}
                    {card?.SMediaPostion?.pos6 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos6 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* --------------------------------------------------Position_7------------------------------------------------------ */}
                    {card?.SMediaPostion?.pos7 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos7 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* ----------------------------------------------------Position_8---------------------------------------------------- */}
                    {card?.SMediaPostion?.pos8 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos8 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {/* -----------------------------------------------------Position_9--------------------------------------------------- */}
                    {card?.SMediaPostion?.pos9 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos9 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}

                    {/* -----------------------------------------------------Position_10--------------------------------------------------- */}
                    {card?.SMediaPostion?.pos10 === "facebook" ? (
                      card?.facebook ? (
                        preview ? (
                          <Link
                            to={`${card?.facebook}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={fb} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "instagram" ? (
                      card?.instagram ? (
                        preview ? (
                          <Link
                            to={`${card?.instagram}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={insta} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "whatsappNumber" ? (
                      card?.whatsappNumber ? (
                        preview ? (
                          <Link
                            to={`https://wa.me/+${card?.whatsappNumber}?text=Hi%2C`}
                            target="_blank"
                          >
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={whatsapp} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "linkedin" ? (
                      card?.linkedin ? (
                        preview ? (
                          <Link
                            to={`${card?.linkedin}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={linkedin} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "twitter" ? (
                      card?.twitter ? (
                        preview ? (
                          <Link
                            to={`${card?.twitter}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={twitter} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "youtube" ? (
                      card?.youtube ? (
                        preview ? (
                          <Link
                            to={`${card?.youtube}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={youtube} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "skype" ? (
                      card?.skype ? (
                        preview ? (
                          <Link
                            to={`${card?.skype}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={skype} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "snapchat" ? (
                      card?.snapchat ? (
                        preview ? (
                          <Link
                            to={`${card?.snapchat}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={snapchat} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "tiktok" ? (
                      card?.tiktok ? (
                        preview ? (
                          <Link
                            to={`${card?.tiktok}`}
                            target="_blank"
                          >
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link>
                            {" "}
                            <img src={tiktok} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : card?.SMediaPostion?.pos10 === "companyProfile" ? (
                      card?.companyProfile ? (
                        preview ? (
                          <Link
                            to={`${card?.companyProfile}`}
                            target="_blank"

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        ) : (
                          <Link

                          >
                            {" "}
                            <img src={companypfImage} alt="" />{" "}
                          </Link>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}

                    {/* -------------------------------------------------------------------------------------------------------- */}
                  </div>
                  {card?.SMediaPostion?.pos5 ? (
                    <img
                      className="mb-8 cursor-pointer"
                      onClick={slideRight}
                      src={arrow}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              ""
            )}
            {/* ------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="flex">
              <h2>Contact Info</h2>
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
            <div className="contactOptions">
              <Link to={preview ? `tel:+${card?.phone}` : ""}>
                <img src={phn} alt="" />+
                {card?.phone
                }
                {/* <PhoneInput   disabled  value={''+ card.mobile}   disableDropdown   inputStyle={{width:'230px',border:'none',cursor:'text',height:'10px',fontSize:'16px'}} /> */}
              </Link>
              <Link onClick={preview ? shareMail : ""}>
                <img src={mail} alt="" />
                {card?.email
                }
              </Link>
              {card?.locationUrl ? (
                <Link
                  to={`${preview ? card?.locationUrl : ""}`}
                  target={`${preview ? "_blank" : ""}`}
                >
                  <img src={loc} alt="" />
                  {card?.address
                  }
                </Link>
              ) : (
                <Link>
                  <img src={loc} alt="" />
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
                      borderBottom: `3px solid ${Highlightcolor ? Highlightcolor : "black"
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
                      }
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
                      // <img className="mb-4" src={highlightPhotos1[0]?.thumbUrl} alt="" /> : ""}
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
        </div>
        <div
          className="footer flex flex-col items-center "
          style={{
            backgroundColor: `${color === "black" ? "white" : "black"}`,
          }}
        >
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
      </section>

      {qrModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                {/*body*/}
                <div
                  className="popup-containerStandard justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
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
                        className="addToHomeStandard"
                        onClick={onClick}
                        style={{
                          backgroundColor: `${Highlightcolor ? Highlightcolor : "black"
                            }`,
                        }}
                      >
                        Add to Home Screen
                      </div>
                    ) : (
                      <img className="addToHomeStandardImage" src={addtoHome} alt="" />
                    )}
                  </div>

                  <button
                    className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    onClick={handleClose}
                    style={{
                      backgroundColor: `${Highlightcolor ? Highlightcolor : "black"
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

export default StandardTheme;
