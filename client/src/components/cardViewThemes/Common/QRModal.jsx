import React, { useContext, useState } from 'react'
// import { useSelector } from 'react-redux';
import { saveAs } from "file-saver";
import addtoHome from "../../../assests/img1/addtoHome.jpg";
import { CardContext } from '../../store/CardContext';
const defaultProfileImage =
  "https://zeeqr-files.s3.ap-south-1.amazonaws.com/assets/defaultProfile.jpg";

function QRModal({handleClose}) {
  const [cardData] = useContext(CardContext)

    const {
        profileImage,
        personalDetails,
        QRCode,
        
      } = cardData

      const handleDownload = () => {
        let url = QRCode;
        saveAs(url, personalDetails?.name);
      };

      const [showResults, setShowResults] = useState(false);
      const onClick = () => setShowResults(true);
    
  return (
   
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                {/*body*/}
                <div
                  className="popup-container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none"
                  id="modal"
                >
                  <div className="userDetails">
                    <figure>
                      {profileImage[0]?.thumbUrl &&
                      profileImage[0]?.status !== "removed" ? (
                        <img src={profileImage[0].thumbUrl} alt="" />
                      ) : (
                        <img src={defaultProfileImage} alt="" />
                      )}
                      {/* <img src={card.profileImage} alt='' /> */}
                    </figure>
                    <div className="user">
                      <h1>
                        {personalDetails?.name ? personalDetails.name : "Name"}
                      </h1>
                      <p>
                        {" "}
                        {personalDetails?.companyDesignation
                          ? personalDetails.companyDesignation
                          : "Designation"}
                      </p>
                    </div>
                    <img
                      src={QRCode}
                      className="my-qr-code p-3 bg-white  border-2 rounded-xl border-black"
                      width="200px"
                      alt=""
                    />
                    <p className="my-qr-download" onClick={handleDownload}>
                      Download QR Code
                    </p>
                    {!showResults ? (
                      <div className="addToHome" onClick={onClick}>
                        Add to Home Screen
                      </div>
                    ) : (
                      <img className="addtoHomeImage" src={addtoHome} alt="" />
                    )}
                  </div>

                  <button
                    className="cursor-pointer absolute top-0 left-0 mt-6 close-popup  ml-5 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    onClick={handleClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default QRModal