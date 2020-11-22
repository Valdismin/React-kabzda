import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example2 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>
}



const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const useMemoCallback = () => {
    console.log("useMemoCallback")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[users])

    const addUser = () => {
        const newUsers = [...users , "Sveta"]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add Users</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "HTML", "CSS"])

    /*const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[books])*/

    const memorisedBook = useMemo(()=>{
        console.log("Memorised UseMemo")
        return () => {const newBooks = [...books , "Angular"]
        setBooks(newBooks)}
    },[books])

    const memorisedBook2 = useCallback(()=>{
        console.log("Memorised UseMemo")
        const newBooks = [...books , "Angular"]
            setBooks(newBooks)
    },[books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books  addBook={memorisedBook}/>
    </>
}

const BooksSecret = (props: { addBook:()=> void }) => {
    return <div>
        <button onClick={() => props.addBook()}>Add Book</button>
        </div>
}

const Books = React.memo(BooksSecret)