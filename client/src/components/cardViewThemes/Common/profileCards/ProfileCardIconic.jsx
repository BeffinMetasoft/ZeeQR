import React, { useContext } from "react";
import { defaultProfileImage } from "../DefaultImage";
import { Link } from "react-router-dom";
import { CardContext } from "../../../store/CardContext";

function ProfileCardIconic({ preview,Highlightcolor }) {
  const [cardData] = useContext(CardContext)
  const { profileImage, personalDetails,contactDetails,vCard, checkProfile } = cardData

  const array = personalDetails?.name ? personalDetails?.name?.split(" ") : "";
  return (
    <>
      <div className="iconictheme_profilecard flex items-end">
        <div className="ml-3 w-[127px]  border-[4px] border-white">
          {profileImage ? (
            <img
              src={profileImage}
              alt=""
            />
          ) : (
            <img src={defaultProfileImage} alt="" />
          )}
        </div>
        <div className="ml-2 grid pr-4 content-center">
          <p
            className="text-black font-bold text-[24px] mb-2"
            style={{
              width: `${!checkProfile ? "max-content" : ""}`,
              fontSize: `${
                array[0]?.length > 9 ||
                array[1]?.length > 9 ||
                array[2]?.length > 9
                  ? "20px"
                  : ""
              }`,
            }}
          >
            {" "}
            {personalDetails?.name ? personalDetails.name : "Name"}
          </p>
          <p className="text-black font-medium leading-5 pb-0 m-0 text-[14px]">
            {personalDetails?.companyDesignation
              ? personalDetails.companyDesignation
              : "Designation"}
          </p>
        </div>
      </div>
      <div className="pl-5 pr-5">
        <p className="text-black font-normal mt-5 leading-5  text-[14px]">
          {personalDetails?.about}
        </p>
      </div>
      <div className="flex items-center justify-center w-[100%] mt-5  gap-[10px] pl-5 pr-5">
      <Link className="flex w-6/12"
                to={`${preview ? contactDetails?.locationUrl : ""}`}
                target={`${preview ? "_blank" : ""}`}
               
              >
        <button
          className="bg-white flex items-center justify-center p-2 gap-3 w-full  h-[45px] rounded-[6px]"
          style={{
            border: "2px solid ",
            borderColor: `${Highlightcolor ? Highlightcolor : "black"}`,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2463 3.36842C18.6355 2.35759 17.6421 1.36426 16.6313 1.75342L2.46798 7.20009C1.33465 7.63509 1.42465 9.26676 2.59798 9.57509L8.44048 11.1126C8.54764 11.1407 8.6454 11.1968 8.72374 11.2752C8.80208 11.3535 8.85819 11.4513 8.88631 11.5584L10.4238 17.4001C10.7321 18.5743 12.3638 18.6634 12.7988 17.5309L18.2463 3.36842Z"
              fill={Highlightcolor ? Highlightcolor : "black"}
            />
          </svg>

          <p
            className=" text-[14px]  m-0 font-medium items-center"
            style={{
              color: `${Highlightcolor ? Highlightcolor : "black"}`,
            }}
          >
            Direction
          </p>
        </button>
        </Link>
        <Link
                  to={`${preview ? vCard : ""}`}
                  target={`${preview ? "_blank" : ""}`}
                  className="blk-btn w-6/12 flex"
                >
        <button
          className=" flex justify-center items-center p-2 gap-2 w-full h-[45px] rounded-[6px]"
          style={{
            border: "2px solid ",
            borderColor: `${Highlightcolor ? Highlightcolor : "black"}`,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.833 9.16683H10.833V4.16683C10.833 3.94582 10.7452 3.73385 10.5889 3.57757C10.4326 3.42129 10.2207 3.3335 9.99967 3.3335C9.77866 3.3335 9.5667 3.42129 9.41042 3.57757C9.25414 3.73385 9.16634 3.94582 9.16634 4.16683V9.16683H4.16634C3.94533 9.16683 3.73337 9.25463 3.57709 9.41091C3.42081 9.56719 3.33301 9.77915 3.33301 10.0002C3.33301 10.2212 3.42081 10.4331 3.57709 10.5894C3.73337 10.7457 3.94533 10.8335 4.16634 10.8335H9.16634V15.8335C9.16634 16.0545 9.25414 16.2665 9.41042 16.4228C9.5667 16.579 9.77866 16.6668 9.99967 16.6668C10.2207 16.6668 10.4326 16.579 10.5889 16.4228C10.7452 16.2665 10.833 16.0545 10.833 15.8335V10.8335H15.833C16.054 10.8335 16.266 10.7457 16.4223 10.5894C16.5785 10.4331 16.6663 10.2212 16.6663 10.0002C16.6663 9.77915 16.5785 9.56719 16.4223 9.41091C16.266 9.25463 16.054 9.16683 15.833 9.16683Z"
              fill={Highlightcolor ? Highlightcolor : "black"}
            />
          </svg>

          <p
            className="text-[14px] m-0 font-medium items-center"
            style={{
              color: `${Highlightcolor ? Highlightcolor : "black"}`,
            }}
          >
            Add contact
          </p>
        </button>
        </Link>
      </div>
    </>
  );
}

export default ProfileCardIconic;
