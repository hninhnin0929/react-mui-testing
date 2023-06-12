//Updating arrays without mutation
//Adding to an array
//

import { useState } from "react";

let nextId = 0;

export default function ArrUpdate(){

    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return(
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={()=>{
                setArtists([
                    ...artists,
                    { id: nextId++, name: name}
                ])
            }}>
                Add
            </button>
            <ur>
                {
                    artists.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))
                }
            </ur>
        </>
    );
}