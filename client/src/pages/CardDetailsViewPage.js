import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cardProfile } from '../api/UserRequest'
import logo from '../assests/zeeqr.png'
import ViewCardDetails from '../components/cardDetailsView/ViewCardDetails'
import ClassicTheme from '../components/cardDetailView1/classicTheme/ClassicTheme'
import { Helmet } from "react-helmet";
const metaDecorator = require('../data/metaDecorator.json')

function CardDetailsViewPage() {
    const params = useParams()
    const [card, setCard] = useState('')
    // const navigate = useNavigate()
    const [pre, setPre] = useState(true)


    useEffect(() => {

        const getDetails = async () => {
            try {
                // console.log(params.id, '11111111111');
                const { data } = await cardProfile(params.id)
                // console.log(data, 'dataaaaaaaaaaa');
                if (data.success) {
                    setPre(false)
                    setCard(data.card)
                    document.title = data.card.name
                    document.getElementsByTagName("META")[2].content= data.card.companyDesignation
                    

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
                    linkAppple.href = data.card.faviconImage
                }
            } catch (error) {

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
                <meta property="og:description" class="notranslate" content={metaDecorator.hostname + card.companyDesignation} />
                <meta property="og:image" content={metaDecorator.hostname + card.profileImage} />
            </Helmet>
            {pre ?
                <div className='w-full h-screen flex items-center justify-center'>
                    <img src={logo} alt="" />
                </div>
                :
                (
                    card ?
                        (card.theme === 'classic' ?
                            <ClassicTheme card={card} />
                            :
                            <ViewCardDetails card={card} />
                        )

                        :
                        <div className='text-center' >
                            <div className='w-full flex justify-center'>
                                <img className='w-2/5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1678422474~exp=1678423074~hmac=430c2134e325899808dd4149291d56b61e0ccd73d8824547628ee1c8e53837f7" alt="" />

                            </div>
                            <Link to={'/'} className='my-2 bg-black rounded-xl text-white px-2 py-2' >Home Page</Link>
                        </div>

                )
            }
        </div>
    )
}

export default CardDetailsViewPage