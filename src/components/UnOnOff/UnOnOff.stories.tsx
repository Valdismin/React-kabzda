import React, {useState} from 'react';
import {UnOnOff} from "./UnOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnOnOff',
    component: UnOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const OnMode = () => <UnOnOff  onChange={action("on or off clicked")} defaultOn={true} />
export const OffMode = () => <UnOnOff onChange={action("on or off clicked")} defaultOn={false}/>
