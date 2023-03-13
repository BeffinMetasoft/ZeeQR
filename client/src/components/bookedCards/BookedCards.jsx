import React, { useEffect, useState } from 'react'
import { getBookedCards } from '../../api/UserRequest'
// import Cards from '../cards/Cards'
import logo from '../../assests/zeeqr.png'

function BookedCards() {
    const [bookedCards, setBookedCards] = useState([])

    useEffect(() => {
        const allBookedCards = async () => {
            try {
                const { data } = await getBookedCards()
                console.log(data);
                if (data.success) {
                    setBookedCards(data.card)
                }
            } catch (error) {
                console.log(error);
            }
        }
        allBookedCards()
    }, [])

    return (
        <div>

            <section class="py-1 bg-blueGray-50">
                <div class="w-full  mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Card
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Card Details
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Shipping Address
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            PaymentMethod
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bookedCards.map((obj, index) => {
                                        return (
                                            <tr>
                                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    {/* <Cards /> */}
                                                    <div className="group bg-white  p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                                                        <div className=" text-left">
                                                            <img className="w-16 md:w-28 " src={logo} alt='' />

                                                        </div>
                                                        <div className="flex justify-end">
                                                            <img className=" w-16 md:w-28 " src={obj.QRCode} alt='' />

                                                        </div>
                                                        <div className="flex justify-start gap-x-2">
                                                            <div className='flex flex-col  justify-center'>
                                                                <h3 className="text-sm md:text-2xl font-bold text-black">{obj.name}</h3>
                                                                <span className="text-xs md:text-xs text-black">{obj.companyName}</span>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </th>
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    <p>{obj.name}</p>
                                                    <p>{obj.companyName}</p>
                                                    <p>{obj.email}</p>
                                                    <p>{obj.phone}</p>
                                                    <p>{obj.websiteUrl}</p>
                                                </td>
                                                <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <p>{obj?.shippingDetails?.name}</p>
                                                    <p>{obj?.shippingDetails?.address}</p>
                                                    <p>{obj?.shippingDetails?.state}</p>
                                                    <p>{obj?.shippingDetails?.zipCode}</p>
                                                    <p>{obj?.shippingDetails?.landmark}</p>
                                                </td>
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {obj.paymentMethod}
                                                </td>
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {obj.status}
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </section>
        </div >
    )
}

export default BookedCards