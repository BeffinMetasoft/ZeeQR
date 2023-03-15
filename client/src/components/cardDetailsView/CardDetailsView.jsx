import React from 'react'
import { AiFillInstagram, AiFillMessage, AiFillSkype, AiFillTwitterCircle, AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai'
import { ImMobile2 } from 'react-icons/im'
import { BsFacebook, BsQrCodeScan } from 'react-icons/bs'
import logo from '../../assests/zeeqr1.png'

function CardDetailsView({ card }) {

    return (
        <div>

            <div className="font-sans leading-tight min-h-screen bg-grey-lighter md:p-8">
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className='relative h-72'>
                        <div className="bg-cover" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")', height: "150px", backgroundRepeat: "no-repeat" }}>
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
                            <div className='bg-white rounded-xl text-black flex  w-4/5'>
                                <div className='w-2/5 '>
                                    <img className='h-46 w-40  rounded-l-xl' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                </div>

                                <div className="py-2 px-3 ">
                                    <h3 className="font-bold text-2xl mb-1">{card.name}</h3>
                                    <div className="inline-flex pt-2 text-grey-dark sm:flex items-center">
                                        <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                        Malawian UI/UX developer
                                    </div>
                                    <div className='flex mt-6 justify-end'>

                                        <img className="h-16 w-16 rounded-full  border-4 border-white mt-2 mr-3 ml-2" src={card.logoURL} alt="Profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  justify-center mt-10'>
                        <div className='w-4/5 flex  '>

                            <button className="inline-block text-sm w-1/2 px-5 py-2 leading-none  text-white rounded-l-lg bg-orange-500 border-black    mt-4 lg:mt-0">Add to contact</button>
                            <button className="inline-block text-sm px-10 w-1/2 py-2 leading-none  flex items-center gap-3 text-black bg-gray-200 rounded-r-lg border-black    ">
                                <AiOutlineShareAlt size={20} />
                                <p>Share it</p>
                            </button>
                        </div>
                    </div>

                    <div className="border-b px-4 mt-5 py-2 pb-6">
                        <div className="text-center items-center sm:text-left px-8 mb-4">
                            <h1 className='font-bold text-2xl'>About</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod, totam repellendus odio inventore doloremque nesciunt temporibus fugiat culpa. Non pariatur culpa modi eaque fugiat hic obcaecati nulla omnis aspernatur.</p>

                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl'>Social media links</h1>
                            <div className='flex gap-3 mt-3'>

                                <span className='border rounded-lg bg-gray-200 text-black p-2'> <BsFacebook size={30} /></span>
                                <span className='border rounded-lg bg-gray-200 text-black p-2'><AiFillInstagram size={30} /></span>
                                <span className='border rounded-lg bg-gray-200 text-black p-2'><AiFillTwitterCircle size={30} /></span>
                                <span className='border rounded-lg bg-gray-200 text-black p-2'><AiFillSkype size={30} /></span>

                            </div>


                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1'>Contact Info</h1>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <ImMobile2 className='mt-1' size={24} />
                                <p>{card.phone}</p>
                            </div>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <AiOutlineMail size={24} />
                                <p>{card.email}</p>
                            </div>
                            <div className='flex items-center gap-3 border-b py-2'>
                                <AiFillMessage size={24} />
                                <p>wertyuio</p>
                            </div>
                        </div>
                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1 '>Website/portfolio</h1>
                            <div >
                                <div className='bg-white rounded-lg bg-gray-200  mt-2 text-black flex '>
                                    <div className='w-3/6 '>
                                        <img className='h-24 w-40  rounded-l-lg' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                    </div>
                                    <div className="py-2 px-3  ">
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
                                </div>
                            </div>
                        </div>

                        <div className=' px-6 py-2 mt-5'>
                            <h1 className='font-bold text-2xl mb-1'>Photos of Highlight</h1>
                            <div className='grid grid-cols-2 mt-3 gap-3'>
                                <img className='h-28 w-40 ' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                <img className='h-28 w-40 ' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                <img className='h-28 w-40 ' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                                <img className='h-28 w-40 ' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                            </div>
                        </div>


                        <div className='relative bg-gray-200 flex justify-center'>
                            <div className='w-24'>
                                <p>powered by</p>
                                <img className='w-14 mx-5' src={logo} alt="" srcset="" />
                            </div>
                            <span className=' absolute right-0 border rounded-full bg-black text-white p-2 my-6'><BsQrCodeScan size={30} /></span>


                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default CardDetailsView