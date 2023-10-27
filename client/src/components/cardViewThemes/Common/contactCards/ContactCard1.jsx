import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from '../../../store/CardContext';

function ContactCard1({ preview, Textcolor, Iconcolor, BtIColor, controls} ) {
    const [cardData] = useContext(CardContext)

    const {
        personalDetails,
        contactDetails,
        vCard
    } = cardData

    const shareMail = (e) => {
        window.location = `mailto:${personalDetails?.email}`;
        e.preventDefault();
    };

    const shareMail2 = (e) => {
        window.location = `mailto:${personalDetails?.secondaryEmail}`;
        e.preventDefault();
    };
    return (
        <div>
            <div>
                <div className="flex gap-3 mt-5 ">
                    <div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                                fill={Textcolor}
                            />
                        </svg>
                    </div>
                    <div style={{ color: `${Textcolor}`, }}>
                        <p className='text-[16px] font-semibold '>Call</p>
                        <Link
                            to={
                                preview ? `tel:+${personalDetails?.phone}` : ""
                            }
                        >
                            <p className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">
                                +
                                {personalDetails?.phone
                                    ? personalDetails.phone
                                    : ""}
                            </p>
                        </Link>

                        <Link
                            to={
                                preview ? `tel:+${personalDetails?.secondaryPhone}` : ""
                            }
                        >
                            <p className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">

                                {personalDetails?.secondaryPhone
                                    ? "+" + personalDetails.secondaryPhone
                                    : ""}
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-3 mt-5 ">
                    <div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                                fill={Textcolor}
                            />
                        </svg>
                    </div>
                    <div style={{ color: `${Textcolor}`, }}>
                        <p className='text-[16px] font-semibold '>Email</p>
                        <Link onClick={preview ? shareMail : ""} className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">
                            {personalDetails?.email
                                ? personalDetails.email
                                : ""}
                        </Link>

                        <div className="mt-2">
                            <Link onClick={preview ? shareMail2 : ""} className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">
                                {personalDetails?.secondaryEmail
                                    ? personalDetails.secondaryEmail
                                    : ""}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" flex gap-3 mt-5 ">
                    <div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                                fill={Textcolor}
                            />
                        </svg>
                    </div>
                    <div style={{ color: `${Textcolor}`, }}>
                        <p className='text-[16px] font-semibold '>Location</p>
                        <Link
                            to={`${preview ? contactDetails?.locationUrl : ""
                                }`}
                            target={`${preview ? "_blank" : ""}`}
                            className="blk-btn"
                        >
                            <p className="text-[#5A5A5A] font-[14px]  break-words font-normal leading-5 text-left ">
                                {contactDetails?.address
                                    ? contactDetails.address
                                    : ""}
                            </p>
                        </Link>
                    </div>
                </div>
                {controls ? '' :
                    <div className="flex justify-center gap-5 mt-5">
                        {contactDetails?.locationUrl ? (
                            <Link to={`${preview ? contactDetails?.locationUrl : ""}`}
                                target={`${preview ? "_blank" : ""}`}
                            >
                                <button className="bg-white w-[50px] h-[40px] p-[13px] rounded-[23px]">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.2463 3.36842C18.6355 2.35759 17.6421 1.36426 16.6313 1.75342L2.46798 7.20009C1.33465 7.63509 1.42465 9.26676 2.59798 9.57509L8.44048 11.1126C8.54764 11.1407 8.6454 11.1968 8.72374 11.2752C8.80208 11.3535 8.85819 11.4513 8.88631 11.5584L10.4238 17.4001C10.7321 18.5743 12.3638 18.6634 12.7988 17.5309L18.2463 3.36842Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>{" "}
                            </Link>
                        ) : (
                            ""
                        )}
                        <Link className="" to={`${preview ? vCard : ''}`}>
                            <button className=' w-[150px] h-[40px] rounded-[23px]' style={{ color: `${BtIColor}`, backgroundColor: `${Iconcolor}` }}>
                                <div className="flex  flex justify-center   gap-2">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.833 9.16683H10.833V4.16683C10.833 3.94582 10.7452 3.73385 10.5889 3.57757C10.4326 3.42129 10.2207 3.3335 9.99967 3.3335C9.77866 3.3335 9.5667 3.42129 9.41042 3.57757C9.25414 3.73385 9.16634 3.94582 9.16634 4.16683V9.16683H4.16634C3.94533 9.16683 3.73337 9.25463 3.57709 9.41091C3.42081 9.56719 3.33301 9.77915 3.33301 10.0002C3.33301 10.2212 3.42081 10.4331 3.57709 10.5894C3.73337 10.7457 3.94533 10.8335 4.16634 10.8335H9.16634V15.8335C9.16634 16.0545 9.25414 16.2665 9.41042 16.4228C9.5667 16.579 9.77866 16.6668 9.99967 16.6668C10.2207 16.6668 10.4326 16.579 10.5889 16.4228C10.7452 16.2665 10.833 16.0545 10.833 15.8335V10.8335H15.833C16.054 10.8335 16.266 10.7457 16.4223 10.5894C16.5785 10.4331 16.6663 10.2212 16.6663 10.0002C16.6663 9.77915 16.5785 9.56719 16.4223 9.41091C16.266 9.25463 16.054 9.16683 15.833 9.16683Z"
                                            fill={BtIColor}
                                        />
                                    </svg>

                                    <p>Add contact</p>
                                </div>
                            </button>
                        </Link>
                    </div>

                }
            </div>
        </div>
    )
}

export default ContactCard1