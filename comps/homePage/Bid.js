import Image from "next/image";
import styles from '../../styles/homePage/Bid.module.css'

const Bid = ({src,name,bid,date}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.info}>
                <Image className={styles.pic} src={src} width={48} height={48}/>
                <div className={styles.name}>{name}</div>
            </div>
            <div>
                <div className={styles.bid}>Bid <span className={styles.price}>{bid} ETH</span></div>
                <div className={styles.date}>{date}</div>
            </div>
        </div>
     );
}
 
export default Bid;