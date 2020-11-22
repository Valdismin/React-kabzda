import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type actionType = {
    type:string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export const reducer = (state:boolean,action:actionType)=> {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state
        default: throw new Error("Mudak!")
        }
    return state
}

export function UnAccordion(props: AccordionPropsType) {
    //let[collapsed, setCollapsed] = useState(false)

    let[collapsed, dispatch] = useReducer(reducer,false)
    return (
        <div>
           {/* <AccordionTitle title={props.titleValue} onClick = {() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick = {() => {dispatch({type:TOGGLE_COLLAPSED})}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

