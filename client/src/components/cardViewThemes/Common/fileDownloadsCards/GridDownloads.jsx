import React from "react";
import { Link } from "react-router-dom";
import { downloadIcon } from "../SvgIcon";
function GridDownloads({ files, fileName, preview }) {
  return (
    <div className="grid grid-cols-2 items-center">
      {fileName?.fileName1 ? (
        <Link
          to={`${preview ? files.file1 : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >
          <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[54px]">
              {downloadIcon}
            </div>

            <p className="text-[11px] text-black font-medium text-center">
              {fileName.fileName1}
            </p>
          </div>
        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName2 ? (
        <Link
          to={`${preview ? files.file2 : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >
          <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[54px]">
              {downloadIcon}
            </div>

            <p className="text-[11px] text-black font-medium text-center">
              {fileName.fileName2}
            </p>
          </div>
        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName3 ? (
        <Link
          to={`${preview ? files.file3 : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >
          <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[54px]">
              {downloadIcon}
            </div>

            <p className="text-[11px] text-black font-medium text-center">
              {fileName.fileName3}
            </p>
          </div>
        </Link>
      ) : (
        ""
      )}
      {fileName?.fileName4 ? (
        <Link
          to={`${preview ? files.file4 : ""}`}
          target={`${preview ? "_blank" : ""}`}
        >
          <div className="max-w-[197px] h-[139px] border-[#F2F2F2] border items-center p-8">
            <div className="flex items-center justify-center h-[54px]">
              {downloadIcon}
            </div>

            <p className="text-[11px] text-black font-medium text-center">
              {fileName.fileName4}
            </p>
          </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default GridDownloads;
