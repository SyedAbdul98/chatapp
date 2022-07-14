import React from "react";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import Item from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";

const Chats = () => {
  const chats = [
    {
      name: "Ali",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
    {
      name: "Ali",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
    {
      name: "Ahmad",
      imgUrl: "../Images/download.jpg",
      msg: "where were you",
    },
    {
      name: "Asif",
      imgUrl: "../Images/download.jpg",
      msg: "Hi there, Morning too",
    },
  ];
  return (
    <div className="w-1/4 h-screen" style={{ height: "100vh" }}>
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
            <DataUsageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="px-1 h-12 my-1">
        <input
          type="text"
          name=""
          id=""
          className="my-1 px-1 w-full h-9 rounded shadow"
          placeholder="Search a chat"
          style={{ outline: "none" }}
        />
      </div>

      <div style={{ width: "100%", overflow: "auto", height: "81%" }}>
        <Stack spacing={0}>
          {chats.map((obj) => {
            return (
              <>
                <Item className="flex ">
                  <Avatar
                    alt="Remy Sharp"
                    src={require("../Images/download.jpg")}
                    className="mx-1 my-1"
                  />
                  <div>
                    <p className="font-bold">{obj.name}</p>
                    <span>{obj.msg}</span>
                  </div>
                  <hr style={{ height: "1px", color: "GrayText" }} />
                </Item>
              </>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default Chats;
