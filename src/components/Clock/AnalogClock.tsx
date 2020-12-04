import React from "react";
import {ClockPropsType, get2digits} from "./Clock";
import "./AnalogClock.css"

export const AnalogClockView: React.FC<ClockPropsType> = (props) => {
    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return <div className={"clock"}>
        <div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle} />
            <div className={"dial minutes"} style={minutesStyle} />
            <div className={"dial hours"} style={hoursStyle} />
        </div>
    </div>
}