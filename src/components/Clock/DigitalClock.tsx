import React from "react";
import {ClockPropsType, get2digits} from "./Clock";

export const DigitalClockView:React.FC<ClockPropsType> = (props) => {
    return <>
        <span>{get2digits(props.date.getHours())}</span>
        :
        <span>{get2digits(props.date.getMinutes())}</span>
        :
        <span>{get2digits(props.date.getSeconds())}</span>
    </>
}