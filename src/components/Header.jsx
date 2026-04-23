import styles from '../styles/button.module.css';
const Header = () => {
    return (
        <div>
            <h1>header</h1>
            <a className={styles.btn}>Logout</a>
        </div>
    );
}
export default Header;