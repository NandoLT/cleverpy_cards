import { Navigate } from 'react-router-dom';

interface Props {
    isLogged: boolean
    component: React.FunctionComponent
}
const PrivateRoute = ({ isLogged, component }: Props) => {

    const RouteComponent = component;
    return isLogged ? <RouteComponent /> : <Navigate to="/login" />;
}

export default PrivateRoute