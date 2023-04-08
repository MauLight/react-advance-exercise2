import React, { useState } from "react";


export const Test = () => {

    const [text, setText] = useState("");

    return (
        <form onSubmit={() => alert("Submitting")}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <input type="button" value="Submit" onClick={() => console.log("Fuck!")}/>
        </form>
    )
};