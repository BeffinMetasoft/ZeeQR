import React, { useContext } from "react";
import { CardContext } from "../../store/CardContext";

function TabMenu({ activeTab, handleTabClick,Highlightcolor }) {
  const [cardData] = useContext(CardContext)
  const {
    website,
    review,
    fileName,
  } = cardData
  return (
    <div className="flex">
      <ul className="flex overflow-x-scroll w-100 scrollbar-hide bg-slate-100">
        <li
          className={`mb-0 ${
            activeTab === 1 ? " bg-[#F4F4F4] border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="hover:bg-[#F4F4F4] w-[121px] h-[49px] flex justify-center items-center h-[50px]">
            <svg
              width="28"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill={Highlightcolor ? Highlightcolor : "black"}
              />
            </svg>
          </div>
        </li>
        <li
          className={`mb-0 ${
            activeTab === 2 ? "bg-[#F4F4F4] border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          <div className=" w-[121px] h-[49px] flex justify-center items-center h-[50px]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_138_251)">
                <path
                  d="M24.9375 3.67503C24.6366 3.4804 24.2926 3.36265 23.9356 3.33214C23.5786 3.30162 23.2195 3.35928 22.89 3.50003L12.0925 7.75253C11.8369 7.85657 11.5635 7.91005 11.2875 7.91003H4.375C3.79484 7.91003 3.23844 8.1405 2.8282 8.55073C2.41797 8.96097 2.1875 9.51737 2.1875 10.0975V10.2725H0V15.5225H2.1875V15.75C2.20121 16.321 2.43771 16.864 2.84647 17.263C3.25523 17.6619 3.80382 17.8852 4.375 17.885L7 23.45C7.17775 23.8248 7.45759 24.1418 7.80738 24.3647C8.15718 24.5876 8.56274 24.7073 8.9775 24.71H10.08C10.6571 24.7054 11.209 24.4729 11.6155 24.0632C12.022 23.6534 12.25 23.0997 12.25 22.5225V18.095L22.89 22.3475C23.1517 22.4517 23.4308 22.5051 23.7125 22.505C24.1495 22.498 24.575 22.3642 24.9375 22.12C25.2253 21.9257 25.4628 21.6656 25.6301 21.3613C25.7975 21.057 25.89 20.7172 25.9 20.37V5.47753C25.8984 5.12143 25.8099 4.77111 25.6421 4.45699C25.4744 4.14287 25.2325 3.87444 24.9375 3.67503ZM10.0625 10.0975V15.75H4.375V10.0975H10.0625ZM10.0625 22.5225H8.96L6.8075 17.885H10.0625V22.5225ZM12.8975 16.0125C12.6897 15.9063 12.4731 15.8185 12.25 15.75V9.97503C12.4709 9.92945 12.6876 9.86504 12.8975 9.78253L23.7125 5.47753V20.3175L12.8975 16.0125ZM25.9525 10.71V15.085C26.5327 15.085 27.0891 14.8546 27.4993 14.4443C27.9095 14.0341 28.14 13.4777 28.14 12.8975C28.14 12.3174 27.9095 11.761 27.4993 11.3507C27.0891 10.9405 26.5327 10.71 25.9525 10.71Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </g>
              <defs>
                <clipPath id="clip0_138_251">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </li>
        <li
          className={`mb-0 ${
            activeTab === 3 ? " bg-[#F4F4F4] border-b-2 border-black" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          {" "}
          <div className=" w-[121px] h-[49px] flex justify-center items-center h-[50px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 7.99997C18 8.5304 17.7893 9.03911 17.4142 9.41418C17.0391 9.78926 16.5304 9.99997 16 9.99997C15.4696 9.99997 14.9609 9.78926 14.5858 9.41418C14.2107 9.03911 14 8.5304 14 7.99997C14 7.46954 14.2107 6.96083 14.5858 6.58576C14.9609 6.21068 15.4696 5.99997 16 5.99997C16.5304 5.99997 17.0391 6.21068 17.4142 6.58576C17.7893 6.96083 18 7.46954 18 7.99997Z"
                fill={Highlightcolor ? Highlightcolor : "black"}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.943 1.24997H12.057C14.366 1.24997 16.175 1.24997 17.587 1.43997C19.031 1.63397 20.171 2.03997 21.066 2.93397C21.961 3.82897 22.366 4.96897 22.56 6.41397C22.75 7.82497 22.75 9.63397 22.75 11.943V12.031C22.75 13.94 22.75 15.502 22.646 16.774C22.542 18.054 22.329 19.121 21.851 20.009C21.641 20.4 21.381 20.751 21.066 21.066C20.171 21.961 19.031 22.366 17.586 22.56C16.175 22.75 14.366 22.75 12.057 22.75H11.943C9.634 22.75 7.825 22.75 6.413 22.56C4.969 22.366 3.829 21.96 2.934 21.066C2.141 20.273 1.731 19.286 1.514 18.06C1.299 16.857 1.26 15.36 1.252 13.502C1.25 13.029 1.25 12.529 1.25 12.001V11.943C1.25 9.63397 1.25 7.82497 1.44 6.41297C1.634 4.96897 2.04 3.82897 2.934 2.93397C3.829 2.03897 4.969 1.63397 6.414 1.43997C7.825 1.24997 9.634 1.24997 11.943 1.24997ZM6.613 2.92597C5.335 3.09797 4.564 3.42597 3.995 3.99497C3.425 4.56497 3.098 5.33497 2.926 6.61397C2.752 7.91397 2.75 9.62197 2.75 12V12.844L3.751 11.967C4.1902 11.5828 4.75902 11.3798 5.34223 11.3993C5.92544 11.4188 6.47944 11.6593 6.892 12.072L11.182 16.362C11.5149 16.6948 11.9546 16.8996 12.4235 16.9402C12.8925 16.9808 13.3608 16.8546 13.746 16.584L14.044 16.374C14.5997 15.9835 15.2714 15.7931 15.9493 15.834C16.6273 15.8749 17.2713 16.1446 17.776 16.599L20.606 19.146C20.892 18.548 21.061 17.762 21.151 16.653C21.249 15.448 21.25 13.946 21.25 12C21.25 9.62197 21.248 7.91397 21.074 6.61397C20.902 5.33497 20.574 4.56397 20.005 3.99397C19.435 3.42497 18.665 3.09797 17.386 2.92597C16.086 2.75197 14.378 2.74997 12 2.74997C9.622 2.74997 7.913 2.75197 6.613 2.92597Z"
                fill={Highlightcolor ? Highlightcolor : "black"}
              />
            </svg>
          </div>
        </li>
        {website[0]?.websiteName ? (
          <li
            className={`mb-2 ${
              activeTab === 4 ? " bg-[#F4F4F4] border-b-2 border-black" : ""
            }`}
            onClick={() => handleTabClick(4)}
          >
            {" "}
            <div className=" w-[121px] h-[49px] flex justify-center items-center h-[50px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.41667 9.91683H4.08334C3.27639 9.91683 2.58845 9.63236 2.01951 9.06341C1.45056 8.49447 1.16628 7.80672 1.16667 7.00016C1.16667 6.19322 1.45114 5.50527 2.02009 4.93633C2.58903 4.36739 3.27678 4.08311 4.08334 4.0835H6.41667V5.25016H4.08334C3.59723 5.25016 3.18403 5.4203 2.84376 5.76058C2.50348 6.10086 2.33334 6.51405 2.33334 7.00016C2.33334 7.48627 2.50348 7.89947 2.84376 8.23975C3.18403 8.58002 3.59723 8.75016 4.08334 8.75016H6.41667V9.91683ZM4.66667 7.5835V6.41683H9.33334V7.5835H4.66667ZM7.58334 9.91683V8.75016H9.91667C10.4028 8.75016 10.816 8.58002 11.1563 8.23975C11.4965 7.89947 11.6667 7.48627 11.6667 7.00016C11.6667 6.51405 11.4965 6.10086 11.1563 5.76058C10.816 5.4203 10.4028 5.25016 9.91667 5.25016H7.58334V4.0835H9.91667C10.7236 4.0835 11.4116 4.36797 11.9805 4.93691C12.5494 5.50586 12.8337 6.19361 12.8333 7.00016C12.8333 7.80711 12.5489 8.49505 11.9799 9.064C11.411 9.63294 10.7232 9.91722 9.91667 9.91683H7.58334Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </svg>
            </div>
          </li>
        ) : (
          ""
        )}
        {review[0]?.reviewName ? (
          <li
            className={`mb-2 ${
              activeTab === 5 ? " bg-[#F4F4F4] border-b-2 border-black" : ""
            }`}
            onClick={() => handleTabClick(5)}
          >
            {" "}
            <div className=" w-[121px] h-[49px] flex justify-center items-center h-[50px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.549 9.217L15 0L10.451 9.217L0.280029 10.695L7.64003 17.87L5.90203 28L13 24.269V22.009L8.55903 24.344L9.61103 18.208L9.78903 17.171L9.03603 16.438L4.57803 12.091L10.739 11.196L11.779 11.045L12.245 10.102L15 4.519L17.755 10.102L18.221 11.045L19.261 11.196L26.715 12.281L27 10.3L19.549 9.217Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </svg>
            </div>
          </li>
        ) : (
          ""
        )}
        {fileName?.fileName1 ||
        fileName?.fileName2 ||
        fileName?.fileName3 ||
        fileName?.fileName4 ? (
          <li
            className={`mb-2 ${
              activeTab === 6 ? " bg-[#F4F4F4] border-b-2 border-black" : ""
            }`}
            onClick={() => handleTabClick(6)}
          >
            {" "}
            <div className=" w-[121px] h-[49px] flex justify-center items-center h-[50px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 22.8684L6.2895 13.6579L8.86845 10.9869L13.6579 15.7763V0.763184H17.3421V15.7763L22.1316 10.9869L24.7106 13.6579L15.5 22.8684ZM4.4474 30.2369C3.43424 30.2369 2.56661 29.8758 1.8445 29.1537C1.1224 28.4316 0.761959 27.5646 0.763187 26.5527V21.0263H4.4474V26.5527H26.5527V21.0263H30.2369V26.5527C30.2369 27.5658 29.8758 28.4334 29.1537 29.1555C28.4316 29.8777 27.5646 30.2381 26.5527 30.2369H4.4474Z"
                  fill={Highlightcolor ? Highlightcolor : "black"}
                />
              </svg>
            </div>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default TabMenu;
