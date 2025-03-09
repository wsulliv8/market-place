import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
