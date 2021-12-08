import React from "react";
import Header  from "@components/Header";

const Login = ({children}) => {
    return (
        <div className="Layout">
            <Header/>
            {children}
        </div>
    );
}
export default Login;