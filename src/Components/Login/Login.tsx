import React, { useState } from "react";
import "./main.css";
import "../../Style/bootstrap/bootstrap.css"
import { useNavigate } from "react-router-dom";

export const Login : React.FC<{}> = () => {
    const [email , setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    return(
        <>
            <div className="container mt-5 text-center" >
                <div style={{margin: "auto"}} className="card p-4 w-25">
                    <form>
                        <h1>M-fee</h1>
                        <div>
                            <input type="email" className="form-control my-3" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <input type="password" className="form-control" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button onClick={()=>navigate("/home")} className="btn btn-info text-light w-100 my-3" >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}