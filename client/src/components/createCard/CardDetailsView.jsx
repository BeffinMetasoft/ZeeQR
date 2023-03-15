import React from 'react'
import { AiFillInstagram, AiFillMessage, AiFillMobile, AiFillSkype, AiFillTwitterCircle, AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai'
import { ImMobile2 } from 'react-icons/im'
import { BsFacebook, BsQrCodeScan } from 'react-icons/bs'

function CardDetailsView({card}) {

   

    return (
        <div>
            
                <div className="font-sans leading-tight min-h-screen bg-grey-lighter  ">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg ">
                        <div className="bg-cover back flex  items-end" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOtLxNORE3K5TVX_GOCoxhNnHwiA2x3EGJTPRiboBQg&s")', height: "200px", backgroundRepeat: "no-repeat" }}>
                            <div className="pb-3 px-5 text-white">
                                <h3 className="font-bold text-3xl mb-1">tttttt</h3>
                                <div className="inline-flex text-grey-dark sm:flex items-center">
                                    <i className="fa fa-map-marker  text-grey-dark text-2xl"></i>
                                    Malawian UI/UX developer
                                </div>
                            </div>
                        </div>
                        <div className="border-b px-4 py-2 pb-6 text-black">
                            <div className="text-center items-center sm:text-left flex mb-4">
                                <img className="h-16 w-16 rounded-full border-4 border-white  mt-2 mr-3 ml-2" src='' alt="Profile" />
                                <div className="py-2 ">
                                    <h3 className="font-bold text-2xl mb-1">fccccccc</h3>

                                    <p className='text-sm pb-2' >Malawian UI/UX developer</p>
                                    <p>qwertyushdhsxsfdxdtdyt</p>
                                </div>
                            </div>
                            <div className='flex px-6 py-2 gap-5'>
                                <span className='border rounded-full bg-red-600 text-white p-2'><AiOutlineMail size={30} /></span>
                                <span className='border rounded-full bg-red-600 text-white p-2'> <ImMobile2 className='mt-1' size={24} /></span>
                                <span className='border rounded-full bg-red-600 text-white p-2'><AiFillMessage size={30} /></span>



                            </div>
                            <div className='border border-2 rounded-xl  my-5 py-3 px-3 '>
                                <div className='flex gap-3 '>
                                    <AiFillMobile size={30} />
                                    <h1 className='font-bold text-2xl'>contact me</h1>
                                </div>
                                <div className='flex flex-col  gap-2 py-3'>
                                    <h1 className='text-xl font-semibold'>Call me</h1>
                                    <p>48485</p>
                                    <h1 className='text-xl font-semibold'>E-mail</h1>
                                    <p>eee</p>
                                    <h1 className='text-xl font-semibold'> Address</h1>
                                    <p>tttttttttt</p>
                                    <p>yyyyyyyyyy</p>
                                    <p>ggggggg</p>
                                    <p>ggg</p>
                                </div>
                            </div>
                            <div className='border border-2  rounded-xl my-5 py-3 px-3 '>
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
                

        </div>
    )
}

export default CardDetailsView