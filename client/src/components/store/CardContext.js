import { createContext, useState } from 'react'
export const CardContext = createContext('')


function Card({ children }) {
    
    const [cardData, setCardData] = useState('')

    return (
        <CardContext.Provider value={[cardData, setCardData]}>
            {children}
        </CardContext.Provider>
    )
}

export default Card;