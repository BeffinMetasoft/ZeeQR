import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaceBookIcon,
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
  SkypeIcon,
  SnapChatIcon,
  TikTokIcon,
  CompanyProfileIcon,
} from "../SvgIcon";
import SocialMedia from "./SocialMedia";
import { CardContext } from "../../../store/CardContext";

function SocialMediaGrid({ preview }) {
  const [cardData] = useContext(CardContext)
  const { socialMediaDetails } = cardData

  const data = {
    FaceBookIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.facebook : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {FaceBookIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            FaceBook
          </p>
        </div>
      </Link>
    ),
    InstagramIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.instagram : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {InstagramIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            Instagram
          </p>
        </div>
      </Link>
    ),
    WhatsAppIcon: (
      <Link
        to={`https://wa.me/+${
            preview ? socialMediaDetails?.whatsappNumber : ""
          }?text=Hi%2C`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {WhatsAppIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            WhatsApp
          </p>
        </div>
      </Link>
    ),
    LinkedInIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.linkedin : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {LinkedInIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            LinkedIn
          </p>
        </div>
      </Link>
    ),
    TwitterIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.twitter : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {TwitterIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            Twitter
          </p>
        </div>
      </Link>
    ),
    YoutubeIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.youtube : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {YoutubeIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            Youtube
          </p>
        </div>
      </Link>
    ),
    SkypeIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.skype : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {SkypeIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            Skype
          </p>
        </div>
      </Link>
    ),
    SnapChatIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.snapchat : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {SnapChatIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            SnapChat
          </p>
        </div>
      </Link>
    ),
    TikTokIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.tiktok : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {TikTokIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            TikTok
          </p>
        </div>
      </Link>
    ),
    CompanyProfileIcon: (
      <Link
        to={`${preview ? socialMediaDetails?.companyProfile : ""}`}
        target={`${preview ? "_blank" : ""}`}
      >
        <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
          <div className="flex items-center justify-center h-[54px]">
            {CompanyProfileIcon}
          </div>

          <p className="text-[14px] text-black font-medium text-center">
            Company Profile
          </p>
        </div>
      </Link>
    ),
  };

  return (
    <div className="grid  grid-cols-2 items-center">
        <>
        <SocialMedia data={data} />
      </>
    </div>
  );
}

export default SocialMediaGrid;
