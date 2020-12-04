import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClock";
import {AnalogClockView} from "./AnalogClock";

type PropsType = {
    mode?:"analog" | "digital"
}

export type ClockPropsType = {
    date:Date
}

export const get2digits = (num:number) => {
    return num < 10 ? "0" + num : num
}

export const Clock : React.FC<PropsType> = (props) => {
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        const set = setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(set)
        }

    },[])

    let view
    switch (props.mode) {
        case "analog":
            view =<AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>

    }



    return <div>
        {view}
    </div>
}


