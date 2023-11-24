import { Navigate } from 'react-router-dom';

const PrivateRoute = ({loggedin, children})=> {

        if(loggedin){children}
        else{<Navigate to="/login" />}
}

export default PrivateRoute;