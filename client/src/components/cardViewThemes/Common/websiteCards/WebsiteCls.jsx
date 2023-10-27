import React from 'react'
import { FiLink } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

function WebsiteCls({website,preview,Textcolor,Iconcolor,BtIColor}) {
    return (
        <div>
            {website?.map((webData) =>
                webData.websiteName ? (
                    <div className="flex justify-between items-center">
                        <Link
                            to={`${preview ? webData?.websiteUrl : ""}`}
                            target={`${preview ? "_blank" : ""}`}
                            className="mt-5"
                        >

                            <span className="w-12 h-12 rounded-full flex justify-center items-center" style={{ backgroundColor: `${Iconcolor ? Iconcolor : "black"}` }}>
                                <FiLink size={23} color={BtIColor ? BtIColor : 'white'} />

                            </span>
                            <h5
                                style={{
                                    color: `${Textcolor ? Textcolor : ""}`,
                                }}
                            >

                                {webData?.websiteName
                                    ? webData.websiteName
                                    : "Website Name"}
                            </h5>
                        </Link>
                        <IoIosArrowForward size={23} color={Textcolor ? Textcolor : 'black'} />
                    </div>
                ) : (
                    ""
                )
            )}
        </div>
    )
}

export default WebsiteCls