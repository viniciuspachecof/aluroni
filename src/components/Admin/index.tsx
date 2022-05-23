import { Navigate, useParams } from 'react-router-dom';

function Admin() {
    const { user } = useParams();

    if (user !== 'Admin') {
        return <Navigate to="/" />; //Redirecionar para outra página
    }

    return <div>Página de Admin</div>;

}

export default Admin;
