import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import Image from "next/image";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            <span>por {product.amount}/mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.png" alt="Avatar" width={300} height={300} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JoaqxCVAOjluQRkfhfJK7w4");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
