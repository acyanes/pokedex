import Pokemon from "@/components/Pokemon";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <main>
        <Pokemon />
      </main>
    </>
  );
}
