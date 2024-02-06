import NavBar from "./NavBar"
import Outlet from "react";


const Layout=()=>{
    return(
        <div className="layout">
            <NavBar/>
            <Outlet/>

        </div>
    )
}