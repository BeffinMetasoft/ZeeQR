import React, { useContext } from 'react'
import './ProfileCard.css'
import { defaultProfileImage } from '../DefaultImage';
import { CardContext } from '../../../store/CardContext';

function ProfileCard({ Highlightcolor, Textcolor,profileCardColor,theme }) {
    const [cardData] = useContext(CardContext)

    const {
        profileImage,
        personalDetails,
        checkProfile,
    } = cardData
    
    const array = personalDetails?.name ? personalDetails?.name?.split(" ") : "";


    return (
        <div className='profileCard'>
            <div
                className={`userDetails ${!checkProfile ? "flex flex-col jutify-center" : ""
                    } ${theme ? "" :'rounded-xl'}`}
                style={{
                    backgroundColor: `${profileCardColor ? profileCardColor : Highlightcolor ? Highlightcolor : ""}`,
                    marginBottom:`${theme ? "0" : "30px"}`

                }}
            >
                {checkProfile ? (
                    <figure>
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt=""
                            />
                        ) : (
                            <img src={defaultProfileImage} alt="" />
                        )}
                    </figure>
                ) : (
                    ""
                )}
                <div
                    className="user"
                    style={{ width: `${checkProfile ? "calc(100% - 122px)" : ""}` }}
                >
                    <h1
                        style={{
                            color: `${profileCardColor ? "black" : Textcolor ? Textcolor : ""}`,
                            width: `${!checkProfile ? "max-content" : ""}`,
                            fontSize: `${array[0]?.length > 12 ||
                                array[1]?.length > 12 ||
                                array[2]?.length > 12
                                ? "20px"
                                : (personalDetails?.nameSize ? `${personalDetails?.nameSize}px`: "") 
                                }`,
                        }}
                    >
                        {" "}
                        {personalDetails?.name ? personalDetails.name : ""}
                    </h1>
                    <p
                        style={{
                            color: `${profileCardColor ? "black" : Textcolor ? Textcolor : ""}`,
                            fontSize:  `${personalDetails?.designationSize ? personalDetails?.designationSize +'px'  : ""}`
                        }}
                    >
                        {personalDetails?.companyDesignation
                            ? personalDetails.companyDesignation
                            : ""}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard