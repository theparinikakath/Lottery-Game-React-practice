import { useEffect, useState } from "react";

export default function Joker(){
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
        let res= await fetch(URL);
        let jsonres=await res.json();
        console.log(jsonres);
        setJoke({setup:jsonres.setup, punchline:jsonres.punchline})
    }

    useEffect(()=>{async function getFirstJoke(){
        let res= await fetch(URL);
        let jsonres=await res.json();
        console.log(jsonres);
        setJoke({setup:jsonres.setup, punchline:jsonres.punchline})
    }
    getFirstJoke();
},[])

    let [joke,setJoke]=useState(getNewJoke);

    return(
        <div>
            <h3>joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New joke</button>
        </div>
    );
}