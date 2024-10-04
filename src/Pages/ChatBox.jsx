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
  const { writeDown, paragraph } = useWritedown();
  const [chatMessage, setChatMessage] = useState([{}]);

  const toggleDisplay = () => setDisplayChatBox((display) => !display);
  const setChat = (question, answer) =>
    setChatMessage((arr) => {
      if (_.isEqual(arr[0], {}))
        return [{ question: question, answer: answer }];
      return [...arr, { question: question, answer: answer }];
    });

  return (
    <ChatContext.Provider
      value={{
        display: displayChatBox,
        chatMessage,
        message: paragraph,
        toggleDisplay,
        setChat,
        writeDown,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function ChatIcon() {
  const { toggleDisplay, display } = useContext(ChatContext);

  if (display) return null;
  return (
    <button
      onClick={toggleDisplay}
      className="fixed z-100 bottom-3 right-2 cursor-pointer lg:hidden"
    >
      <FaRocketchat size={20} style={{ color: "red", opacity: "0.4" }} />
      <h6 className="text-xs font-thin text-red-300 italic">chat with me</h6>
    </button>
  );
}

function ChatArea({ object, questions }) {
  const {
    display,
    toggleDisplay,
    setChat,
    chatMessage,
    writeDown,
    message: chat,
  } = useContext(ChatContext);

  const [numOfAskedQuestions, setNumOfQuestions] = useState(0);

  function getAnswer(question) {
    object.forEach((obj) => {
      if (obj.question === question) {
        writeDown(obj.answer);
        setChat(obj.question, obj.answer);
        setNumOfQuestions((num) => num + 1);
      }
    });
  }

  console.log(_.isEqual(chatMessage[0], {}));
  if (!display) return;

  return (
    <div className="bg-white h-dvh w-dvw fixed top-0 transition-all grid">
      <button onClick={toggleDisplay} className="absolute top-1 right-1">
        <IoCloseCircleSharp size={25} color="red" />
      </button>
      <div className="h-5/6 mt-10 overflow-y-scroll">
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
      <div className="flex fixed bottom-0 flex-wrap overflow-scroll gap-x-1 gap-y-2 h-fit overflow-y-scroll p-2">
        {questions.map((question) => (
          <Button
            key={question}
            onClick={() => {
              return getAnswer(question);
            }}
          >
            {question}
          </Button>
        ))}
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
