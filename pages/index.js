import Head from "next/head";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joyeux Nutrition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  );
}
