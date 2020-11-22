import React, {useState} from 'react';
import {UnRating} from "./UnRating";

export default {
    title: 'UnRating',
    component: UnRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const EmptyRating = () => <UnRating defaultValue={0} />
export const Rating1 = () => <UnRating defaultValue={1} />
export const Rating2 = () => <UnRating defaultValue={2} />
export const Rating3 = () => <UnRating defaultValue={3} />
export const Rating4 = () => <UnRating defaultValue={4} />
export const Rating5 = () => <UnRating defaultValue={5} />
