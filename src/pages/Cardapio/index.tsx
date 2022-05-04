import styles from './Cardapio.module.scss';
// import logo from '../../assets/logo.svg' Dados estáticos(img) necessitam ser importados dessa forma para o react na hora do build compreender
import { ReactComponent as Logo } from 'assets/logo.svg'; // Transformando o svg em um component React
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import { OpcoesOrdenador } from './Ordenador';

function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
                Aluroni
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador
                        ordenador={ordenador}
                        setOrdenador={setOrdenador}
                    />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    );
}

export default Cardapio;
