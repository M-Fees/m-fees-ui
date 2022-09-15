import React from "react";


export const Footer : React.FC<any> = ()=>{
    return(
        <div className="container bg-dark">
            <footer className="text-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-light text-center">&copy; 2022 M-fee Company, Inc</span>
            </div>
            </footer>
        </div>
    )
}