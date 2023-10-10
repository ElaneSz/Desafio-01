import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";

export function Header(){
    return(
        <header className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo CritoMoedas"/>
                </Link>
            </div>
        </header>
    )
}