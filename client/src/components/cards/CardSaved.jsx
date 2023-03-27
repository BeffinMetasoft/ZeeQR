import './AlertCSS.css';
import React from 'react'
import logo from '../../assests/zeeqr.png'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteSavedCard } from '../../api/UserRequest';
import { useNavigate } from 'react-router-dom';


function CardSaved({card,setDeletes}) {

    const navigate = useNavigate()

    const handleEdit=(cardId)=>{
        navigate('/edit-bookedCard', { state: { cardId }})
    }
    const handleDelete=(id)=>{
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you want to delete this card.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async() => {
                       try {
                        console.log(id,'delete');
                        const {data}= await deleteSavedCard(id)
                        if(data.success){
                            setDeletes(Date.now())
                        }
                        console.log(data,'deleted');
                       } catch (error) {
                        console.log(error);
                       }
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
       
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className='w-[470px] '>
                    <div className="group bg-white  p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                        <div className=" text-left">
                            <img className="w-28 " src={logo} alt='' />

                        </div>
                        <div className="flex justify-end">
                            <img className="w-24 " src={card.QRCode} alt='' />

                        </div>
                        <div className="flex justify-start gap-x-2">
                            <div className='flex flex-col  justify-center'>
                                <h3 className="text-2xl font-bold text-black">{card.name}</h3>
                                <span className="text-xs text-black">{card.companyName}</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='flex justify-around mt-3'>
                <p>{card.date}</p>
                <div className='flex items-center' >
                <button className='mx-2' onClick={()=>handleEdit(card._id)} >Edit</button>
                <FaRegEdit/>
                <button className='mx-2' onClick={()=>handleDelete(card._id)} >Delete</button>
                <AiOutlineDelete size={20}/>
                </div>

            </div>
        </div>
    )
}

export default CardSaved