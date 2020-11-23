import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const Example1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("UseEffect only first render")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("UseEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello,{counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}

export const SetTimeOutExample1 = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state)=>state+1)
        }, 1000)
    }, [])


    return <>
        Hello,{counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}



