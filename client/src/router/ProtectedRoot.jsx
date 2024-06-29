import { Outlet, useNavigate } from "react-router-dom";


function ProtectedRoot({children}) {
    const nav = useNavigate();


    if(!localStorage.getItem('accessToken')){
        nav('/login');
        return
    }

    return (
        <Outlet/>
    );
}

export default ProtectedRoot;