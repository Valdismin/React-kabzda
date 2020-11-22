import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moskow"}]}
                onChange={setValue}/>
    </>
}


export const WithOutValue = () => <Select items={[{value: "1", title: "Minsk"}, {value: "2", title: "Moskow"}]}
                                          onChange={action("value changed")}/>