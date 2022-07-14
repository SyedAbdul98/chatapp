import type { NextPage } from "next";
import Chats from "./Components/Chats";
import Conversation from "./Components/Conversation";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Chats />
      <Conversation />
    </div>
  );
};

export default Home;
