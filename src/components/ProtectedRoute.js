import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth0 } from "../react-auth0-spa.js";

import Education from "./formFlow/education";

const ProtectedRoute = (props) => {
    const { isAuthenticated } = useAuth0();

    console.log(isAuthenticated, "\n Authentication w.in Protected Route");

    if (isAuthenticated) return <props.Component />;

    return <Redirect to={{ pathname: "/" }} />;

    // const { component: Component, ...rest } = props;

    // return (
    //   <Route
    //     {...rest}
    //     render={(renderProps) => {
    //       if (isAuthenticated) {
    //         return <Component {...renderProps} />;
    //       } else {
    //         return <Redirect to="/login" />;
    //       }
    //     }}
    //   />
    // );
};

export default ProtectedRoute;