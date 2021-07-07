import React from "react";
import UserList from "../components/user-list";
import {Container} from "reactstrap";

const Users = () => {

    return (
        <Container fluid="md" className="box">
            <div className="box-header">
                <h1 className="text-center display-6 fw-bolder">
                    Golrang System
                </h1>
                <h5>Hi, task is done. I used:</h5>
                <div className="d-flex">
                    <ol className="me-5">
                        <li>Redux toolkit</li>
                        <li>react data table component</li>
                        <li>Reactstrap with bootstrap</li>
                    </ol>
                    <ol start="4">
                        <li>scss</li>
                        <li>. . .</li>
                    </ol>
                </div>
            </div>
            <div className="box-body">
                <UserList/>
            </div>
        </Container>
    )
};
export default Users;
