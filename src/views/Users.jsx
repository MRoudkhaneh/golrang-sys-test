import React from "react";
import UserList from "../components/user-list";
import {Container} from "reactstrap";

const Users = () => {

    return (
        <Container fluid="md" className="box">
            <h3>
                Golrang System Test.
            </h3>
            <p>Hi, my task is done. i use:</p>
            <div className="d-flex">
                <ol>
                    <li>Redux toolkit</li>
                    <li>react data table component</li>
                    <li>Reactstrap with bootstrap</li>
                </ol>
                <ol start="4">
                    <li>scss</li>
                    <li>. . .</li>
                </ol>
            </div>
            <UserList/>
        </Container>
    )
};
export default Users;
