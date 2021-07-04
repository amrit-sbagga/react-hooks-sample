import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

const Jokes = () => {

    const myJokesHeading = useRef(null);
    const fNameInput = useRef(null);

    const [joke, setJoke] = useState("loading");
    const [fname, setFirstName] = useState("M");
    const [lname, setLastName] = useState("Singh");

    const newJoke = (first, last) => {
        fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
        .then(res => res.json())
        .then(resp => {
            console.log("resp", resp);
            setJoke(resp.value.joke)
        })
    }

    useEffect(() => {
        console.log("myJokesHeading = ", myJokesHeading.current.innerText);
        //console.log("fNameInput = ", fNameInput.current);
        fNameInput.current.focus();
    }, []) //behaves like componentDidMount of class based component

    useEffect(() => {
        newJoke(fname, lname)
    }, [fname, lname]) //will get called on fname & lname changes

    return (
        <div>
            <h3 ref={myJokesHeading}>Jokes</h3>
            <input type="text" ref={fNameInput} value={fname} onChange={(e)=>setFirstName(e.target.value)} />
            <input type="text" value={lname} onChange={(e)=>setLastName(e.target.value)} />
            <h3>{joke}</h3>
            <button onClick={() => newJoke(fname, lname)}>Get Another Joke</button>
            <br/>
            <Link to="/">Go to Home</Link>
        </div>    
    )
}

export default Jokes;