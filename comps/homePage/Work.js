import styles from "../../styles/homePage/Work.module.css";
import Image from "next/image";

const Work = ({ src, tag, artist, bid, endTime }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.pic} src={src} width={368} height={354} />
      <div className={styles.tag}>Inner State: {tag}</div>
      <div className={styles.userDetails}>
        <div className={styles.userPic}></div>
        <div className={styles.userName}>{artist}</div>
      </div>
      <div className={styles.bidContainer}>
        <div>
          <div className={styles.bidTitle}>Current Bid:</div>
          <div className={styles.bidPrice}>{bid} ETH</div>
        </div>
        <div>
          <div className={styles.bidTitle}>End in:</div>
          <div className={styles.bidPrice}>{endTime}</div>
        </div>
      </div>
      <div className={styles.btn}>Place a bid</div>
    </div>
  );
};

export default Work;
