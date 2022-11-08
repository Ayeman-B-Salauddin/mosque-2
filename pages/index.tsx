import Head from "next/head";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Hero } from "../components/Hero";
import { MessengerApp } from "../components/Messenger";
import { Navbar } from "../components/Navbar";
import { Submarine } from "../components/Submarine";
import { Time } from "../components/Time";
import { MessengerChat } from "react-messenger-chat-plugin";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Green Lane Mosque</title>
        <meta
          name="description"
          content="The official website of Green Lane Mosque"
        />
        <link
          rel="icon"
          href="https://img.icons8.com/fluency/48/null/mosque.png"
        />
      </Head>
      <div className="dark:bg-slate-900">
        <Navbar />
        <Hero />
        {/* <MessengerApp /> */}
        <MessengerChat
          pageId="1862102394024693"
          themeColor={"#000000"}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
        />
        <Time />
        <Cards />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
