import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/UnAccordion/UnAccordion";
import {UnRating} from './components/UnRating/UnRating';
import {UnOnOff} from "./components/UnOnOff/UnOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<number>(0)
    let [accordionValue, setAccordionValue] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    return (
        <div className={"App"}>
            {/*<Rating value={ratingValue} onClick = {setRatingValue}/>
            <UnRating/>
            <OnOff on = {on} onChange={(on) => {setOn(on)}}/>
            <UnOnOff onChange = {setOn} /> {on.toString()}*/}

                <UnAccordion titleValue={'Что-то интересное!'} />
                <Accordion titleValue={"They win!"} collapsed={accordionValue} onChange = {() => setAccordionValue(!accordionValue)} onClick={()=>{}} items ={[{title:"dfsdf",value:1},{title:"dfsdfsdfgf",value:2}]}  />


        </div>
    );
}

type AppTitleType = {
    title: string
}

function AppTitle(props: AppTitleType) {
    return (<h1>{props.title}</h1>
    )
}


export default App;
