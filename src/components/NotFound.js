import { Navigate } from "react-router-dom";

const NotFound = () => {
    return ( 
        // <h1>Упс! Страница не найдена!</h1>
        <Navigate to='/' />
     );
}
 
export default NotFound;