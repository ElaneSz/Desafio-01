import styles from "./home.module.css";
//import { IoIosSearch } from "react-icons/io";

export function Home (){
    return(
        <main className={style.container}>
            <form className={styles.form}>
                <input
                    placeholder="Digite o simbolo da moeda: BTC..."
                />
                <button type="submit">{/*<IoIosSearch size={30} color="#fff"/>*/}</button>
            </form>
        </main>
    )
}