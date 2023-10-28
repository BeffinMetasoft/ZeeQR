import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../../store/CardContext";

function ContactCardIconic({ preview,Highlightcolor }) {
  const [cardData] = useContext(CardContext)
  const { personalDetails,  contactDetails } = cardData
  const shareMail = (e) => {
    window.location = `mailto:${personalDetails?.email}`;
    e.preventDefault();
  };
  const shareMail2 = (e) => {
    window.location = `mailto:${personalDetails?.secondaryEmail}`;
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <Link to={preview ? `tel:+${personalDetails?.phone}` : ""}>
            <div className="w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8  ">
              <div className="flex items-center justify-center h-[44px] ">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.12 10.79C8.56 13.62 10.88 15.93 13.71 17.38L15.91 15.18C16.18 14.91 16.58 14.82 16.93 14.94C18.05 15.31 19.26 15.51 20.5 15.51C21.05 15.51 21.5 15.96 21.5 16.51V20C21.5 20.55 21.05 21 20.5 21C11.11 21 3.5 13.39 3.5 4C3.5 3.45 3.95 3 4.5 3H8C8.55 3 9 3.45 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z"
                    fill={Highlightcolor ? Highlightcolor : "black"}
                  />
                </svg>
              </div>
              <p className="text-[14px] max-w-[197px] text-balck font-medium text-center">
                +
                {personalDetails?.phone
                  ? personalDetails.phone
                  : "123 456 7890"}
              </p>
            </div>
          </Link>
        </div>
        <Link onClick={preview ? shareMail : ""}>
          <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[44px]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 8L12.5 13L4.5 8V6L12.5 11L20.5 6V8Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </svg>
            </div>

            <p className="text-[14px] text-black font-medium">
              {personalDetails?.email
                ? personalDetails.email
                : "john@example.com"}
            </p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div>
          {personalDetails?.secondaryPhone ? (
            <Link to={preview ? `tel:+${personalDetails?.secondaryPhone}` : ""}>
              <div className="w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8  ">
                <div className="flex items-center justify-center h-[44px] ">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.12 10.79C8.56 13.62 10.88 15.93 13.71 17.38L15.91 15.18C16.18 14.91 16.58 14.82 16.93 14.94C18.05 15.31 19.26 15.51 20.5 15.51C21.05 15.51 21.5 15.96 21.5 16.51V20C21.5 20.55 21.05 21 20.5 21C11.11 21 3.5 13.39 3.5 4C3.5 3.45 3.95 3 4.5 3H8C8.55 3 9 3.45 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z"
                      fill={Highlightcolor ? Highlightcolor : "black"}
                    />
                  </svg>
                </div>
                <p className="text-[14px] max-w-[197px] text-balck font-medium text-center">
                  +
                  {personalDetails?.secondaryPhone
                    ? personalDetails.secondaryPhone
                    : "123 456 7890"}
                </p>
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
        {personalDetails?.secondaryEmail ? (
          <Link onClick={preview ? shareMail2 : ""}>
            <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
              <div className="flex items-center justify-center h-[44px]">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 8L12.5 13L4.5 8V6L12.5 11L20.5 6V8Z"
                    fill={Highlightcolor ? Highlightcolor : "black"}
                  />
                </svg>
              </div>

              <p className="text-[14px] text-black font-medium">
                {personalDetails?.secondaryEmail
                  ? personalDetails.secondaryEmail
                  : "john@example.com"}
              </p>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div></div>
      <div className="flex  items-center justify-center">
        <Link
          to={`${preview ? contactDetails?.locationUrl : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >
          <div className="max-w-full h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[44px]">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </svg>
            </div>
            <p className="text-[14px] text-center text-black font-medium">
              {" "}
              {contactDetails?.address
                ? contactDetails.address
                : "2709 Hwy 51,Janesville"}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ContactCardIconic;
