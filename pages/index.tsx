import Head from "next/head";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Time } from "../components/Time";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Green Lane Mosque</title>
        <meta
          name="description"
          content="The official website of Green Lane Mosque"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Hero />
      <Time />
      <Cards />
      <Form />
      <Footer />
    </div>
  );
}
