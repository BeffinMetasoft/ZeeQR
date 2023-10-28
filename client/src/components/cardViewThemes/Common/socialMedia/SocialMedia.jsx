import React, { useContext } from 'react'
import { CardContext } from '../../../store/CardContext';
// import { useSelector } from 'react-redux';

function SocialMedia({data}) {
  const [cardData] = useContext(CardContext)

const {FaceBookIcon,InstagramIcon,WhatsAppIcon,LinkedInIcon,TwitterIcon,YoutubeIcon,SkypeIcon,SnapChatIcon,TikTokIcon,CompanyProfileIcon}=data
    const { socialMediaDetails,SMediaPostion}= cardData
  return (
    <>
         {SMediaPostion?.pos1 === "facebook"
                      ? socialMediaDetails?.facebook
                        ? FaceBookIcon
                        : ""
                      : SMediaPostion?.pos1 === "instagram"
                      ? socialMediaDetails?.instagram
                        ? InstagramIcon
                        : ""
                      : SMediaPostion?.pos1 === "whatsappNumber"
                      ? socialMediaDetails?.whatsappNumber
                        ? WhatsAppIcon
                        : ""
                      : SMediaPostion?.pos1 === "linkedin"
                      ? socialMediaDetails?.linkedin
                        ? LinkedInIcon
                        : ""
                      : SMediaPostion?.pos1 === "twitter"
                      ? socialMediaDetails?.twitter
                        ? TwitterIcon
                        : ""
                      : SMediaPostion?.pos1 === "youtube"
                      ? socialMediaDetails?.youtube
                        ? YoutubeIcon
                        : ""
                      : SMediaPostion?.pos1 === "skype"
                      ? socialMediaDetails?.skype
                        ? SkypeIcon
                        : ""
                      : SMediaPostion?.pos1 === "snapchat"
                      ? socialMediaDetails?.snapchat
                        ? SnapChatIcon
                        : ""
                      : SMediaPostion?.pos1 === "tiktok"
                      ? socialMediaDetails?.tiktok
                        ? TikTokIcon
                        : ""
                      : SMediaPostion?.pos1 === "companyProfile"
                      ? socialMediaDetails?.companyProfile
                        ? CompanyProfileIcon
                        : ""
                      : ""}
        {SMediaPostion?.pos2 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos2 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos2 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos2 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos2 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos2 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos2 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos2 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos2 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos2 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos3 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos3 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos3 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos3 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos3 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos3 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos3 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos3 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos3 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos3 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos4 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos4 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos4 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos4 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos4 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos4 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos4 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos4 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos4 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos4 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos5 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos5 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos5 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos5 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos5 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos5 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos5 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos5 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos5 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos5 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos6 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos6 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos6 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos6 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos6 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos6 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos6 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos6 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos6 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos6 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos7 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos7 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos7 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos7 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos7 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos7 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos7 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos7 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos7 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos7 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos8 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos8 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos8 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos8 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos8 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos8 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos8 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos8 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos8 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos8 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos9 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos9 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos9 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos9 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos9 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos9 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos9 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos9 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos9 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos9 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}

              {SMediaPostion?.pos10 === "facebook"
                ? socialMediaDetails?.facebook
                  ? FaceBookIcon
                  : ""
                : SMediaPostion?.pos10 === "instagram"
                ? socialMediaDetails?.instagram
                  ? InstagramIcon
                  : ""
                : SMediaPostion?.pos10 === "whatsappNumber"
                ? socialMediaDetails?.whatsappNumber
                  ? WhatsAppIcon
                  : ""
                : SMediaPostion?.pos10 === "linkedin"
                ? socialMediaDetails?.linkedin
                  ? LinkedInIcon
                  : ""
                : SMediaPostion?.pos10 === "twitter"
                ? socialMediaDetails?.twitter
                  ? TwitterIcon
                  : ""
                : SMediaPostion?.pos10 === "youtube"
                ? socialMediaDetails?.youtube
                  ? YoutubeIcon
                  : ""
                : SMediaPostion?.pos10 === "skype"
                ? socialMediaDetails?.skype
                  ? SkypeIcon
                  : ""
                : SMediaPostion?.pos10 === "snapchat"
                ? socialMediaDetails?.snapchat
                  ? SnapChatIcon
                  : ""
                : SMediaPostion?.pos10 === "tiktok"
                ? socialMediaDetails?.tiktok
                  ? TikTokIcon
                  : ""
                : SMediaPostion?.pos10 === "companyProfile"
                ? socialMediaDetails?.companyProfile
                  ? CompanyProfileIcon
                  : ""
                : ""}
    </>
  )
}

export default SocialMedia