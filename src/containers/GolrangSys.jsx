import React, {useEffect} from "react";
import {Route, Switch} from "react-router";
import Layout from "../layout/Layout";
import Users from "../views/Users";
import {fetchingUser} from "../store/reducer/usersSlice";
import {useDispatch} from "react-redux";

const GolrangSys = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchingUser())
    }, [dispatch]);
    return (

        <Layout>
            <Switch>
                <Route exact path="/" component={Users}/>
            </Switch>
        </Layout>

    )
};


export default GolrangSys;
