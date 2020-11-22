import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} onChange={action("accordion mode change event fired")} collapsed={true} items ={[]} onClick={action("some item was clicked")}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={"User"} onChange={action("accordion mode change event fired")} collapsed={false} items ={[{title:"dfsdf",value:1},{title:"dfsdfsdfgf",value:2}]} onClick={action("some item was clicked")}/>


export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <Accordion titleValue={"User"} onChange={() => setValue(!value)} collapsed={value} items ={[{title:"dfsdf",value:1},{title:"dfsdfsdfgf",value:2}]} onClick={(id) => {alert (`user with ID ${id} should be happy`) }}/>
}