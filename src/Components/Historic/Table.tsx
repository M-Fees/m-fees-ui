import React, {useEffect, useState} from "react";
import "../../Style/bootstrap/bootstrap.css"
import {Pagination} from "../Pagination/Pagination";
import {useNavigate} from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const Table: React.FC<any> = (props) => {
    const {children, payments, page, setPage} = props;
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
                        payments?.map((elt: any, key: number) => (
                            <tr key={key}>
                                <td   className="p-2">{elt?.type}</td>
                                <td   className="p-2">{elt?.amount}</td>
                                <td   className="p-2">{elt?.creationDatetime}</td>
                                <td   className="p-2">{elt?.fee_type}</td>
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