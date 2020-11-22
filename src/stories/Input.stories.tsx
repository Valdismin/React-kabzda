import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Button} from "./Button";

export default {
    title: 'Input',
    component: Button,
}

export const UnInput = () => <input/>

export const TrackValueUnInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value
      setValue(actualValue)
    }
    }/> {value}</>
}
export const Input = () => <input value={"sdfsdf"}/>

export const ControlledInput =() => {
    const [parentValue,setParentValue] = useState("")
    return <input value={parentValue} onChange={(e) =>{setParentValue(e.currentTarget.value)}}/>
}


export const ControlledCheckBox = () => {
 return <div></div>
}
export const ControlledSelect = () => {
    return <div></div>
}