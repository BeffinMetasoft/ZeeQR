import React from 'react'
import { Link } from 'react-router-dom'

function Review({ review, preview,theme }) {
  return (
    <div>
      {review?.map((reviewData) =>
        reviewData.reviewName
          ? (
            <Link
              to={`${preview ? reviewData?.reviewUrl
                : ""}`}
              target={`${preview ? "_blank" : ""}`}
            >
              <div className="flex gap-3 mt-2 bg-white  p-2 rounded-[8px] justify-between">
                <div className="flex gap-3">
                  <div className="text-black">
                  <svg width="32" className=' mt-2' height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 26H26V28H18V26ZM18 22H30V24H18V22ZM18 18H30V20H18V18Z" fill="black"/>
<path d="M20.549 11.217L16 2L11.451 11.217L1.28003 12.695L8.64003 19.87L6.90203 30L14 26.269V24.009L9.55903 26.344L10.611 20.208L10.789 19.171L10.036 18.438L5.57803 14.091L11.739 13.196L12.779 13.045L13.245 12.102L16 6.519L18.755 12.102L19.221 13.045L20.261 13.196L27.715 14.281L28 12.3L20.549 11.217Z" fill="black"/>
</svg>
                  </div>
                  <div className=" flex items-center text-black text-[14px] h-[50px]">
                    <p className="text-[14px] font-semibold text-left  m-0">

                      {reviewData?.reviewName
                        ? reviewData.reviewName
                        : "Review Name"}
                    </p>
                  </div>
                </div>

                <div>
                  {theme ? "" :
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.75"
                        cy="1.75"
                        r="1.75"
                        fill="black"
                      />
                      <circle
                        cx="7.25"
                        cy="1.75"
                        r="1.75"
                        fill="black"
                      />
                      <circle
                        cx="7.25"
                        cy="7.25012"
                        r="1.75"
                        fill="black"
                      />
                    </svg>
                  }
                </div>
              </div>
            </Link>
          ) : (
            ""
          )
      )}
    </div>
  )
}

export default Review