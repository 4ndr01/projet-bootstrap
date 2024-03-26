import React from "react";
import Nav from "../components/nav";
import {Button, Form} from "react-bootstrap";
import Navbar from "../components/nav";


function Profil() {
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="text-center">Profil</h3>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="exampleInputName" className="form-label">Name:Hugo</label>
                            <label htmlFor="exampleInputName" className="form-label">LastName:Lacouille</label>
                            <label htmlFor="exampleInputName" className="form-label">Nombres de challenges réalisés:</label>
                        </div>
                    </div>


                    <div className=" mt-5">
                        <div className="container gap-5">


                            <div className="row">
                                <img src="/assets/image%204.svg"  alt="Image" className="col px-3 py-3"/>
                                <img src="/assets/image%205.svg" className="col px-3 py-3" />

                            </div>

                            <div className="row">
                                <img src="/assets/image%207.svg" className="col px-3 py-3" />

                                <img src="/assets/image%208.svg" className="col px-3 py-3"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Profil;