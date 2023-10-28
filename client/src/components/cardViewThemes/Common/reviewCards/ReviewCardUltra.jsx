import React from 'react'
import { Link } from 'react-router-dom'

function ReviewCardUltra({review,preview,color}) {

    const iconColor = color ? color : 'black'

  return (
    <div className="m-[15px] ml-0 mr-0">
        {review?.map((reviewData) =>
          reviewData.reviewName ? (
            <Link
              to={`${preview ? reviewData?.reviewUrl : ""}`}
              target={`${preview ? "_blank" : ""}`}
            >
              <div className="flex items-center justify-center my-[15px]">
                <button className={`transparent  border-${iconColor} border p-2  gap-3  w-[90%] h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                  <div className={`flex pr-4 border-r    border-${iconColor} justify-center items-center`}>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 24H25V26H17V24ZM17 20H29V22H17V20ZM17 16H29V18H17V16Z"
                        fill={iconColor}
                      />
                      <path
                        d="M19.549 9.217L15 0L10.451 9.217L0.280029 10.695L7.64003 17.87L5.90203 28L13 24.269V22.009L8.55903 24.344L9.61103 18.208L9.78903 17.171L9.03603 16.438L4.57803 12.091L10.739 11.196L11.779 11.045L12.245 10.102L15 4.519L17.755 10.102L18.221 11.045L19.261 11.196L26.715 12.281L27 10.3L19.549 9.217Z"
                        fill={iconColor}
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold h-[19px] flex justify-left items-center h-[19px] flex justify-self-start  items-center m-0">
                    {reviewData?.reviewName
                      ? reviewData.reviewName
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

export default ReviewCardUltra