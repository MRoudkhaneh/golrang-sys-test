import React from "react";
import UserList from "../components/user-list";
import {Container} from "reactstrap";

const Users = () => {

    return (
        <Container fluid="md" className="box">
            <UserList/>
        </Container>
    )
};
export default Users;
