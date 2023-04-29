import "./Profile.css"
const Profile = (prop) => {
    return (
        <>
            <h1 id="pro">{prop.name}</h1>
            <button className="btn btn-primary">profile button</button>
        </>
    )
}

export default Profile