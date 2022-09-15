import React from "react";


export function Button({title, attribut, closeInfo}) {
    return(
        <>
            <button type="submit" className={attribut} onClick={()=>closeInfo()}>{title}</button>
        </>
    )
}