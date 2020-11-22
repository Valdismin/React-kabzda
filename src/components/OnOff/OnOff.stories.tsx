import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const OnMode = () => <OnOff on={true} onChange={action("on or off clicked")} />
export const OffMode = () => <OnOff on={false} onChange={action("on or off clicked")} />
export const ModeChanging = () => {
    const [value,setValue] = useState(true)
    return <OnOff on={value} onChange={setValue}/>
}