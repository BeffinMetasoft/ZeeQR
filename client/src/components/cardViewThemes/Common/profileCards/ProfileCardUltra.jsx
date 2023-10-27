import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../../store/CardContext";
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";
function ProfileCardUltra({ preview }) {
  const [cardData] = useContext(CardContext)

  const { profileImage, personalDetails, checkProfile, contactDetails } =cardData
  const array = personalDetails?.name ? personalDetails?.name?.split(" ") : "";

  const handleShare = () => {
    if (navigator.share&& preview) {
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
  return (
    <div className="flex gap-2 m-[15px]">
      {checkProfile ? (
        <div className="rounded-[8px] overflow-hidden">
          {profileImage[0]?.thumbUrl &&
          profileImage[0]?.status !== "removed" ? (
            <img
              className="w-[150px] m-w-[150px] rounded-[8px]"
              src={
                profileImage[0]?.originFileObj?.type
                  ? URL.createObjectURL(profileImage[0]?.originFileObj)
                  : profileImage[0].thumbUrl
              }
              alt=""
            />
          ) : (
            <img src={defaultProfileImage} alt="" className="w-[150px] m-w-[150px] rounded-[8px]" />
          )}
        </div>
      ) : (
        ""
      )}
      <div className="justify-start flex items-end ml-0 w-100">
        <div>
          <h1
            style={{
              width: `${!checkProfile ? "max-content" : ""}`,
              fontSize: `${
                array[0]?.length > 12 ||
                array[1]?.length > 12 ||
                array[2]?.length > 12
                  ? "16px"
                  : "16px"
              }`, lineHeight: "22px"
            }}
          >
            {" "}
            {personalDetails?.name ? personalDetails.name : "Name"}
          </h1>
          <p className="text-[12px]">
            {personalDetails?.companyDesignation
              ? personalDetails.companyDesignation
              : "Designation"}
          </p>
          <div className="flex gap-2">
            <div className="flex gap-2 h-[40px] border-r cursor-pointer border-black justify-center items-center" onClick={handleShare}>
              <button className="transparent border-black border p-2 rounded-[8px]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.8833 12.0083 16.7623 12.025 16.637C12.0417 16.5117 12.0667 16.3993 12.1 16.3L5.05 12.2C4.76667 12.45 4.45 12.646 4.1 12.788C3.75 12.93 3.38333 13.0007 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.38333 7 3.75 7.071 4.1 7.213C4.45 7.355 4.76667 7.55067 5.05 7.8L12.1 3.7C12.0667 3.6 12.0417 3.48767 12.025 3.363C12.0083 3.23833 12 3.11733 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6167 6 14.25 5.92933 13.9 5.788C13.55 5.64667 13.2333 5.45067 12.95 5.2L5.9 9.3C5.93333 9.4 5.95833 9.51267 5.975 9.638C5.99167 9.76333 6 9.884 6 10C6 10.1167 5.99167 10.2377 5.975 10.363C5.95833 10.4883 5.93333 10.6007 5.9 10.7L12.95 14.8C13.2333 14.55 13.55 14.3543 13.9 14.213C14.25 14.0717 14.6167 14.0007 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className="text-[11px] font-semibold leading-4 w-[29px] mr-[15px] mt-2">
                Share Profile
              </p>
            </div>
            <Link className="flex gap-2 h-[40px] "
                to={`${preview ? contactDetails?.locationUrl : ""}`}
                target={`${preview ? "_blank" : ""}`}
               
              >
            <div className="flex gap-2 justify-center items-center">
              <button className="transparent border-black border p-2 rounded-[8px]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.53086 1.31436C9.74715 0.752506 9.19507 0.200382 8.63326 0.416693L0.761457 3.44411C0.131565 3.68589 0.181586 4.59282 0.833709 4.7642L4.0809 5.61879C4.14046 5.63443 4.19479 5.66561 4.23833 5.70916C4.28187 5.7527 4.31305 5.80703 4.32869 5.8666L5.18321 9.11357C5.35458 9.7662 6.26144 9.81576 6.5032 9.18629L9.53086 1.31436Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className="text-[11px] font-semibold  w-[29px] mr-[10px] leading-4 mt-2">
                Get Direction
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCardUltra;
