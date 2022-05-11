import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Join.module.css";

function JoinForm() {
    return (
        <div className={styles.joinForm}>
            <span><img src="/images/joinIcon.png" alt="" className={styles.joinIcon} /></span>
            <div className={styles.form}>
                <p>Зарегистрироваться</p>
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Фамилия" />
                <input type="text" placeholder="Логин" />
                <input type="password" placeholder="Пароль" />
                <input type="password" placeholder="Подтвердите пароль" />
                <button>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default function Join() {
    return (
        <>
            <div className="container">
                <Header/>
                <JoinForm/>
            </div>
            <Footer/>
        </>
    )
}