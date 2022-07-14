import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3002/");

const Conversation = () => {
  const [message, setMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState<any>([
    {
      id: "right",
      message: "Hi there",
    },
    {
      id: "left",
      message: "Hi there",
    },
  ]);

  useEffect(() => {
    socket.on("recieve_message", (data: any) => {
      setMessagesArray(data)
      alert(`message: ${data.message}, id: ${data.id}`);
      console.log(" messgeArray", messagesArray);
    });
  }, [socket]);

  const handleMessageText = (e: any) => {
    setMessage(e.target.value);
    // console.log(message);
  };

  const handleSendMessage = () => {
    socket.emit("send_message", { message: message, id: socket.id });
  };

  return (
    <div
      className="w-3/4 h-screen"
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#F5EDDC",
      }}
    >
      <div className="w-full h-12" style={{ backgroundColor: "#EFEFEF" }}>
        <div
          className="flex justify-between h-12"
          style={{ backgroundColor: "#EFEFEF" }}
        >
          <div>
            <Avatar
              alt="Remy Sharp"
              src={require("../Images/download.jpg")}
              className="mx-1 my-1"
            />
          </div>
          <div className="flex-wrap">
            <IconButton>
              <MessageIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div
        className=" my-1 py-2 px-1"
        style={{ overflow: "auto", backgroundColor: "#F5EDDC", height: "87vh" }}
      >
        {messagesArray.map((msgObj: any, index: any) =>
          msgObj.id === socket.id ? (
            <div
              className="m-2 p-2 shadow h-max bg-white w-max rounded justify-end"
              style={{ float: "right", clear: "both" }}
              key={index}
            >
              <h6 className="font-bold">{msgObj.id}</h6>
              <p>{msgObj.message}</p>
            </div>
          ) : (
            <div
              className="m-2 p-2 shadow h-max bg-white w-max rounded"
              style={{ float: "left", clear: "both" }}
              key={index}
            >
              <h6 className="font-bold">{msgObj.id}</h6>
              <p>{msgObj.message}</p>
            </div>
          )
        )}
      </div>

      <div
        className="w-full py-1 flex my-1"
        style={{ position: "absolute", bottom: "0", backgroundColor: "white" }}
      >
        <div className="flex-grow">
          <input
            type="text"
            name=""
            id=""
            className="w-full px-1 py-1 h-10 shadow"
            placeholder="Type a message"
            style={{ outline: "none" }}
            onChange={handleMessageText}
          />
        </div>
        <div className="flex-none">
          <IconButton onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
