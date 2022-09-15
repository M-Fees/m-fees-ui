import React, {useEffect, useState} from "react";
import "../../Style/bootstrap/bootstrap.css"
import {Pagination} from "../Pagination/Pagination";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const Table: React.FC<any> = (props) => {
    const {children} = props;
    const [page, setPage] = useState<number>(0);
    const [students, setStudents] = useState<any>([]);
    const navigate = useNavigate();
    function printDocument() {
        const input:any = document.getElementById('pdfdiv');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 210;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                var position = 0;
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                pdf.save("download.pdf");
            });
    }
    function findFee(studentId: number) {
        navigate("/payment/"+studentId)
    }
    function historic(studentId: number) {
        navigate("/historic/"+studentId)
    }

    useEffect(() => {
        const promise = axios.get("http://localhost:8080/students?page="+page+"&page_size=6")
        promise.then((res) => {
            setStudents(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-between btn-toolbar mb-2 mb-md-0 my-2">
                    <select name="" id="" className="btn btn-sm btn-outline-secondary">
                        <option value="5">Page Size</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <div>
                        <div className="btn-group me-2">
                            <button onClick={printDocument} type="button" className="btn btn-sm btn-outline-secondary">Exporter</button>
                        </div>
                        <select name="" id="" className="btn btn-sm btn-outline-secondary mx-1 py-2">
                            <option value="">Filter</option>
                            <option value="name">Name</option>
                            <option value="group">Group</option>
                            <option value="grade">Grade</option>
                            <option value="status">Status</option>
                        </select>
                    </div>
                </div>
                <table style={{width: "100%"}} className="table-striped rounded-2 shadow text-center mt-3" id="pdfdiv">
                    <thead className="bg-dark text-light">
                    {children}
                    </thead>
                    <tbody>
                    {
                        students?.map((elt: any, key: number) => (
                            <tr key={key}>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.ref}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.firstName}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.lastName}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.grade}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.groupe}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.phone}</td>
                                <td onClick={()=>navigate("/accounts/"+elt?.id)} className="p-2">{elt?.email}</td>
                                <td className="p-2">
                                    <button className="btn btn-info" onClick={() => findFee(elt?.id)}>new payment</button>
                                    <button className="btn btn-danger ml-2" onClick={() => historic(elt?.id)}>payments historics</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Pagination setPage={setPage} page={page}/>
            </div>
        </>
    )
}