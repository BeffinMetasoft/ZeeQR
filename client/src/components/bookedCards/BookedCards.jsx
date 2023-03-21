import React, { useEffect, useState } from 'react'
import { getBookedCards } from '../../api/UserRequest'
import CardSaved from '../cards/CardSaved'

function BookedCards() {
    const [bookedCards, setBookedCards] = useState([])
    const [deletes,setDeletes]=useState('')

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
    }, [deletes])

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
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bookedCards.map((obj, index) => {
                                        return (
                                            <tr>
                                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                <CardSaved card={obj} setDeletes={setDeletes} key={index} />
                                                    
                                                </th>
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    <p>{obj.name}</p>
                                                    <p>{obj.companyName}</p>
                                                    <p>{obj.email}</p>
                                                    <p>{obj.phone}</p>
                                                    <p>{obj.websiteUrl}</p>
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