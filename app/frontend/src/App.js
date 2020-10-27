import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/chatSection/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import Pusher from "pusher-js";
import axios from "./components/axios/axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("6586157caac97334d876", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
  }, [messages]);

  return (
    <div className="App">
      <div className="App__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
