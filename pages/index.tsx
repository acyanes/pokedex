import Pokemon from "@/components/Pokemon";
import Search from "@/components/Search";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <main>
        <Search />
        <Pokemon />
      </main>
    </>
  );
}
