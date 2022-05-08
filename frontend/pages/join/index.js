import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Join.module.css";

function JoinForm() {
    return (
        <div className={styles.joinForm}>
            <div className={styles.blurPart}>
                <span><img src="/images/joinIcon.png" alt="" className={styles.joinIcon} /></span>
                <div className={styles.form}>
                    <p>Зарегистрироваться</p>
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Фамилия" />
                    <input type="text" placeholder="Логин" />
                    <input type="text" placeholder="Пароль" />
                    <input type="text" placeholder="Подтвердите пароль" />
                    <button>Зарегистрироваться</button>
                </div>
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