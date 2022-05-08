import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/main_page/Banner"
import Directions from "../components/main_page/Directions";
import About from "../components/main_page/About";
import styles from "../styles/Main.module.css";

export default function MainPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.blurPart}></div>
        <div className="container">
          <Header/>
          <Banner/>
          <Directions/>
          <About/>
        </div>
        <Footer/>
      </div>
    </>
  )
}