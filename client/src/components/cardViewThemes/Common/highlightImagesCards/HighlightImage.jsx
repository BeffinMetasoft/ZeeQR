import React, { useContext } from 'react'
import { CardContext } from '../../../store/CardContext'
// import { useSelector } from 'react-redux';

function HighlightImage({ preview, theme }) {
  const [cardData] = useContext(CardContext)

  const {

    highlightPhotos1,
    highlightPhotos2,
    highlightPhotos3,
    highlightPhotos4,
    highlightPhotos5,
    highlightPhotos6,
    highlightPhotos7,
    highlightPhotos8,
  } = cardData
  return (
    <>
      {highlightPhotos1 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos1}
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos2 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos2}
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos3 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos3}
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos4 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={ highlightPhotos4 }
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos5 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos5 }
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos6 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos6}
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos7 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={highlightPhotos7}
          alt=""
        />
      ) : (
        ""
      )}
      {highlightPhotos8 ? (
        <img
          className={`mb-4 ${theme ? 'rounded-xl' : ''} `}
          src={ highlightPhotos8}
          alt=""
        />
      ) : (
        ""
      )}
    </>
  )
}

export default HighlightImage