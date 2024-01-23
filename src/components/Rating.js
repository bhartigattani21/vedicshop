import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating, onClick, style }) => {
    return (
        <span>
            {[...Array(5)].map((_, i) => {
               return <span key={i} onClick={() => onClick(i)} style={style}>
                    {rating > i ? (
                        <AiFillStar fontSize="15px" />
                    ) : (
                        <AiOutlineStar fontSize="15px" />
                    )}
                </span>
            })}
        </span>
    )
}

export default Rating