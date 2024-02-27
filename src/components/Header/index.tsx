import Link from "next/link";
import Image from "next/image";

import { SignInButton } from "../SignInButton";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" width={110} height={31} />
        <nav>
          <Link href="">Home</Link>
          <Link href="">Posts</Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
