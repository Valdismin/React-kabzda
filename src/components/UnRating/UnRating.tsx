import React, {useState} from "react";


type RatingPropsType2 = {
    defaultValue?:number
}

export function UnRating(props:RatingPropsType2) {

    let [value, SetValue] = useState(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} SetValue={() => {
                SetValue(1)
            }}/>
            <Star selected={value > 1} SetValue={() => {
                SetValue(2)
            }}/>
            <Star selected={value > 2} SetValue={() => {
                SetValue(3)
            }}/>
            <Star selected={value > 3} SetValue={() => {
                SetValue(4)
            }}/>
            <Star selected={value > 4} SetValue={() => {
                SetValue(5)
            }}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    SetValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.SetValue()
    }}> {props.selected ? <b>star </b> : "star "} </span>
}