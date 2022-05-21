import styles from './Cardapio.module.scss';
// import logo from '../../assets/logo.svg' Dados estáticos(img) necessitam ser importados dessa forma para o react na hora do build compreender
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import { OpcoesOrdenador } from './Ordenador';
import stylesTema from 'styles/Tema.module.scss';

function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

    return (
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
    );
}

export default Cardapio;
