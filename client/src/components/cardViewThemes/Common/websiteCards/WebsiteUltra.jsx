import React from 'react'
import { Link } from 'react-router-dom'

function WebsiteUltra({website,preview,color}) {
    const iconColor = color ? color : 'black'
    return (
        <div className='m-[15px]'>
            {website?.map((webData) =>
                webData.websiteName ? (
                    <Link
                        to={`${preview ? webData?.websiteUrl : ""}`}
                        target={`${preview ? "_blank" : ""}`}
                        className="mt-5"
                    >
                        <div className="flex items-center justify-center my-[15px] ml-0 mr-0">
                            <button className={`transparent  border-${iconColor} border p-2 gap-3  w-full h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                                <div className={`flex pr-3 border-r   border-${iconColor} justify-center items-center`}>
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.5 0C6.81886 0 5.17547 0.498516 3.77766 1.43251C2.37984 2.3665 1.29037 3.69402 0.647028 5.24719C0.00368293 6.80036 -0.164645 8.50943 0.163329 10.1583C0.491303 11.8071 1.30085 13.3217 2.4896 14.5104C3.67834 15.6992 5.1929 16.5087 6.84174 16.8367C8.49057 17.1646 10.1996 16.9963 11.7528 16.353C13.306 15.7096 14.6335 14.6202 15.5675 13.2223C16.5015 11.8245 17 10.1811 17 8.5C16.9976 6.24641 16.1012 4.08581 14.5077 2.49228C12.9142 0.898753 10.7536 0.00243743 8.5 0ZM14.625 4.95833H12.3434C11.8327 3.7747 11.1602 2.66764 10.3452 1.66883C12.149 2.15966 13.6866 3.34154 14.625 4.95833ZM11.6875 8.5C11.6817 9.22118 11.568 9.93744 11.3503 10.625H5.64967C5.43196 9.93744 5.31832 9.22118 5.3125 8.5C5.31832 7.77882 5.43196 7.06256 5.64967 6.375H11.3503C11.568 7.06256 11.6817 7.77882 11.6875 8.5ZM6.21775 12.0417H10.7823C10.181 13.2286 9.41245 14.3231 8.5 15.2915C7.58722 14.3234 6.81859 13.2289 6.21775 12.0417ZM6.21775 4.95833C6.81896 3.77136 7.58756 2.6769 8.5 1.7085C9.41278 2.67663 10.1814 3.77114 10.7823 4.95833H6.21775ZM6.65834 1.66883C5.84209 2.66743 5.16842 3.77449 4.65659 4.95833H2.37505C3.31419 3.34081 4.85326 2.15883 6.65834 1.66883ZM1.74321 6.375H4.17917C3.99554 7.06856 3.90034 7.78255 3.89584 8.5C3.90034 9.21744 3.99554 9.93144 4.17917 10.625H1.74321C1.30783 9.24178 1.30783 7.75821 1.74321 6.375ZM2.37505 12.0417H4.65659C5.16842 13.2255 5.84209 14.3326 6.65834 15.3312C4.85326 14.8412 3.31419 13.6592 2.37505 12.0417ZM10.3452 15.3312C11.1602 14.3324 11.8327 13.2253 12.3434 12.0417H14.625C13.6866 13.6585 12.149 14.8403 10.3452 15.3312ZM15.2568 10.625H12.8208C13.0045 9.93144 13.0997 9.21744 13.1042 8.5C13.0997 7.78255 13.0045 7.06856 12.8208 6.375H15.2554C15.6908 7.75821 15.6908 9.24178 15.2554 10.625H15.2568Z"
                                            fill={iconColor}
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold h-[19px] flex justify-left items-center h-[19px] flex justify-self-start  items-center m-0">
                                    {webData?.websiteName
                                        ? webData.websiteName
                                        : "Website Name"}
                                </p>
                            </button>
                        </div>
                    </Link>
                ) : (
                    ""
                )
            )}
        </div>
    )
}

export default WebsiteUltra