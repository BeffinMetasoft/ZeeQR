import React from 'react'
import { BsCursor } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ContactCardCls({preview,Textcolor,Iconcolor,BtIColor}) {
    const {
        personalDetails,
        contactDetails,
    } = useSelector((state) => state.cardReducer);

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
            <h3>Call</h3>
            <Link
                style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                }}
                to={preview ? `tel:+${personalDetails?.phone}` : ""}
            >
                +{personalDetails?.phone ? personalDetails.phone : "123 456 7890"}
            </Link>
            {personalDetails?.secondaryPhone && (

                <Link
                    style={{
                        color: `${Textcolor ? Textcolor : ""}`,
                    }}
                    to={preview ? `tel:+${personalDetails?.secondaryPhone}` : ""}
                >
                    {personalDetails?.secondaryPhone ? "+" + personalDetails.secondaryPhone : ""}
                </Link>
            )}
            <h3>Email</h3>
            <Link
                style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                }}
                onClick={preview ? shareMail : ""}
            >
                {personalDetails?.email
                    ? personalDetails.email
                    : "john@example.com"}
            </Link>
            {personalDetails?.secondaryEmail && (

                <Link
                    style={{
                        color: `${Textcolor ? Textcolor : ""}`,
                    }}
                    onClick={preview ? shareMail2 : ""}
                >
                    {personalDetails?.secondaryEmail
                        ? personalDetails.secondaryEmail
                        : ""}
                </Link>
            )}
            <h3>Location</h3>
            <Link
                style={{
                    color: `${Textcolor ? Textcolor : ""}`,
                }}
            >
                {" "}
                {contactDetails?.address
                    ? contactDetails.address
                    : "2709 Hwy 51,Janesville"}
            </Link>
            {contactDetails?.locationUrl ? (
                <Link
                    style={{
                        color: `${BtIColor ? BtIColor : ""}`,
                        backgroundColor: `${Iconcolor ? Iconcolor : ""}`,
                    }}
                    to={`${preview ? contactDetails?.locationUrl : ""}`}
                    target={`${preview ? "_blank" : ""}`}
                    className="blk-btn"
                >
                    {/* <img src={arrowIcon} alt="" /> */}
                    <BsCursor size={16} color={BtIColor ? BtIColor : 'white'} />

                    Direction
                </Link>
            ) : (
                ""
            )}
        </div>
    )
}

export default ContactCardCls