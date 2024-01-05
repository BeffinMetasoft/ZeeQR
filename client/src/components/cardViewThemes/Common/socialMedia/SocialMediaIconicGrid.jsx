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
import { CardContext } from "../../../store/CardContext";

function SocialMediaIconicGrid({ preview }) {
  const [cardData] = useContext(CardContext)

  const { socialMedias } = cardData;

  const socialMediaSvg = [
    {
      name: "Facebook",
      icon: FaceBookIcon
    },
    {
      name: "Instagram",
      icon: InstagramIcon
    },
    {
      name: "Whatsapp",
      icon: WhatsAppIcon
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon
    },
    {
      name: "Twitter",
      icon: TwitterIcon
    },
    {
      name: "Youtube",
      icon: YoutubeIcon
    },
    {
      name: "Skype",
      icon: SkypeIcon
    },
    {
      name: "Snapchat",
      icon: SnapChatIcon
    },
    {
      name: "Tiktok",
      icon: TikTokIcon
    },
    {
      name: "Company Profile",
      icon: CompanyProfileIcon
    },
  ]

  const getDetailsByName = (socialMediaName) => {
    const socialMedia = socialMediaSvg.find(
      (option) => option.name.toLowerCase() === socialMediaName.toLowerCase()
    );
    return socialMedia ? socialMedia : null;
  };

 
  return (
    <div className="grid  grid-cols-2 items-center">
      <>
        {socialMedias?.map((media) => {
          const details = getDetailsByName(media?.platform)
          return (
            <Link
              to={`${preview ? (media.platform === 'Whatsapp' ? `https://wa.me/+${media?.link}?text=Hi%2C` : media?.link) : ""}`}
              target={`${preview ? "_blank" : ""}`}
            >
              <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
                <div className="flex items-center justify-center h-[54px]">
                  {details?.icon}
                </div>

                <p className="text-[14px] text-black font-medium text-center">
                  {details?.name}
                </p>
              </div>
            </Link>
          )
        })}
      </>
    </div>
  );
}

export default SocialMediaIconicGrid;
