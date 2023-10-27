import React from "react";
import { Link } from "react-router-dom";
// import {websiteIcon } from "../Common/SvgIcon";

function GridWebsite({ website, preview }) {
  const websiteIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.4374 32.9297C25.6122 33.1039 25.7509 33.3109 25.8455 33.5388C25.9401 33.7667 25.9889 34.011 25.9889 34.2578C25.9889 34.5046 25.9401 34.7489 25.8455 34.9768C25.7509 35.2048 25.6122 35.4117 25.4374 35.5859L24.5093 36.5141C22.7505 38.2728 20.3652 39.2608 17.878 39.2608C15.3908 39.2608 13.0055 38.2728 11.2468 36.5141C9.48804 34.7553 8.5 32.37 8.5 29.8828C8.5 27.3956 9.48804 25.0103 11.2468 23.2516L15.0155 19.4844C16.7053 17.7904 18.9789 16.8066 21.3705 16.7346C23.7622 16.6625 26.0908 17.5077 27.8796 19.0969C28.0642 19.261 28.2148 19.4599 28.3226 19.6823C28.4304 19.9046 28.4933 20.146 28.5078 20.3926C28.5223 20.6393 28.4881 20.8864 28.4071 21.1198C28.3261 21.3533 28.2 21.5684 28.0358 21.7531C27.8717 21.9378 27.6727 22.0883 27.4504 22.1961C27.2281 22.3039 26.9867 22.3669 26.74 22.3814C26.4934 22.3959 26.2463 22.3617 26.0129 22.2807C25.7794 22.1997 25.5642 22.0735 25.3796 21.9094C24.3069 20.9568 22.9109 20.45 21.4769 20.4927C20.043 20.5354 18.6796 21.1243 17.6655 22.1391L13.8999 25.9016C12.8448 26.9566 12.2521 28.3876 12.2521 29.8797C12.2521 31.3718 12.8448 32.8027 13.8999 33.8578C14.9549 34.9129 16.3859 35.5056 17.878 35.5056C19.3701 35.5056 20.8011 34.9129 21.8561 33.8578L22.7843 32.9297C22.9584 32.7554 23.1652 32.6171 23.3928 32.5227C23.6204 32.4283 23.8644 32.3798 24.1108 32.3798C24.3572 32.3798 24.6012 32.4283 24.8288 32.5227C25.0564 32.6171 25.2632 32.7554 25.4374 32.9297ZM37.0124 10.7422C35.2522 8.98617 32.8674 8 30.3811 8C27.8948 8 25.51 8.98617 23.7499 10.7422L22.8218 11.6703C22.4695 12.0225 22.2716 12.5003 22.2716 12.9984C22.2716 13.4966 22.4695 13.9743 22.8218 14.3266C23.174 14.6788 23.6517 14.8767 24.1499 14.8767C24.648 14.8767 25.1258 14.6788 25.478 14.3266L26.4061 13.3984C27.4612 12.3434 28.8922 11.7506 30.3843 11.7506C31.8763 11.7506 33.3073 12.3434 34.3624 13.3984C35.4174 14.4535 36.0102 15.8845 36.0102 17.3766C36.0102 18.8686 35.4174 20.2996 34.3624 21.3547L30.5952 25.1234C29.5803 26.1378 28.216 26.7259 26.7817 26.7674C25.3474 26.8089 23.9515 26.3008 22.8796 25.3469C22.6949 25.1827 22.4797 25.0565 22.2463 24.9756C22.0128 24.8946 21.7657 24.8604 21.5191 24.8749C21.2724 24.8894 21.031 24.9523 20.8087 25.0601C20.5864 25.1679 20.3875 25.3184 20.2233 25.5031C20.0592 25.6878 19.933 25.903 19.852 26.1364C19.771 26.3699 19.7368 26.6169 19.7513 26.8636C19.7658 27.1103 19.8288 27.3516 19.9366 27.574C20.0444 27.7963 20.1949 27.9952 20.3796 28.1594C22.167 29.7482 24.4941 30.5939 26.8847 30.5233C29.2752 30.4527 31.5483 29.4712 33.2389 27.7797L37.0077 24.0125C38.7658 22.2528 39.7537 19.8673 39.7546 17.3799C39.7554 14.8924 38.7692 12.5063 37.0124 10.7453V10.7422Z"
        fill="black"
      />
    </svg>
  );
  return (
    <div  className="grid grid-cols-2 items-center">
      {website.map((websiteDetails, index) => {
        return websiteDetails?.websiteName ? (
          <Link
          key={index}
            to={`${preview ? websiteDetails?.websiteUrl : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
              <div className="flex items-center justify-center h-[54px]">
              {websiteIcon}
              </div>

              <p className="text-[11px] text-black font-medium text-center">
                {websiteDetails.websiteName}
              </p>
            </div>
          </Link>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default GridWebsite;
