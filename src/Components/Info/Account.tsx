import React, { useEffect, useState } from "react";
import {Info} from "./Info";
import {Menu} from "../Menu/Menu";
import {Footer} from "../Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


export const Account : React.FC<any> = ()=>{
    const [student, setStudent] = useState<[]>([]);
    const {id} = useParams();
    const error =()=>{
        toast.error("Action error")
    }
    const success =()=>{
        toast.success("Fee successfully created")
    }

    useEffect(()=>{
        const promise2 = axios.get("http://localhost:8080/students/" + id)
        promise2.then((res) => {
            setStudent(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    })

    return(
        <>
            <Menu item="Students Details"/>
            <ToastContainer
            position="top-center"
            closeButton={true}
            />
             <Info id={id} identity={student} success={success} error={error}/>
            <Footer />
        </>
    )
}