import React, { useEffect, useState } from 'react'
import { AiFillInstagram, AiFillMessage, AiFillMobile, AiFillSkype, AiFillTwitterCircle, AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai'
import { ImMobile2 } from 'react-icons/im'
import { BsFacebook, BsQrCodeScan } from 'react-icons/bs'
import { Link,  useParams } from "react-router-dom"
import { cardProfile } from '../../api/UserRequest'

function CardDetailsView() {

    const params = useParams()
    const [card, setCard] = useState('')
    // const navigate = useNavigate()


    useEffect(() => {

        const getDetails = async () => {
            try {
                console.log(params.id, '11111111111');
                const { data } = await cardProfile(params.id)
                console.log(data, 'dataaaaaaaaaaa');
                if (data.success) {
                    setCard(data.card)
                }
            } catch (error) {

            }
        }

        getDetails()
    }, [params.id])



    return (
        <div>
            {card ?
                <div className="font-sans leading-tight min-h-screen bg-grey-lighter md:p-8">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-cover back flex  items-end" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOtLxNORE3K5TVX_GOCoxhNnHwiA2x3EGJTPRiboBQg&s")', height: "300px", backgroundRepeat: "no-repeat" }}>
                            <div className="py-2 px-5 text-white">
                                <h3 className="font-bold text-3xl mb-1">{card.name}</h3>
                                <div className="inline-flex text-grey-dark sm:flex items-center">
                                    <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                    Malawian UI/UX developer
                                </div>
                            </div>
                        </div>
                        <div className="border-b px-4 py-2 pb-6">
                            <div className="text-center items-center sm:text-left flex mb-4">
                                <img className="h-28 w-28 rounded-full border-4 border-white mt-2 mr-3 ml-2" src={card.logoURL} alt="Profile" />
                                <div className="py-2 ">
                                    <h3 className="font-bold text-2xl mb-1">{card.companyName}</h3>

                                    <p className='text-sm pb-2' >Malawian UI/UX developer</p>
                                    <p>qwertyushdhsxsfdxdtdyt</p>
                                </div>
                            </div>
                            <div className='flex px-6 py-2 gap-5'>
                                <span className='border rounded-full bg-red-600 text-white p-2'><AiOutlineMail size={30} /></span>
                                <span className='border rounded-full bg-red-600 text-white p-2'> <ImMobile2 className='mt-1' size={24} /></span>
                                <span className='border rounded-full bg-red-600 text-white p-2'><AiFillMessage size={30} /></span>



                            </div>
                            <div className='border border-2 rounded-xl my-5 py-3 px-3 '>
                                <div className='flex gap-3 '>
                                    <AiFillMobile size={30} />
                                    <h1 className='font-bold text-2xl'>contact me</h1>
                                </div>
                                <div className='flex flex-col gap-2 py-3'>
                                    <h1 className='text-xl font-semibold'>Call me</h1>
                                    <p>{card.phone}</p>
                                    <h1 className='text-xl font-semibold'>E-mail</h1>
                                    <p>{card.email}</p>
                                    <h1 className='text-xl font-semibold'> Address</h1>
                                    <p>{card?.shippingDetails?.address}</p>
                                    <p>{card?.shippingDetails?.state}</p>
                                    <p>{card?.shippingDetails?.zipCode}</p>
                                    <p>{card?.shippingDetails?.landmark}</p>
                                </div>
                            </div>
                            <div className='border border-2 rounded-xl my-5 py-3 px-3 '>
                                <div className='flex gap-3 justify-center '>
                                    <h1 className='font-bold text-2xl py-2'>Social media</h1>
                                </div>
                                <div className='flex flex-col px-6 py-2 gap-5'>
                                    <span className='border rounded-full bg-red-600 flex gap-3  text-white p-2'>
                                        <BsFacebook size={30} />
                                        <div>
                                            <p className='py-1'>Facebook</p>
                                        </div>
                                    </span>
                                    <span className='border rounded-full bg-red-600 flex gap-3  text-white p-2'>
                                        <AiFillInstagram size={30} />
                                        <div>
                                            <p className='py-1'>Instagram</p>
                                        </div>
                                    </span>
                                    <span className='border rounded-full bg-red-600 flex gap-3  text-white p-2'>
                                        <AiFillTwitterCircle size={30} />
                                        <div>
                                            <p className='py-1'>Titter</p>
                                        </div>
                                    </span>
                                    <span className='border rounded-full bg-red-600 flex gap-3  text-white p-2'>
                                        <AiFillSkype size={30} />
                                        <div>
                                            <p className='py-1'>Titter</p>
                                        </div>
                                    </span>
                                </div>

                            </div>
                            <div className="flex justify-around">
                                <span className='border rounded-full bg-black text-white p-2'><BsQrCodeScan size={30} /></span>
                                <span className='border rounded-full bg-black text-white p-2'><AiOutlineShareAlt size={30} /></span>

                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='text-center' >
                    <div className='w-full flex justify-center'>
                        <img className='w-2/5' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1678422474~exp=1678423074~hmac=430c2134e325899808dd4149291d56b61e0ccd73d8824547628ee1c8e53837f7" alt="" />

                    </div>
                    <Link to={'/'} className='my-2 bg-black rounded-xl text-white px-2 py-2' >Home Page</Link>
                </div>

                // navigate('/error-404')
            }

        </div>
    )
}

export default CardDetailsView