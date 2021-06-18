import { React, useState } from 'react'
import {Link} from 'react-router-dom'


function Join() {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");


    return (
        <div className="joinContainer container-sm">
        <br></br>
        <br></br>
        <br></br>
            <div className="joinOuterContainer container-fluid">
            <h3 className="heading row">Sign In</h3>
                <div className="joinInnerContainer container-fluid">
                    <div className="input row"><input placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} /></div>
                    <div className="input mt-2 row"><input placeholder="Room No." type="text" value={room} onChange={(e)=>setRoom(e.target.value)} /></div>
                    <Link onClick={(e)=>(!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                        <button type="submit" className="button">Hop In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join