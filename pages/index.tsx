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
          pageId="191808807846781"
          language="sv_SE"
          themeColor={"#000000"}
          bottomSpacing={300}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />
        <Time />
        <Cards />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

// <!-- Messenger Chat plugin Code -->
//     <div id="fb-root"></div>

//     <!-- Your Chat plugin code -->
//     <div id="fb-customer-chat" class="fb-customerchat">
//     </div>

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "191808807846781");
//       chatbox.setAttribute("attribution", "biz_inbox");
//     </script>

//     <!-- Your SDK code -->
//     <script>
//       window.fbAsyncInit = function() {
//         FB.init({
//           xfbml            : true,
//           version          : 'v15.0'
//         });
//       };

//       (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));
//     </script>
