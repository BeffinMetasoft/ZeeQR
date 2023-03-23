import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cardProfile } from '../api/UserRequest'
// import CardDetailsView from '../components/cardDetailsView/CardDetailsView'
import logo from '../assests/zeeqr.png'
import ViewCardDetails from '../components/cardDetailsView/ViewCardDetails'
import PreviewTheme from '../components/previewTheme/previewTheme'
import PreviewTheme1 from '../components/previewTheme/previewTheme1'

function CardDetailsViewPage1() {
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
                }
            } catch (error) {

            }
        }

        getDetails()
    }, [params.id])
    return (
        <div>
            {pre ?
            <div className='w-full h-screen flex items-center justify-center'>
                <img  src={logo} alt="" />
                </div>
                :
                (
                    card ?
                        // <CardDetailsView card={card} />
                        // <ViewCardDetails card={card} />
                        // <PreviewTheme card={card} />
                        <PreviewTheme1 card={card} />
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

export default CardDetailsViewPage1