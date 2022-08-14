import Tags from "./Tags";
import styles from '../../styles/homePage/Item.module.css';
import Image from "next/image";
import ItemInfo from "./ItemInfo";

const Item = ({item}) => {
    return ( 
        <div className={styles.item}>
          <Image
            className={styles.itemPic}
            src={item.pic}
            width={608}
            height={783}
          />
          <div className={styles.aboutItem}>
            <div className={styles.itemHeader}>
              {item.header}
            </div>
            <p className={styles.itemDescription}>
              {item.itemDescription}
            </p>
            <div className={styles.itemTags}>
              {item.tags.map((text,idx)=><Tags key={idx} text={text}/>)}
            </div>
            <div className={styles.itemInfo}>
              <ItemInfo title="Artist" name={item.artist} />
              <ItemInfo title="Owner" name={item.owner} />
            </div>
            <div className={styles.itemPrice}>
              <div className={styles.itemPriceTitle}>List Price:</div>
              <div className={styles.itemPriceDes}>
                <div className={styles.itemPriceETH}>{item.priceETH} ETH</div>
                <div className={styles.itemPriceUSD}>${item.priceUSD}</div>
              </div>
            </div>
            <div className={styles.itemBtns}>
              <div className={styles.btnBid}>Place a Bid</div>
              <div className={styles.btnShare}>
                <div>Share</div>
                <Image src="/ShareIcon.png" width={18} height={19.92} />
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default Item;