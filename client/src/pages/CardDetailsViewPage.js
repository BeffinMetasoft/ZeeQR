import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addLocation, cardProfile } from '../api/UserRequest'
import logo from '../assests/zeeqr-black.svg'
// import zeeqrLoder from '../assests/Zeeqr Loading.gif'
import ClassicTheme from '../components/cardDetailView1/classicTheme/ClassicTheme'
import { Helmet } from "react-helmet";

import ClassicTheme1 from '../components/cardViewThemes/classicTheme/ClassicTheme'
import StandardTheme1 from '../components/cardViewThemes/standardTheme/StandardTheme'
import ModernTheme1 from '../components/cardViewThemes/modernTheme/ModernTheme'
import ClassicTheme2 from '../components/cardViewThemes/classicTheme2/ClassicTheme2'
import axios from 'axios'
import AntiqueTheme from '../components/cardViewThemes/antiqueTheme/AntiqueTheme'
import { CardContext } from '../components/store/CardContext'
import DigitalTheme1 from '../components/cardViewThemes/digital1/DigitalTheme1'
import EpicTheme from '../components/cardViewThemes/epicTheme/EpicTheme'
import IconicTheme from '../components/cardViewThemes/iconic/IconicTheme'
import IdealTheme from '../components/cardViewThemes/idealTheme/IdealTheme'
import TechTheme from '../components/cardViewThemes/techTheme/TechTheme'
import UltraTheme from '../components/cardViewThemes/ultraTheme/UltraTheme'
import VexTheme from '../components/cardViewThemes/vexTheme/VexTheme'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const metaDecorator = require('../data/metaDecorator.json')

