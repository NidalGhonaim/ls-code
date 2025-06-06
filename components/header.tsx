import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "./logo";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <nav className={styles.menu}>
        <Link className={styles.link} href="#">
          The Science
        </Link>
        <Link className={styles.link} href="#">
          The Products
        </Link>
        <Link className={styles.link} href="#">
          The Company
        </Link>
        <Link className={styles.link} href="#">
          The Blog
        </Link>
        <Link className={styles.link} href="#">
          Contact
        </Link>
        <FaBars className={styles.icon} />
      </nav>
    </div>
  );
};

export default Header;
