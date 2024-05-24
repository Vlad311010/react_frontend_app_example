import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext, useEffect } from "react";
import RoutingUtils from "../RoutingUtils";
import { UserContext } from "./UserContext";

export default function PageContainer({showNavbar, pageComponent, authorizedOnly }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const page = pageComponent();

    useEffect(()=>{
        if (authorizedOnly) 
            Authorize();
    })

    if (showNavbar) {
        return (<>
            <Navbar />
            {page}
        </>)
    }
    else {
        return <> {page} </>
    }

    function Authorize() {
        if (user == "") {
            navigate(RoutingUtils.UnauthorisedRedirect);
        }
    }
}