import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'

function DownloadsCardCls({ preview, fileName, files, Iconcolor, Textcolor }) {
    const { file1, file2, file3, file4 } = files;
    return (
        <div>
            {fileName?.fileName1 ? (
                <div className="flex justify-between  mb-3">
                    <Link
                        to={`${preview ? file1 : ""}`}
                        target={`${preview ? "_blank" : ""}`}
                        
                    >
                        <svg
                            width="40"
                            height="40"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: `${Iconcolor ? Iconcolor : "black"}` }}
                        >
                            {" "}
                            <path
                                d="M9 17L15 17"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                        </svg>
                        {/* <span className="websiteIcon"  style={{ backgroundColor: `${Iconcolor ? Iconcolor : "black"}` }}>
                    <FiDownload size={23} color={BtIColor ? BtIColor : 'black'} />

                    </span> */}
                        <h5
                            style={{
                                color: `${Textcolor ? Textcolor : ""}`,
                            }}
                        >
                            {" "}
                            {fileName?.fileName1}
                        </h5>
                    </Link>
                    <IoIosArrowForward size={23} className='mt-2' color={Textcolor ? Textcolor : 'black'} />
                </div>
            ) : (
                ""
            )}

            {fileName?.fileName2 ? (
                <div className="flex justify-between  mb-3">
                    <Link
                        to={`${preview ? file2 : ""}`}
                        target={`${preview ? "_blank" : ""}`}
                       
                    >
                        <svg
                            width="40"
                            height="40"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: `${Iconcolor ? Iconcolor : "black"}` }}
                        >
                            {" "}
                            <path
                                d="M9 17L15 17"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                        </svg>
                        <h5
                            style={{
                                color: `${Textcolor ? Textcolor : ""}`,
                            }}
                        >
                            {" "}
                            {fileName?.fileName2}
                        </h5>
                    </Link>
                    <IoIosArrowForward size={23} className='mt-2' color={Textcolor ? Textcolor : 'black'} />
                </div>
            ) : (
                ""
            )}

            {fileName?.fileName3 ? (
                <div className="flex justify-between r mb-3">
                    <Link
                        to={`${preview ? file3 : ""}`}
                        target={`${preview ? "_blank" : ""}`}
                       
                    >
                        <svg
                            width="40"
                            height="40"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: `${Iconcolor ? Iconcolor : "black"}` }}
                        >
                            {" "}
                            <path
                                d="M9 17L15 17"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                        </svg>
                        <h5
                            style={{
                                color: `${Textcolor ? Textcolor : ""}`,
                            }}
                        >
                            {" "}
                            {fileName?.fileName3}
                        </h5>
                    </Link>
                    <IoIosArrowForward size={23} className='mt-2' color={Textcolor ? Textcolor : 'black'} />
                </div>
            ) : (
                ""
            )}

            {fileName?.fileName4 ? (
                <div className="flex justify-between  mb-3">
                    <Link
                        to={`${preview ? file4 : ""}`}
                        target={`${preview ? "_blank" : ""}`}
                       
                    >
                        <svg
                            width="40"
                            height="40"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: `${Iconcolor ? Iconcolor : "black"}` }}
                        >
                            {" "}
                            <path
                                d="M9 17L15 17"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 6V13M12 13L15.5 9.5M12 13L8.5 9.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                        </svg>
                        <h5
                            style={{
                                color: `${Textcolor ? Textcolor : ""}`,
                            }}
                        >
                            {" "}
                            {fileName?.fileName4}
                        </h5>
                    </Link>
                    <IoIosArrowForward size={23} className='mt-2' color={Textcolor ? Textcolor : 'black'} />
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default DownloadsCardCls