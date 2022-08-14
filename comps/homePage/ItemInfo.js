import styles from '../../styles/homePage/ItemInfo.module.css'

const ItemInfo = ({title, name}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.details}>
        <div className={styles.pic}></div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

export default ItemInfo;
