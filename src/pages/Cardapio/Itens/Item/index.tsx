import styles from './Item.module.scss';
import classnames from 'classnames';
// import cardapio from '../itens.json';

// type Props = typeof cardapio[0];
interface Props {
        title: string;
        description: string;
        photo: string;
        size: number;
        serving: number;
        price: number;
        id: number;
        category: {
            id: number;
            label: string;
        };
}

function Item(props: Props) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={props.photo} alt={props.title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {props.title} </h2>
                    <p> {props.description} </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classnames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true
                    })}>{props.category.label}</div>
                    <div className={styles.item__porcao}>{props.size}g</div>
                    <div className={styles.item__qtdpessoas}>   
                        Serve {props.serving} {props.serving === 1 ? 'pessoa' : 'pessoas'}
                    </div>
                    <div className={styles.item__valor}>R$ {props.price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;
