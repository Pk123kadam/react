function Notes({ data, index, btn, up }) {

    return (
        <div className="d-flex flex-column gap-4 mt-5 bg-dark" style={{ width: "50%", margin: "5px auto 0px auto", color: "white", borderRadius: "20px", padding: "80px" }}>
            {/* <h1>{data.title}</h1> */}

            <li className="  bg-primary p-3 rounded-pill m-auto" style={{ color: "white", fontSize: "20px", width: "40%" }}>{data.title}</li>

            <p style={{ width: "100%", whiteSpace: "normal", wordBreak: "break-all" }}>{data.content}</p>
            <div>
                <button onClick={() => btn(index)} className="btn btn-danger me-4">DELETE</button>
                <button onClick={() => {
                    up(data)



                    btn(index)
                }} className="btn btn-primary">EDIT</button>
            </div>

        </div>
    )
}

export default Notes