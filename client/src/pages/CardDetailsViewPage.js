import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addLocation, cardProfile } from '../api/UserRequest'
import logo from '../assests/zeeqr-black.svg'
import zeeqrLoder from '../assests/Zeeqr Loading.gif'
import ClassicTheme from '../components/cardDetailView1/classicTheme/ClassicTheme'
import { Helmet } from "react-helmet";

import ClassicTheme1 from '../components/cardViewThemes/classicTheme/ClassicTheme'
import StandardTheme1 from '../components/cardViewThemes/standardTheme/StandardTheme'
import ModernTheme1 from '../components/cardViewThemes/modernTheme/ModernTheme'
import ClassicTheme2 from '../components/cardViewThemes/classicTheme2/ClassicTheme2'
import axios from 'axios'

const metaDecorator = require('../data/metaDecorator.json')

function CardDetailsViewPage() {
    const params = useParams()
    const [card, setCard] = useState('')
    const [pre, setPre] = useState(true)


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
                    await addLocation(data.card._id,liveLocation.data)

                }
            } catch (error) {
                setPre(false)
                setCard('')
                console.log(error);
            }
        }

        getDetails()
    }, [params.id])

    return (
        <div>
            <Helmet>
                <title>{card.name}</title>
                <meta name="description" content={card.companyDesignation} />
                <link rel="icon" type="image/png" sizes="32x32" href={card.profileImage} />
                <link rel="icon" type="image/png" sizes="16x16" href={card.profileImage} />
                <meta property="og:title" class="notranslate" content={card.name} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaDecorator.hostname + window.location.pathname + window.location.search} />
                <meta property="og:description" class="notranslate" content={card.companyDesignation} />
                <meta property="og:image" content={card.profileImage} />
            </Helmet>
            {pre ?
                <div className='w-full h-screen flex items-center justify-center'>
                    <img src={card?.companyLogo ? card.companyLogo : zeeqrLoder} alt="" />
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
                                            <ClassicTheme card={card} key={card._id} />
                        )

                        :
                        <div className='w-full h-screen flex items-center justify-center'>
                            <img src={logo} alt="" />
                        </div>

                )
            }
        </div>
    )
}

export default CardDetailsViewPage