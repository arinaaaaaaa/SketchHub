import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className="blurPart">
                <span className={styles.logo}>Sketch Hub</span>
            </div>
            <span className={styles.linksSection}>
                <Link href="#"><a>О нас</a></Link>
                <Link href="#"><a>Журнал</a></Link>
                <Link href="#"><a>Личный кабинет</a></Link>
            </span>
        </div>
    )
}