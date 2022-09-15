import React, {useEffect, useState} from "react";
import {Menu} from "../Menu/Menu";
import {Table} from "../Table/Table";
import {Card} from "../Card/Card";
import {Bar} from "../Progress/Bar";
import "../../Style/bootstrap/bootstrap.css"
import axios from "axios";
import logo from "../Menu/image/logo.png";
import {Footer} from "../Footer/Footer";


export const Dashboard: React.FC<any> = () => {
    const [grade, setGrade] = useState<[]>([]);
    useEffect(() => {
        const promise = axios.get("http://localhost:8080/grades")
        promise.then((res: any) => {
            setGrade(res.data)
        })
            .catch((err: {}) => {
                console.log(err)
            })
    })
    return (
        <>
            <Menu item="Dashboard"/>
            <div className="container d-flex justify-content-between my-5">
                <Card title="Grade & Fees" attribut="container card text-center w-25 shadow my-3 py-3">
                    {
                        grade?.map((elt: any, k: number) => (
                            <ul>
                                <li style={{listStyleType: "none"}}>{elt?.grade} : {elt?.fee} MGA</li>
                            </ul>
                        ))
                    }
                    <button className="btn btn-danger text-light">change</button>
                </Card>
                <Card title="Haute Ecole d'Informatique"
                      attribut="container text-warning card text-center w-25 shadow my-3 py-3">
                    <img src={logo} style={{width: 50, height: 50, margin: "auto"}}/>
                    <div className="font-weight-bold text-dark mt-3">Find here the students fees monitoring</div>
                </Card>
                <Card title="Statistic" attribut="container card text-center w-25 shadow my-3 py-3">
                    <Bar height={70} title="September"/>
                    <div>
                        <div className="font-weight-bold text-success">PAID</div>
                        <div className="font-weight-bold text-danger">UNPAID</div>
                    </div>
                </Card>
            </div>
            <Table>
                <th className="py-2">Ref</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Grade</th>
                <th>Group</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </Table>
            <Footer/>
        </>
    )
}