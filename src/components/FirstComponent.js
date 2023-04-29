import React from "react"
import { useState, useEffect } from "react"

const FirstComponent = ({ name, title, toggle, color, state, fn }) => {
    const [child, Setchild] = useState("")
    const [btn, Setbtn] = useState(true)
    useEffect(() => {
        if (toggle) {
            Setchild("child1")
        } else {
            Setchild("child2")
        }
    }, [toggle])

    // if (toggle) {
    //     Setchild("child1")
    // } else {
    //     Setchild("child2")
    // }

    if (btn) {
        fn("true parent")
    } else {
        fn("false parent")
    }

    return (


        <div style={{ backgroundColor: color }}>
            <h1>1</h1>
            <h1>{name}</h1>
            <h1>{title}</h1>
            <h1>this is child {child}</h1>
            <button onClick={() => Setbtn(!btn)}>child button</button>

        </div>




    )
}

export default FirstComponent