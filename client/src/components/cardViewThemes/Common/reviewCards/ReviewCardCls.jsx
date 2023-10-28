import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function ReviewCardCls({review,preview,Textcolor}) {
    return (
        <div>
            {review?.map((review) => (
                <div className="flex justify-between items-center p-2 ">
                    <Link
                        to={review?.reviewUrl}
                        target={`${preview ? "_blank" : ""}`}
                    >
                        <h5 className='mt-3 text-[18px]'
                            style={{
                                color: `${Textcolor ? Textcolor : ""}`,
                            }}
                        >
                            {review?.reviewName ? review?.reviewName : ""}
                        </h5>
                    </Link>
                    <IoIosArrowForward size={23} color={Textcolor ? Textcolor : 'black'} />
                </div>
            ))}
        </div>
    )
}

export default ReviewCardCls