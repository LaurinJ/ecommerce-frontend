import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { v4 } from "uuid";
import { GET_MESSAGES } from "../queries/Query";
import { MESSAGES_SUBSCRIPTION } from "../queries/Subscription";
import MessageForm from "./form/MessageForm";
import { dateStringFormatter } from "../helpers/dateFormater";
import { setLocalStorage, getLocalStorage } from "../actions/auth";

function Chat({ open, adminToken }) {
  const [chatId, setChatId] = useState("");
  const [getMessages, { data: messages, subscribeToMore }] = useLazyQuery(
    GET_MESSAGES,
    {
      variables: { getMessagesId: chatId },
    }
  );

  const updateScroll = () => {
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
  };

  useEffect(() => {
    let id = getLocalStorage("chatId");
    if (!id) {
      let id = v4();
      setLocalStorage("chatId", id);
      setChatId(id);
    } else {
      setChatId(id);
    }

    getMessages();
    if (subscribeToMore) {
      const updateMessage = subscribeToMore({
        document: MESSAGES_SUBSCRIPTION,
        variables: { getMessagesId: id },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const newMessage = subscriptionData.data.shareMessage;
          setTimeout(updateScroll, 100);
          return Object.assign({}, prev, {
            getMessages: [...prev.getMessages, newMessage],
          });
        },
      });
      return () => updateMessage;
    }
  }, []);

  useEffect(() => {
    updateScroll();
  }, [open]);

  return (
    <div className="flex flex-col h-full justify-between overflow-hidden mx-4 my-3">
      {/* chats */}
      <div className="flex flex-col space-y-3 overflow-auto n_scroll" id="chat">
        {messages &&
          messages.getMessages.map((message, i) => {
            return message.to !== adminToken ? (
              <div key={i} className="flex flex-col mr-auto max-w-[220px]">
                <span className="py-3 px-3 max-w-max mr-auto bg-gray-200 rounded-xl">
                  {message.content}
                </span>
                <div className="mr-auto mb-3 mt-2 text-xs text-gray-400">
                  {dateStringFormatter(Number(message.createdAt))}
                </div>
              </div>
            ) : (
              <div key={i} className="flex flex-col ml-auto max-w-[220px]">
                <span className="py-3 px-3 max-w-max ml-auto bg-blue-200 rounded-xl">
                  {message.content}
                </span>
                <div className="ml-auto mb-3 mt-2 text-xs text-gray-400">
                  {dateStringFormatter(Number(message.createdAt))}
                </div>
              </div>
            );
          })}
      </div>
      {/* form */}
      <div className="mt-3">
        <MessageForm user={chatId} adminToken={adminToken} />
      </div>
    </div>
  );
}

export default Chat;
