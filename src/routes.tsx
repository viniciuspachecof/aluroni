import Cabecalho from 'components/Cabecalho';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from 'components/Admin';

function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu /> {/*Vai aparecer em todos as rotas*/}
                <Routes>
                    <Route path="/" element={<Cabecalho />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="prato/:id" element={<Prato />} /> {/* declarando o nome do campo como id, tudo aquilo que vem depois da barra */}
                    <Route path="*" element={<NotFound />} /> {/* o asterisco significa qualquer outra rota */}
                    <Route path="admin/:user" element={<Admin />}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}

export default AppRouter;
