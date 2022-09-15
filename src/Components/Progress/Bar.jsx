import React, {useEffect, useState} from "react";
import "./style.css"


export function Bar({height, title}) {
    const [average, setAverage] = useState(0);
    useEffect(()=>{
        const interval = setTimeout(()=>{
            if(average<height){
                setAverage(average+1);
            }
        }, 50)
    })
    const style ={
        width : average+"%"
    }
    return (
        <>
            <p className="title">{title} : {average} %</p>
            <div className="progress-container my-3">
                <div style={style} className="progress-content"></div>
            </div>
        </>
    )
}