function CardDetailsViewPage() {
    const params = useParams()
    const [card, setCard] = useState('')
    const [pre, setPre] = useState(true)
    const [cardData, setCardData] = useContext(CardContext)


    useEffect(() => {

        const getDetails = async () => {
            try {
                // console.log(params.id, '11111111111');
                // console.log(liveLocation,'qwertyuio');
                const { data } = await cardProfile(params.id)
                // console.log(data, 'dataaaaaaaaaaa');
                if (data.success) {
                    if (data?.card?.companyLogo) {

                        setTimeout(() => {
                            // console.log(preview, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                            // setPre(preview)
                            setPre(false)
                        }, 1000);
                    } else {
                        setPre(false)
                    }

                    setCard(data.card)
                    cardDetails(data.card)
                    document.title = data.card.name
                    document.getElementsByTagName("META")[2].content = data.card.companyDesignation


                    let link = document.querySelector("link[rel~='icon']");
                    if (!link) {
                        link = document.createElement("link");
                        link.rel = "icon";
                        document.getElementsByTagName("head")[0].appendChild(link);
                    }
                    link.href = data.card.faviconImage

                    let linkAppple = document.querySelector("link[rel~='apple-touch-icon']");
                    if (!linkAppple) {
                        linkAppple = document.createElement("link");
                        linkAppple.rel = "apple-touch-icon";
                        document.getElementsByTagName("head")[0].appendChild(linkAppple);
                    }
                    linkAppple.href = data.card.profileImage ? data.card.profileImage : 'https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg'

                    const liveLocation = await axios.get('https://ipapi.co/json')
                    await addLocation(data.card._id, liveLocation.data)

                }
            } catch (error) {
                setPre(false)
                setCard('')
                console.log(error);
            }
        }

        const cardDetails = (data) => {
            const cardDatas = {
                backgroundImage: data?.backgroundImage,
                bgImg: data?.bgImg,
                bgImgType: data?.bgImgType,
                bgImgRepeat: data?.bgImgRepeat,
                profileImage: data?.profileImage,
                companyLogo: data?.companyLogo,
                personalDetails: {
                    name: data?.name,
                    companyDesignation: data?.companyDesignation,
                    companyName: data?.companyName,
                    about: data?.about,
                    aboutHeadline: data?.aboutHeadline,
                    phone: data?.phone,
                    secondaryPhone: data?.secondaryPhone,
                    email: data?.email,
                    secondaryEmail: data?.secondaryEmail,
                },
                socialMediaDetails: {
                    facebook: data?.facebook,
                    instagram: data?.instagram,
                    whatsappNumber: data?.whatsappNumber,
                    linkedin: data?.linkedin,
                    twitter: data?.twitter,
                    youtube: data?.youtube,
                    skype: data?.skype,
                    snapchat: data?.snapchat,
                    tiktok: data?.tiktok,
                    companyProfile: data?.companyProfile,
                },
                websiteDetails: {
                    websiteName: data?.websiteName,
                    websiteUrl: data?.websiteUrl,
                },
                website: data?.website,
                review: data?.reviews,
                contactDetails: {
                    address: data?.address,
                    state: data?.state,
                    country: data?.country,
                    locationUrl: data?.locationUrl,
                },
                websiteImage: data?.websiteImage,
                fileName: {
                    fileName1: data?.files?.file1?.fileName,
                    fileName2: data?.files?.file2?.fileName,
                    fileName3: data?.files?.file3?.fileName,
                    fileName4: data?.files?.file4?.fileName,

                },
                files: {
                    file1: data?.files?.file1?.fileUrl,
                    file2: data?.files?.file2?.fileUrl,
                    file3: data?.files?.file3?.fileUrl,
                    file4: data?.files?.file4?.fileUrl,
                },
                highlightPhotos1: data?.highlightPhotos[0].highlightPhotos1,
                highlightPhotos2: data?.highlightPhotos[0].highlightPhotos2,
                highlightPhotos3: data?.highlightPhotos[0].highlightPhotos3,
                highlightPhotos4: data?.highlightPhotos[0].highlightPhotos4,
                highlightPhotos5: data?.highlightPhotos[0].highlightPhotos5,
                highlightPhotos6: data?.highlightPhotos[0].highlightPhotos6,
                highlightPhotos7: data?.highlightPhotos[0].highlightPhotos7,
                highlightPhotos8: data?.highlightPhotos[0].highlightPhotos8,
                vCard: data?.vCard,
                QRCode: data?.QRCode,
                checkProfile: data?.checkProfile,
                checkPfCard: data?.checkPfCard,
                checkLogo: data?.checkLogo,
                checkHighlight: data?.checkHighlight,
                SMediaPostion: data?.SMediaPostion,
                Highlightcolor: data?.colorCode,
                Textcolor: data?.textColor,
                Iconcolor: data?.iconBgColor,
                BgColor: data?.bgColor,
                BtIColor: data?.btIconColor,
            }


            setCardData(cardDatas)
        }

        getDetails()
    }, [params.id])

    return (
        <div>

            {pre ?
                <div className='w-full h-screen flex items-center justify-center'>
                    {/* <img src={card?.companyLogo ? card.companyLogo : zeeqrLoder} alt="" /> */}
                    {card?.companyLogo ?
                        <img src={card.companyLogo} alt='' />
                        :
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{
                                        fontSize: 60,
                                    }}
                                    spin
                                />
                            }
                        />
                    }


                </div>
                :
                (
                    card ?
                        (
                            card.theme === 'classic1' ?
                                <ClassicTheme1 card={card} preview={'preview'} key={card._id} />
                                :
                                card.theme === 'classic2' ?
                                    <ClassicTheme2 card={card} preview={'preview'} key={card._id} />
                                    :
                                    card.theme === 'standard1' ?
                                        <StandardTheme1 card={card} preview={'preview'} key={card._id} />
                                        :
                                        card.theme === 'modern1' ?
                                            <ModernTheme1 card={card} preview={'preview'} key={card._id} />
                                            :
                                            card.theme === 'antique' ?
                                                <AntiqueTheme card={card} preview={'preview'} key={card._id} />
                                                :
                                                card.theme === 'digital' ?
                                                    <DigitalTheme1 card={card} preview={'preview'} key={card._id} />
                                                    :
                                                    card.theme === 'epic' ?
                                                        <EpicTheme card={card} preview={'preview'} key={card._id} />
                                                        :
                                                        card.theme === 'iconic' ?
                                                            <IconicTheme card={card} preview={'preview'} key={card._id} />
                                                            :
                                                            card.theme === 'ideal' ?
                                                                <IdealTheme card={card} preview={'preview'} key={card._id} />
                                                                :
                                                                card.theme === 'tech' ?
                                                                    <TechTheme card={card} preview={'preview'} key={card._id} />
                                                                    :
                                                                    card.theme === 'ultra' ?
                                                                        <UltraTheme card={card} preview={'preview'} key={card._id} />
                                                                        :
                                                                        card.theme === 'vex' ?
                                                                            <VexTheme card={card} preview={'preview'} key={card._id} />
                                                                            :
                                                                            <ClassicTheme card={card} key={card._id} />
                        )

                        :
                        <div className='w-full h-screen flex flex-col items-center justify-center'>
                            <img src={logo} alt="" />
                            <h1 className='font-bold mt-2'>This card is not valid/card has expired!</h1>
                            <p className='mt-1'>Please contact the admin</p>
                            <Link to={'https://wa.me/+971505363704?text=Hi%2C'} target="blank" >
                                <button className='p-2 mt-3 border-2 rounded-xl border-black'>Get In Touch</button>
                            </Link>

                        </div>

                )
            }
            <Helmet>
                <meta charSet="utf-8" />
                <title>{card?.name}</title>
                <meta name="description" content={card?.companyDesignation} />
                <link rel="icon" type="image/png" sizes="32x32" href={card.profileImage} />
                <link rel="icon" type="image/png" sizes="16x16" href={card.profileImage} />
                <meta property="og:title" class="notranslate" content={card.name} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaDecorator.hostname + window.location.pathname + window.location.search} />
                <meta property="og:description" class="notranslate" content={card.companyDesignation} />
                <meta property="og:image" content={card.profileImage} />
            </Helmet>
        </div>
    )
}

export default CardDetailsViewPage