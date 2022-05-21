import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import styles from './Item.module.scss';

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
    const { id, title, description, photo } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>                
            </div>
            <TagsPrato {...props}/>
        </div>
    );
}

export default Item;
