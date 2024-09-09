import {useState, useEffect} from "react";

export default function Counter(){
    let [countx,setCountx]= useState(0);
    let [county,setCounty]= useState(0);
    let incCountx=()=>{
        setCountx((currCountx)=>currCountx+1);
    };
    let incCounty=()=>{
        setCounty((currCounty)=>currCounty+1);
    };

    useEffect(function printSomething(){
        console.log("side effect");
    },[countx])
    return(
        <div>
            <h3>count = {countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>count = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}