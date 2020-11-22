import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnAccordion} from "./UnAccordion";

export default {
    title: 'UnAccordion',
    component: UnAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}



export const ModeChanging = () => {
    return <UnAccordion titleValue={"User"}/>
}