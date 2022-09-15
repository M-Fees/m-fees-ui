import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import { Table } from "./Table";


export function Historic() {
    const {id} = useParams();
    const [page, setPage] = useState(0)
    const [payment, setPayment] = useState([])
    useEffect(()=>{
        const promise = axios.get("http://localhost:8080/students/" + id + "/fees/payments?page="+page+"&page_size=10");
        promise.then((res:any)=>{
            console.log(res);
            setPayment(res.data)
        }).catch((err:any)=>{
            console.log(err);
            
        });
    })
    return(
        <>
            <Menu item="Back"/>
             <Table payments={payment} page={page} setPage={setPage}>
                    <td className="py-2">Type</td>
                    <td>Amount</td>
                    <td>Payment date</td>
                    <td>Fee type</td>
             </Table>
            <Footer />
        </>
    )
}