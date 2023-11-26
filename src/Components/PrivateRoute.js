import { Navigate } from 'react-router-dom';

 function PrivateRoute  ({loggedin, children}) {

        if(loggedin){children}
        else{<Navigate to="/login" />}
}

export default PrivateRoute;