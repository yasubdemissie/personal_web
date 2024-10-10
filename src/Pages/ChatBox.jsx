import { createContext, useContext, useState } from "react";
import Button from "../Components/Button";
import { FaRocketchat } from "react-icons/fa6";
import propType from "prop-types";
import { IoCloseCircleSharp } from "react-icons/io5";
import AnswerChat from "../Components/AnswerChat";
import _ from "lodash";
import { useWritedown } from "../hooks/useWritedown";

const ChatContext = createContext();

function ChatBox({ children }) {
  const [displayChatBox, setDisplayChatBox] = useState(false);
  const { writeDown, paragraph, writing: isLoading } = useWritedown();
  const [chatMessage, setChatMessage] = useState([{}]);

  const toggleDisplay = () => setDisplayChatBox((display) => !display);
  const setChat = (question, answer, id) =>
    setChatMessage((arr) => {
      if (_.isEqual(arr[0], {}))
        return [{ question: question, answer: answer, id: 0 }];
      return [...arr, { question: question, answer: answer, id: id }];
    });

  return (
    <ChatContext.Provider
      value={{
        display: displayChatBox,
        chatMessage,
        message: paragraph,
        isLoading,
        toggleDisplay,
        setChat,
        writeDown,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

// Chating Icon

function ChatIcon() {
  const { toggleDisplay, display } = useContext(ChatContext);

  if (display) return null;
  return (
    <button
      onClick={toggleDisplay}
      className="fixed z-100 bottom-3 right-2 px-4 cursor-pointer lg:hidden"
    >
      <FaRocketchat
        size={20}
        style={{ color: "red", opacity: "0.4", marginLeft: "auto" }}
      />
      <h6 className="text-xs font-thin text-red-300 italic">chat with me</h6>
    </button>
  );
}

// Chat showing place

function ChatArea({ object, questions }) {
  const {
    display,
    toggleDisplay,
    setChat,
    chatMessage,
    writeDown,
    message: chat,
    isLoading,
  } = useContext(ChatContext);

  const [numOfAskedQuestions, setNumOfQuestions] = useState(0);
  const style = `bg-white h-dvh w-dvw fixed top-0 grid ${
    display ? "hidden" : "hidden"
  } lg:inline-block lg:right-4 lg:w-2/6 lg:top-10 lg:h-5/6 md:bg-slate-300 w-1/4
  lg:rounded-lg lg:px-5 snap-none hide-scrollbar
  `;

  function getAnswer(question) {
    object.forEach((obj) => {
      if (obj.question === question) {
        writeDown(obj.answer);
        setChat(obj.question, obj.answer, obj.id);
        setNumOfQuestions((num) => num + 1);
      }
    });
  }

  console.log(isLoading);

  return (
    <div className={style}>
      <button onClick={toggleDisplay} className="absolute top-1 right-1">
        <IoCloseCircleSharp size={25} color="red" />
      </button>
      <div className="h-5/6 mb-10 mt-10 overflow-y-scroll">
        {!_.isEqual(chatMessage[0], {}) &&
          chatMessage.map((message, i) => (
            <>
              <AnswerChat type="question" key={message.question}>
                {message.question}
              </AnswerChat>
              <AnswerChat type="answer" key={message.answer}>
                {i + 1 === numOfAskedQuestions ? chat : message.answer}
              </AnswerChat>
            </>
          ))}
      </div>
      <div
        className="flex w-fit bg-slate-300 fixed bottom-0 flex-wrap h-20
       gap-x-1 gap-y-2 lg:h-fit overflow-y-scroll p-2 lg:w-2/6"
      >
        {questions.map((question) => (
          <Button
            disabled={isLoading}
            key={question}
            onClick={() => {
              return getAnswer(question);
            }}
          >
            {question}
          </Button>
        ))}
        <Button>good {isLoading}</Button>
      </div>
    </div>
  );
}

ChatArea.propTypes = {
  object: propType.array,
  questions: propType.arrayOf(propType.string),
};

ChatBox.ChatIcon = ChatIcon;
ChatBox.ChatArea = ChatArea;

export default ChatBox;
