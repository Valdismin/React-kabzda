import React, {useState} from 'react';
import {Rating} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const EmptyRating = () => <Rating value={0} onClick={X=>X}/>
export const Rating1 = () => <Rating value={1} onClick={X=>X}/>
export const Rating2 = () => <Rating value={2} onClick={X=>X}/>
export const Rating3 = () => <Rating value={3} onClick={X=>X}/>
export const Rating4 = () => <Rating value={4} onClick={X=>X}/>
export const Rating5 = () => <Rating value={5} onClick={X=>X}/>
export const ChangeRating = () => {
    const [rating,setRating] = useState(1)
    return <Rating value={rating} onClick={setRating}/>
}