import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const err = useRouteError();

    return ( 
        <div id='error-page'>
            <h1>Oops! </h1>
            <h2>Something went wrong</h2>
            <p>{err.statusText || err.message}</p>
        </div>

     );
}

export default ErrorPage;