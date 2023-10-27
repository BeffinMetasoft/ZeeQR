import React from "react";
import { Link } from "react-router-dom";

function DownloadBasic({ files, fileName, preview, color }) {
  const { file1, file2, file3, file4 } = files;
  const HColor = color ? color : 'black'
  return (
    <div>

      {fileName?.fileName1 ? (
        <Link
          to={`${preview ? file1?.fileUrl : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >


          <div className="flex justicy-center items-center gap-[20px] mt-2">
            <svg
              width="24"
              height="40"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                fill={HColor}
              />
            </svg>

            <p className="text-[14px] font-normal text-left my-2" style={{ color: HColor }}>
              {fileName?.fileName1 ? fileName.fileName1 : "File Name"}
            </p>
          </div>

        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName2 ? (
        <Link
          to={`${preview ? file2?.fileUrl : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >

          <div className="flex justicy-center items-center gap-[20px] mt-2">
            <svg
              width="24"
              height="40"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                fill={HColor}
              />
            </svg>
            <p className="text-[14px] font-normal text-left my-2" style={{ color: HColor }}>
              {fileName?.fileName2 ? fileName.fileName2 : "File Name"}
            </p>
          </div>

        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName3 ? (
        <Link
          to={`${preview ? file3?.fileUrl : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >

          <div className="flex justicy-center items-center gap-[20px] mt-2">
            <svg
              width="24"
              height="40"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                fill={HColor}
              />
            </svg>
            <p className="text-[14px] font-normal text-left my-2" style={{ color: HColor }}>
              {fileName?.fileName3 ? fileName.fileName3 : "File Name"}
            </p>
          </div>

        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName4 ? (
        <Link
          to={`${preview ? file4?.fileUrl : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >

          <div className="flex justicy-center items-center gap-[20px] mt-2">
            <svg
              width="24"
              height="40"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                fill={HColor}
              />
            </svg>
            <p className="text-[14px] font-normal text-left my-2" style={{ color: HColor }}>
              {fileName?.fileName4 ? fileName.fileName4 : "File Name"}
            </p>
          </div>

        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default DownloadBasic;