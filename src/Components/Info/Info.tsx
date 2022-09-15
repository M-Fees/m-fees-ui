import React, { useRef, useState } from "react";
import photo from "../Login/image/avatar1.png"
import {Button} from "../Button/Button";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

export function Info(props:any) {
    const navigate = useNavigate()
    const {identity, id, success, error} = props;
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const openModalHandler = () => setShow(true);
    function cancel() {
        navigate("/home")
    }
    
    return(
        <>
            {show && <Modal show={show} closeModalHandler={closeModalHandler} id={id} success={success} error={error} />}
            <div className="container my-5">
                <div className="m-auto w-50 text-center">
                    <img style={{width:75, height:75}} className="my-3" src={photo} alt=""/>
                    {
                        [identity]?.map((elt,k)=>(
                            <>
                                <div className="info">
                                    <p><strong>Reference</strong> : {elt?.ref}</p>
                                    <p><strong>Firstname</strong> : {elt?.firstName}</p>
                                    <p><strong>Lastname</strong> : {elt?.lastName}</p>
                                    <p><strong>Sexe</strong> : {elt?.sex}</p>
                                    <p><strong>Adress</strong> : {elt?.address}</p>
                                    <p><strong>Group</strong> : {elt?.groupe}</p>
                                    <p><strong>Grade</strong> : {elt?.grade}</p>
                                    <p><strong>Email</strong> : {elt?.email}</p>
                                    <p><strong>Phone</strong> : {elt?.phone}</p>
                                    <p><strong>Status</strong> : </p>
                                </div>
                            </>
                        ))
                    }
                    <Button title="NEW FEE" attribut="btn btn-success" closeInfo={openModalHandler}/>
                    <Button title="SEND EMAIL" attribut="btn btn-info mx-3" closeInfo={undefined}/>
                    <Button title="BACK" attribut="btn btn-danger" closeInfo={cancel}/>
                </div>
            </div>
        </>
    )
}