import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

const Chat = () => {

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "Mahima",
    "1234"
  );

  return (
    <div style={{ flexBasis: "100%" }}>
     <MultiChatSocket {...chatProps} />
     renderChatHeader={(chat) => <Header chat={chat} />}
    </div>
  );
};

export default Chat;
