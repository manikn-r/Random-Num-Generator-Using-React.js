import { useState } from "react";

function RandNoGen(){
    let [randNo,updateNo] = useState(0);
        let genNum = ()=>{
updateNo(Math.floor((Math.random()*100)+1));
    }
return(
    <>
    <div className="rand-container">
    <div className="title"><h2>Random Number Generator ( 1 to 100 )</h2></div>
    <div className="displayNo">{randNo === 0 ? "No number generated yet": randNo}</div>
    <br></br>
    <button onClick={genNum}>Generate Random Number</button>
    </div>
    </>
)
}
export default RandNoGen;