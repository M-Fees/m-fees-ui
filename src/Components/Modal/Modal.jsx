import axios from 'axios';
import { useState } from 'react';
import './Modal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from 'react-toastify';

export default function Modal({ show, success, error , closeModalHandler, id}){  
    const handleSubmit = (e) => {
        e.preventDefault();
     }; 
    const [type,setType] = useState();
    const [amount,setAmount] = useState();

   
    const postFee = async() => {
        const data =   {
            type: type,
            totalAmount: amount
          }
        const promise = axios.post("http://localhost:8080/students/" + id + "/fees", [data]);
        promise.then((res) => {
            success()
            closeModalHandler();
        })
        .catch((err) => {
            error()
            closeModalHandler();
        })
    }
    return(
        <>
        <div className="modal-wrapper w-75"
      >
        <div className="modal-header bg-info text-center" onClick={closeModalHandler}>
            <b className="add" ></b>
            <h2 className='text-light'>Fee</h2>
            <span className="close-modal-btn"onClick={closeModalHandler}>X</span>
        </div> 
        <div className="modal-content">
            <div className="modal-body">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Type : </label>
                <select name="" id=""className="form-control" onChange={(e)=>setType(e.target.value)}>
                    <option value="TUITION">TUITION</option>
                    <option value="HARDWARE">HARDWARE</option>
                </select>

                <label htmlFor="">Total amount : </label>
                <input className='form-control' 
                    type="text" placeholder="XXXXXX MGA" 
                    onChange={(e)=>setAmount(e.target.value)}/>
                
                <label htmlFor="">Date : </label>
                <input className='form-control ' 
                    type="date" 
                    value={new Date().toISOString().slice(0,10)}  
                   />
                <label htmlFor="">Status : </label>
                <input className='form-control' 
                    type="text" 
                    value="UNPAID" 
                    />
                <button className="btn btn-info w-100 mt-3" onClick={()=>postFee()} >CREATE</button>
                </form>
            </div>
        </div>
        </div>
      </>      
    )
}