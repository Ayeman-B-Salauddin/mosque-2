// <!-- Messenger Chat plugin Code -->
//     <div id="fb-root"></div>

//     <!-- Your Chat plugin code -->
//     <div id="fb-customer-chat" class="fb-customerchat">
//     </div>

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "1862102394024693");
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

import { setMessengerBottomSpacing } from "react-messenger-chat-plugin";
import {
  MessengerChat,
  showMessenger,
  hideMessenger,
  showDialog,
  hideDialog,
  //   setMessengerHeight,
} from "react-messenger-chat-plugin";

export const Messenger = () => {
  return (
    <MessengerChat
      pageId="109268111769502"
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
  );
};

export const MessengerApp = () => {
  return (
    <div>
      <button
        onClick={() => {
          showMessenger(true);
        }}
      >
        show messenger
      </button>
      <button
        onClick={() => {
          hideMessenger();
        }}
      >
        hide messenger
      </button>
      <button
        onClick={() => {
          showDialog();
        }}
      >
        show dialog
      </button>
      <button
        onClick={() => {
          hideDialog();
        }}
      >
        hide dialog
      </button>
      <button
        onClick={() => {
          setMessengerBottomSpacing(100);
        }}
      >
        set chat 100px in bottom spacing
      </button>

      <MessengerChat
        pageId="1862102394024693"
        themeColor={"#000000"}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
      />
    </div>
  );
};
