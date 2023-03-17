// import React, { useEffect, useState } from 'react'
// import { getSavedCards } from '../../api/UserRequest'
// import CardSaved from '../cards/CardSaved'

// function SavedCards() {
//   const [savedCards,setSavedCards]= useState([])
//   const [deletes,setDeletes]=useState('')
//   useEffect(()=>{
//     const allSavedCards=async()=>{
//       try {
//         const {data}= await getSavedCards()
//         console.log(data,'savedCards');
//         if (data.success) {
//           setSavedCards(data.card)
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     allSavedCards()
//   },[deletes])
//   return (
//     <div>
//         <h1 className='text-4xl text-center pt-[50px] font-bold uppercase'>your saved cards</h1>
//         <div className='p-5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
//           {savedCards.map((obj,index)=>{
//             return(
//               <CardSaved card={obj} setDeletes={setDeletes} key={index} />
//             )
//           })}
           
            

//         </div>
//         <div className='flex justify-around my-10'>
//             <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0'>Delete All</button>
//             <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black hover:bg-slate-800 transition mt-4 lg:mt-0'>Create New Design</button>
//         </div>
//     </div>
//   )
// }

// export default SavedCards


import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function SavedCards() {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 30,
    aspect: 16 / 9
  });
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageSelect = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => setImageSrc(reader.result));
    reader.readAsDataURL(selectedImage);
  };

  const handleCropComplete = (cropResult) => {
    if (cropResult.width && cropResult.height) {
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = cropResult.width;
        canvas.height = cropResult.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          image,
          cropResult.x * scaleX,
          cropResult.y * scaleY,
          cropResult.width * scaleX,
          cropResult.height * scaleY,
          0,
          0,
          cropResult.width,
          cropResult.height
        );
        const croppedImageURL = canvas.toDataURL();
        setCroppedImage(croppedImageURL);
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageSelect} />
      {imageSrc && (
        <ReactCrop
          src={imageSrc}
          onImageLoaded={(image) => {
            setCrop({
              unit: "%",
              width: 30,
              aspect: image.width / image.height
            });
          }}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={(cropResult) => handleCropComplete(cropResult)}
        />
      )}
      {croppedImage && (
        <img src={croppedImage} alt="Cropped Image" />
      )}
    </div>
  );
}

export default SavedCards;