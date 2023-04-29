
import { useEffect, useState } from "react"

function Todo({ onAdd, onUpdate }) {
    const [notes, Setnotes] = useState({
        title: "",
        content: ""
    })
    function handlechange(e) {
        const { name, value } = e.target
        // Setnotes((previous) => {
        //     return { ...previous, [name]: value }
        // })
        Setnotes({ ...notes, [name]: value })





    }
    useEffect(() => {
        Setnotes(onUpdate)
    }, [onUpdate])




    return (

        <>
            <h1>CREATE NOTES</h1>
            <form >
                <input name="title" placeholder="title" onChange={handlechange} value={notes.title} style={{ width: "300px", height: '50px', borderRadius: "50px", padding: "20px", margin: "30px 0 30px 0" }}></input><br></br>
                <textarea name="content" placeholder="description" onChange={handlechange} value={notes.content} style={{ width: "300px", height: '50px', padding: "10px", marginBottom: "20px", borderRadius: "10px" }}></textarea><br></br>
                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault()
                    onAdd(notes)


                    console.log(notes)
                    Setnotes({
                        title: "",
                        content: ""


                    })
                }}>ADD</button>
            </form >
        </>
    )
}

export default Todo