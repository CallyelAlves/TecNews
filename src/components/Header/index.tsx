import { SignInButton } from "../SignInButton";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();
  const path = asPath.split("/");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>
          Tec<span>News</span>
        </h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
