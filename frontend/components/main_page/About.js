import Link from "next/link";
import styles from "../../styles/components/main_page/About.module.css"

function Card(props) {
    return (
        <div className={styles.sectionCard}>
            <img src={props.iconPath} alt="" />
            <p className={styles.title}>{props.title}</p>
            <p className={styles.description}>{props.description}</p>
            <Link href="#"><a className={styles.link}>Посмотреть</a></Link>
        </div>
    )
}

export default function About() {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutUs}>
                <p className={styles.title}>Про нас</p>
                <p className={styles.mission}>Миссия Sketch Hub - дать возможность каждому получить навыки моделирования и представление о возможностях современных технологиях, делиться своими умениями и получать вдохновление от других.</p>
                <p className={styles.uCan}>У нас можно делиться своими 3D-моделями с остальными пользователями, искать и пользоваться работами других участников нашего небольшого компьюнити.</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.backBlur}>
                    <Card 
                        iconPath="icons/card1.png"
                        title="Журнал"
                        description="Здесь вы можете найти нужную модель по фильтрам, посмотреть все возможные варианты и выбрать понравившийся из них."
                    />
                    <Card 
                        iconPath="icons/card2.png"
                        title="Личный кабинет"
                        description="Здесь вы можете найти нужную модель по фильтрам, посмотреть все возможные варианты и выбрать понравившийся из них."
                    />
                </div>
            </div>

        </div>
    )
}