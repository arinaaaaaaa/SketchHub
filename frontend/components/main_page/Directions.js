import Link from "next/link"
import styles from "../../styles/components/main_page/Sections.module.css"

function Sections(props) {
    return (
        <Link style={{width: 100 + "%" }}href="#">
            <a style={{width: 100 + "%" }}>
                <div className={styles.direction}>
                    <img src={props.iconPath} alt="" className={styles.directImg}/>
                    <p>{props.title}</p>
                </div>
            </a>
        </Link>
    )
}

export default function Directions() {
    return (
        <div className={styles.directSection}>
            <p className={styles.title}>Направления</p>
            <div className={styles.directsSection}>
                <Sections iconPath="icons/direct1.png" title="Архитектура"/>
                <Sections iconPath="icons/direct2.png" title="Объекты"/>
                <Sections iconPath="icons/direct3.png" title="Мультфильмы"/>
                <Sections iconPath="icons/direct4.png" title="Многое другое"/>
            </div>
        </div>
    )
}