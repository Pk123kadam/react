
import { useState } from "react"

import Todo from "./todo"
import Notes from "./Notes"
function FinalTodo() {
    const [app, Setapp] = useState([])
    const [edit, Sett] = useState({})


    function addd(e) {
        Setapp([...app, e])


    }
    function Setedit(e) {
        Sett({ ...e })



    }

    function ll(i) {
        app.splice(i, 1)
        Setapp([...app])


    }
    console.log(edit)




    return (
        <>


            <Todo onAdd={addd} onUpdate={edit}></Todo>
            <ol>
                {app.map((e, i) =>
                    <Notes data={e} index={i} btn={ll} key={i} up={Setedit} ></Notes>


                )}</ol>

        </>)


}

export default FinalTodo