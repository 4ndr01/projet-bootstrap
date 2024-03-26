import React from "react";
import Nav from "./nav";


function Challenge2() {
    return (
        <>
            <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">My success</h1>
                </div>

                <div className="col-md-4 mx-auto">

                    <div className="card mt-5 position-relative">
                        <img src="/assets/challenge/Rectangle%205.svg" className="card-img-top mx-auto" alt="..."/>
                        <img src="/assets/CheckCircle.svg"
                             className="position-absolute top-50 start-50 translate-middle" alt="Check"
                             style={{width: '110px', height: '110px'}}/>
                        <img src="/assets/image%204.svg" className="position-absolute bottom-0 start-0" alt="Image"
                             style={{width: '120px', height: '120px'}}/>
                        <img src="/assets/challenge/Rectangle%204.svg" className="position-absolute bottom-0 end-0"
                             alt="Image" style={{width: '80px', height: '80px'}}
                        />
                    </div>

                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <img src="/assets/PersonFill.svg" className="card-img-top" alt="..."
                                 style={{width: '50px', height: '50px'}}/>
                        </div>
                        <div>
                            <h5 className="">13</h5>
                        </div>
                        <p className="">Coding Olympic</p>

                    </div>

                    <div className="card mt-5 position-relative">
                        <img src="/assets/challenge/Rectangle%206.png" className="card-img-top mx-auto" alt="..."
                        />
                        <img src="/assets/CheckCircle.svg"
                             className="position-absolute top-50 start-50 translate-middle" alt="Check"
                             style={{width: '110px', height: '110px'}}/>


                    </div>

                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <img src="/assets/PersonFill.svg" className="card-img-top" alt="..."
                                 style={{width: '50px', height: '50px'}}/>
                        </div>
                        <div>
                            <h5 className="">20</h5>
                        </div>
                        <p className="">Coding One Piece</p>

                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Challenge2;