import styles from "../../styles/homePage/Tags.module.css";

const Tags = ({text}) => {
    return ( 
        <div className={styles.container}>
            {text}
        </div>
     );
}
 
export default Tags;