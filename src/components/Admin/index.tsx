import { Navigate, useNavigate, useParams } from 'react-router-dom';

function Admin() {
    const { user } = useParams();
    const navigate = useNavigate();

    if (user !== 'Admin') {
        return <Navigate to="/" />;
    }

    return <div>Página de Admin</div>;

}

export default Admin;
