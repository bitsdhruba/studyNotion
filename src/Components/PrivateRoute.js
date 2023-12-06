import { Navigate } from 'react-router-dom';

 function PrivateRoute  ({loggedin, children}) {

        if(loggedin){return children}
        else{<Navigate to="/login" />}
}

export default PrivateRoute;