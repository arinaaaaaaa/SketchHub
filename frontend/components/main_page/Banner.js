import styles from '../../styles/components/main_page/Banner.module.css';

function Digit(props) {
    return (
      <div className={styles.digitItem}>
        <p className={styles.digit}>{props.digit}</p>
        <p className={styles.digitDescription}>{props.info}</p>
      </div>
    )
  }
  
 export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.infoPart}>
          <p className={styles.title}>РЕПОЗИТОРИИ 3D-МОДЕЛЕЙ</p>
          <p className={styles.info}>Храните, делитесь и находите 3D-модели из 3DS MAX и Blender в одном месте.</p>
          <a href="#" className={styles.join}>Присоединиться</a>
        </div>
        <div className={styles.digitPart}>
          <Digit 
            digit="217"
            info="Новых пользователей каждый день"
          />
          <Digit 
            digit="192k"
            info="3D-моделей добавлено за последние 3 месяца"
          />
          <Digit 
            digit="19"
            info="Критериев для поиска нужной модели"
          />
        </div>
    </div>
  )
}