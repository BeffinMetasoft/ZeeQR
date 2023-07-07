import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { cardProfile } from '../api/UserRequest'
// import logo from '../assests/zeeqr.png'
import logo from '../assests/zeeqr-black.svg'
import ClassicTheme from '../components/cardDetailView1/classicTheme/ClassicTheme'
import { Helmet } from "react-helmet";
import ModernTheme from '../components/cardDetailView1/modernTheme/ModernTheme'
import MinimalTheme from '../components/cardDetailView1/minimalTheme/MinimalTheme'
import StandardDarkTheme from '../components/cardDetailView1/standardDarkTheme/StandardDarkTheme'
import StandardTheme from '../components/cardDetailView1/standardTheme/StandardTheme'
import ClassicNewTheme from '../components/cardDetailView1/classicNewTheme/ClassicNewTheme'

import ClassicTheme1 from '../components/cardViewThemes/classicTheme/ClassicTheme'
import StandardTheme1 from '../components/cardViewThemes/standardTheme/StandardTheme'
import ModernTheme1 from '../components/cardViewThemes/modernTheme/ModernTheme'

const metaDecorator = require('../data/metaDecorator.json')

function CardDetailsViewPage() {
    const params = useParams()
    const [card, setCard] = useState('')
    const [pre, setPre] = useState(true)


    useEffect(() => {

        const getDetails = async () => {
            try {
                // console.log(params.id, '11111111111');
                const { data } = await cardProfile(params.id)
                console.log(data, 'dataaaaaaaaaaa');
                if (data.success) {
                    if (data?.card?.companyLogo) {

                        setTimeout(() => {
                            // console.log(preview, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                            // setPre(preview)
                            setPre(false)
                        }, 2500);
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
                }
            } catch (error) {
                setPre(false)
                setCard('')
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
                    <img src={card?.companyLogo ? card.companyLogo : logo} alt="" />
                </div>
                :
                (
                    card ?
                        (
                            card.theme === 'classic' ?
                                <ClassicTheme card={card} key={card._id} />
                                : card.theme === 'standard' ?
                                    <StandardTheme card={card} key={card._id} />
                                    : card.theme === 'modern' ?
                                        <ModernTheme card={card} key={card._id} />
                                        : card.theme === 'minimal' ?
                                            <MinimalTheme card={card} key={card._id} />
                                            : card.theme === 'standardDark' ?
                                                <StandardDarkTheme card={card} key={card._id} />
                                                : card.theme === 'classicNew' ?
                                                    <ClassicNewTheme card={card} key={card._id} />
                                                    :

                                                    card.theme === 'classic1' ?
                                                        <ClassicTheme1 card={card} preview={'preview'} key={card._id} />
                                                        :
                                                        card.theme === 'standard1' ?
                                                            <StandardTheme1 card={card} preview={'preview'} key={card._id} />
                                                            :
                                                            card.theme === 'modern1' ?
                                                                <ModernTheme1 card={card} preview={'preview'} key={card._id} />
                                                                :
                                                                <StandardTheme card={card} key={card._id} />
                        )

                        :
                        <div className='w-full h-screen flex items-center justify-center'>
                            <img src={logo} alt="" />
                        </div>
                    // <div className='text-center' >
                    //     <div className='w-full flex justify-center'>
                    //         <img className='w-2/5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1678422474~exp=1678423074~hmac=430c2134e325899808dd4149291d56b61e0ccd73d8824547628ee1c8e53837f7" alt="" />

                    //     </div>
                    //     <Link to={'/'} className='my-2 bg-black rounded-xl text-white px-2 py-2' >Home Page</Link>
                    // </div>

                )
            }
        </div>
    )
}

export default CardDetailsViewPage