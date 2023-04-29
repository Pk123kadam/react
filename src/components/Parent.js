import FirstComponent from "./FirstComponent"
import { useState } from "react"

const Parent = () => {
    const text = "pk"
    const [namee, setNamee] = useState("initial value")
    const [color, setColor] = useState("red")
    const [data, setData] = useState(true)
    const cl = () => {
        if (data) {
            if (color == "red") {
                setColor("green")
                setData(false)

            } else {
                setColor("red")
            }


            setNamee("pk")

        } else {
            if (color == "green") {
                setColor("yellow")
            }
            setNamee("rk")
            setData(true)

        }



    }


    return (
        <>
            <h1 >Parent</h1>
            <FirstComponent name={namee} toggle={data} color={color} state={namee} fn={setNamee}></FirstComponent>
            <button onClick={cl}>click</button>
            <h1>{namee}</h1>
        </>
    )
}

export default Parent