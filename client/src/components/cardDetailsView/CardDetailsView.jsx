import React, { useState } from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillMessage, AiFillSkype, AiFillTwitterCircle, AiFillYoutube, AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai'
import { ImMobile2 } from 'react-icons/im'
import { BsFacebook, BsQrCodeScan } from 'react-icons/bs'
import logo from '../../assests/zeeqr1.png'
import { Link } from 'react-router-dom'

function CardDetailsView({ card }) {
    const [qrModal, setQrModal] = useState(false)

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                text: "check it out",
                url: window.location.href,
                title: 'ZeeQR'
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }

    return (
        <div>

            <div className="font-sans leading-tight min-h-screen  bg-grey-lighter md:p-8">
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
                    <div className='relative h-72'>
                        <span className='  fixed bottom-0 center-0 z-10 ml-[330px] md:ml-[380px] border rounded-full bg-black text-white p-2 my-6' onClick={() => setQrModal(true)} ><BsQrCodeScan size={30} /></span>

                        <div className="bg-cover" style={{ backgroundImage: `url(${card.backgroundImage})`, height: "150px", backgroundRepeat: "no-repeat" }}>
                            <div>
                                <div className=' flex justify-around items-center'>
                                    <div className="flex items-center flex-shrink-0 text-black mx-6">
                                        <img className='w-14 ' src={logo} alt="" srcset="" />
                                        <p className="font-bold text-2xl tracking-tight">ZeeQR</p>
                                    </div>
                                    <div>
                                        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-transparent mt-4 lg:mt-0">get your card</button>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className=' absolute bottom-0  w-full flex justify-center'>
                            <div className='bg-white rounded-xl shadow-xl text-black flex  w-4/5'>
                                <div className='w-2/5 '>
                                    <img className='h-46 w-40  rounded-l-xl' src={card.profileImage} alt="" />
                                </div>

                                <div className="py-2 px-3 ">
                                    <h3 className="font-bold text-2xl mb-1">{card.name}</h3>
                                    <div className="inline-flex pt-2 text-grey-dark sm:flex items-center">
                                        <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                        {card.companyDesignation}
                                    </div>
                                    <div className='flex mt-6 justify-end'>

                                        <img className="h-16 w-16 rounded-full  border-4 border-white mt-2 mr-3 ml-2" src={card.companyLogo} alt="Profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  justify-center mt-10'>
                        <div className='w-4/5 flex  '>

                            <button className="inline-block text-sm w-1/2 px-5 py-2 leading-none  text-white rounded-l-lg bg-orange-500 border-black   ">Add to contact</button>
                            <button onClick={handleShare} className="inline-block text-sm px-8 w-1/2 py-2 leading-none  flex items-center gap-3 text-black bg-gray-200 rounded-r-lg border-black    ">
                                <AiOutlineShareAlt size={20} />
                                <p>Share it</p>
                            </button>
                        </div>
                    </div>

                    <div className="border-b px-4 mt-5 py-2 pb-6">
                        <div className="text-center items-center sm:text-left px-8 mb-4">
                            <h1 className='font-bold text-2xl'>About</h1>
                            <p className='text-sm'>{card.about}</p>

                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl'>Social media links</h1>
                            <div className='flex gap-3 mt-3 overflow-x-scroll scrollbar-hide '>

                                <Link to={`${card.facebook}`} className='border rounded-lg bg-gray-200 text-black p-2'> <BsFacebook size={30} /></Link>
                                <Link to={`${card.instagram}`} className='border rounded-lg bg-gray-200 text-black p-2'><AiFillInstagram size={30} /></Link>
                                <Link to={`${card.twitter}`} className='border rounded-lg bg-gray-200 text-black p-2'><AiFillTwitterCircle size={30} /></Link>
                                <Link to={`${card.youtube}`} className='border rounded-lg bg-gray-200 text-black p-2'><AiFillYoutube size={30} /></Link>
                                <Link to={`${card.linkedin}`} className='border rounded-lg bg-gray-200 text-black p-2'><AiFillLinkedin size={30} /></Link>
                                <Link to={`${card.skype}`} className='border rounded-lg bg-gray-200 text-black p-2'><AiFillSkype size={30} /></Link>


                            </div>


                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1'>Contact Info</h1>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <ImMobile2 className='mt-1' size={24} />
                                <p className='cursor-pointer hover:text-blue-800 hover:underline' ><Link to={`tel:${card.phone}`}>{card.phone}</Link> </p>
                            </div>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <AiOutlineMail size={24} />
                                <p className='cursor-pointer hover:text-blue-800 hover:underline' onClick={(e) => {
                                    window.location = `mailto:${card.email}`;
                                    e.preventDefault();
                                }}>{card.email}</p>
                            </div>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <AiFillMessage size={24} />
                                <p>{card.address}</p>
                            </div>
                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1 '>Website/portfolio</h1>
                            <div >
                                <div className=' rounded-lg bg-gray-200  mt-2 text-black flex '>
                                    <div className='w-3/6 bg-white'>
                                        <img className='h-24 w-40 bg-white rounded-l-lg' src={card.websiteImage} alt="" />
                                    </div>
                                    <div className="py-2 px-3 flex items-center ">
                                        <Link to={`${card.websiteUrl}`} className="inline-flex pt-2 text-grey-dark sm:flex items-center">

                                            {card.websiteName}
                                        </Link>

                                    </div>
                                </div>
                                {/* <div className='bg-white rounded-lg  bg-gray-200 mt-2 text-black flex '>
                                    <div className='w-3/6 '>
                                        <img className='h-24 w-40  rounded-l-lg' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                    </div>
                                    <div className="py-2 px-3 ">
                                        <div className="inline-flex pt-2 text-grey-dark sm:flex items-center">
                                            <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                            Malawian UI/UX developer
                                        </div>

                                    </div>
                                </div>
                                <div className='bg-white rounded-lg  bg-gray-200 mt-2 text-black flex '>
                                    <div className='w-3/6 '>
                                        <img className='h-24 w-40  rounded-l-lg' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                    </div>
                                    <div className="py-2 px-3 ">
                                        <div className="inline-flex pt-2 text-grey-dark sm:flex items-center">
                                            <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                            Malawian UI/UX developer
                                        </div>

                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1'>Photos of Highlight</h1>
                            <div className='grid grid-cols-2 mt-3 gap-3'>
                                {card.highlightPhotos.map((img) => (

                                    <img className='h-28 w-40  shadow-xl ' src={img} alt="" />
                                ))}

                            </div>
                        </div>





                    </div>
                    <div className='relative bg-gray-200 flex justify-center'>
                        <div className='w-24 pt-5'>
                            <p>powered by</p>
                            <img className='w-14 mx-5' src={logo} alt="" srcset="" />
                        </div>


                    </div>


                    {qrModal ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                                        {/*body*/}
                                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal" onClick={() => setQrModal(false)} >

                                            <img src={card.QRCode} alt="" />
                                            <button className="cursor-pointer absolute top-0 right-0 mt-8   mr-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setQrModal(false)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>

                    ) : null}



                </div>

            </div>


        </div>
    )
}

export default CardDetailsView