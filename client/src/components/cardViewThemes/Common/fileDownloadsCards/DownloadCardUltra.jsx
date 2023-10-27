import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../../store/CardContext";

function DownloadCardUltra({preview,color}) {
  const [cardData] = useContext(CardContext)
  const {  fileName, files } = cardData
  const { file1, file2, file3, file4 } = files;

  const iconColor = color ? color : 'black'

  

  return (
    <>
      

      {/* -----------------------------------------------------------Dowloads Area---------------------------------------------------------------------------------------- */}
      <div className="my-[15px] ml-0 mr-0">
        {fileName?.fileName1 ? (
          <Link
            to={`${preview ? file1 : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <div className="flex items-center justify-center m-[15px]">
              <button className={`transparent  border-${iconColor} border p-2 gap-3 w-full h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                <div className={`flex pr-4 border-r    border-${iconColor} justify-center items-center`}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                      fill={iconColor}
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold h-[19px] flex justify-left items-center h-[19px] flex justify-self-start  items-center m-0">
                  {fileName?.fileName1}
                </p>
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="my-[15px]">
        {fileName?.fileName2 ? (
          <Link
            to={`${preview ? file2 : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <div className="flex items-center justify-center m-[15px]">
            <button className={`transparent  border-${iconColor} border p-2 gap-3 w-full h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                <div className={`flex pr-4 border-r    border-${iconColor} justify-center items-center`}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                      fill={iconColor}
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold m-2  flex justify-center items-center mt-2 ">
                  {fileName?.fileName2}
                </p>
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="my-[15px]">
        {fileName?.fileName3 ? (
          <Link
            to={`${preview ? file3 : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <div className="flex items-center justify-center m-[15px]">
            <button className={`transparent  border-${iconColor} border p-2 gap-3 w-full h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                <div className={`flex pr-4 border-r    border-${iconColor} justify-center items-center`}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                      fill={iconColor}
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold m-2  flex justify-center items-center mt-2 ">
                  {fileName?.fileName3}
                </p>
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="my-[15px]">
        {fileName?.fileName4 ? (
          <Link
            to={`${preview ? file4 : ""}`}
            target={`${preview ? "_blank" : ""}`}
          >
            <div className="flex items-center justify-center m-[15px]">
            <button className={`transparent  border-${iconColor} border p-2 gap-3 w-full h-[49px]  rounded-[6px] border-[1px] flex justify-left items-center`}>
                <div className={`flex pr-4 border-r    border-${iconColor} justify-center items-center`}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                      fill={iconColor}
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold m-2  flex justify-center items-center mt-2 ">
                  {fileName?.fileName4}
                </p>
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      
    </>
  );
}

export default DownloadCardUltra;
