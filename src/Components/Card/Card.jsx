import React from "react";


export function Card({children, title, attribut}) {
    return(
        <>
            <div className={attribut}>
                <p className="font-weight-bold">{title}</p>
                {children}
            </div>
        </>
    )
}