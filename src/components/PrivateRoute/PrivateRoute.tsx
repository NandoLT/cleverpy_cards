import { Navigate } from 'react-router-dom';
import { selectAuth } from '../../features/authorization/authSlice';
import { useAppSelector } from '../../App/hooks';

interface Props {
    component: React.FunctionComponent
}
const PrivateRoute = ({ component }: Props) => {
    const isLogged = useAppSelector(selectAuth);
    const RouteComponent = component;
    return isLogged ? <RouteComponent /> : <Navigate to="/login" />;
}

export default PrivateRoute