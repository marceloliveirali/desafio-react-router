import { Outlet } from "react-router-dom";
import ConteudoSite from "../../../components/ConteudoSite";

function Products() 
{
    return (
        <>
            <ConteudoSite />
            <Outlet />
        </>
    );
}

export default Products; 