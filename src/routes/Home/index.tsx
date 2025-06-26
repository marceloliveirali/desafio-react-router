import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function Products() 
{
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Products;