
import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock demo'
}


export const AnalogExample1 = () => {

    return <Clock mode={"analog"}/>
}
export const DigitalExample1 = () => {

    return <Clock mode={"digital"}/>
}


