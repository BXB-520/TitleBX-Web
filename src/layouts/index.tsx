import { Link, Outlet, history } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <>
      <div className={styles.allbody}>
        <div className={styles.nav}>
          <div className={styles.title}>TitleBX</div>
          <div className={styles.menu}>
            <div onClick={() => history.push("/")}>Main</div>
            <div
              onClick={() =>
                // history.push("/Github")
                window.open("https://github.com/BXB-520")
              }
            >
              Github
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div className={styles.footer}>
        <div>Made with ❤ by Bx</div>
        <div>Relying on baidu and Ant Design</div>
      </div>
    </>
  );
}
