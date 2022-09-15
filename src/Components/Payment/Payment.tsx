import React, {useEffect, useState} from "react";
import {Menu} from "../Menu/Menu";
import {useNavigate, useParams} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const Payment: React.FC<any> = () => {
    const navigate = useNavigate();
    const [fee, setFee] = useState<[]>([]);
    const [student, setStudent] = useState<[]>([]);
    const {id} = useParams();
    const [amount, setAmount] = useState();
    const [type, setType] = useState();
    const [feeId, setFeeId] = useState<number>(0);

    const error =()=>{
        toast.error("Action error, retry")
    }
    const success =()=>{
        toast.success("Payment successfully created")
    }

    function createPayment(e:any ,studendId:number, feeId:number) {
        e.preventDefault();
        const payments = [{
            type: type,
            amount: amount
        }]
        
        console.log(payments);
        
        const promise = axios.post("http://localhost:8080/students/" + studendId + "/fees/"+ feeId+"/payments", payments);
        promise.then((res)=>{
            success()
        }).catch((err)=>{
            error()
        });
    }

    useEffect(() => {
        const promise1 = axios.get("http://localhost:8080/students/" + id + "/fees")
        promise1.then((res) => {
            setFee(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
        const promise2 = axios.get("http://localhost:8080/students/" + id)
        promise2.then((res) => {
            setStudent(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <>
            <ToastContainer
            position="top-center"
            closeButton={true}
            />
            <Menu item="Back"/>
            <form className="container w-25">
                <h4 className="text-center text-warning">Payment</h4>
                {
                    [student]?.map((elt: any, k) => (
                        <>
                            <div className="form-group">
                                <label htmlFor="">Reference :</label>
                                <input className="form-control" value={elt?.ref} type="text" required/>
                            </div>
                            <div>
                                <label htmlFor="">Firstname :</label>
                                <input className="form-control" type="text" value={elt?.firstName} required/>
                            </div>
                            <div>
                                <label htmlFor="">Lastname:</label>
                                <input className="form-control" type="text" value={elt?.lastName} required/>
                            </div>
                            <div>
                                <label htmlFor="">Fee type :</label>
                                <select className="form-control" name="" id="" onChange={(e:any)=>setFeeId(e.target.value)}>
                                {
                                    fee?.map((elt:any, k)=>(
                                            <option value={elt?.id}>{elt?.type}</option>
                                    ))
                                }
                                 </select>
                            </div>
                            <div>
                                <label htmlFor="">Payment type :</label>
                                <select className="form-control" name="" onChange={(e:any)=>setType(e.target.value)}>
                                    <option value="CASH">CASH</option>
                                    <option value="MOBILE_MONEY">MOBILE MONEY</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Amount :</label>
                                <input onChange={(e:any)=>setAmount(e.target.value)} className="form-control" type="text" placeholder="200 000 MGA" required/>
                            </div>
                            <div>
                                <label htmlFor="">Grade :</label>
                                <input className="form-control" type="text" value={elt?.grade} required/>
                            </div>
                            <div>
                                <label htmlFor="">Group :</label>
                                <input className="form-control" type="text" value={elt?.groupe} required/>
                            </div>
                            <button className="btn btn-danger mt-5" onClick={() => navigate("/home")}>CANCEL</button>
                            <button className="float-right btn btn-info  mt-5" onClick={(e:any)=>createPayment(e,elt?.id, feeId)}>VALIDATE</button>
                        </>
                    ))
                }
            </form>
            <Footer/>
        </>
    )
}