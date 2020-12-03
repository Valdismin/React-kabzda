import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digits = (num:number) => {
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

    return <div>
        <span>{get2digits(date.getHours())}</span>
        :
        <span>{get2digits(date.getMinutes())}</span>
        :
        <span>{get2digits(date.getSeconds())}</span>
    </div>
}