import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TecNews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, Seja bem vindo!</span>
          <h1>
            Noticias sobre <span>Tecnologia</span>
          </h1>
          <p>
            Tenha acesso a conteudos de tecnologias <br />
            <span>por R$ 9,99/mês</span>
          </p>

          <SubscribeButton />
        </section>

        <Image src="/images/avatar.png" alt="Avatar" width={300} height={300} />
      </main>
    </>
  );
}
