import { FaLaptopCode, FaPeopleGroup } from "react-icons/fa6";
import Card from "./Components/Card";
import Home from "./Pages/Home";
import { GiBrain } from "react-icons/gi";
import ChatBox from "./Pages/ChatBox";

const data = [
  {
    question: "Who are you?",
    answer:
      "My name is Yasub Demissie. I'm currently Addis Ababa Science and Technology University software Engineering student",
    type: "self", // to display on the left side of the screen
  },
  {
    question: "who is your hero?",
    answer:
      "My name is Yasub Demissie. I'm currently Addis Ababa Science and Technology University software Engineering student",
    type: "self", // to display on the left side of the screen
  },
  {
    question: "What are you doing, right now?",
    answer: "I am working on some projects",
    type: "self", // to display on the right side of the screen
  },
  {
    question: "which language you are familiar with?",
    answer: "Like most of the programmers in JavaScript, 👌😉",
    type: "self", // to display on the left side of the screen
  },
];

function App() {

  const questions = data.map(obj => obj.question);

  return (
    <div className="min-h-dvh bg-slate-100">
      <h1 className="font-bold bg-blue-950 text-lg text-slate-100">My Bot</h1>
      <div className="bg-gradient-to-tr px-2 py-4 from-slate-900 to-blue-950 text-cyan-600">
        <Home>
          My name is Yasub Demissie. Do you want to know anything else
        </Home>
      </div>
      <div className="">
        <div className="flex  md:flex-row flex-col">
          <Card icon={<FaLaptopCode size={70} />} title={"Programming"}>
            Centering an icon in a web application can be easily achieved using
            CSS. Common methods include Flexbox, which allows for flexible.
          </Card>
          <Card icon={<FaPeopleGroup size={70} />} title={"Communication"}>
            Centering an icon in a web application can be easily achieved using
            CSS. Common methods include Flexbox, which allows for flexible.
          </Card>
          <Card icon={<GiBrain size={70} />} title={"Creativity"}>
            Centering an icon in a web application can be easily achieved using
            CSS. Common methods include Flexbox, which allows for flexible.
          </Card>
        </div>
        <div className="z-100">
          <ChatBox>
            <ChatBox.ChatIcon />
            <ChatBox.ChatArea object={data} questions={questions} />
          </ChatBox>
        </div>
      </div>
    </div>
  );
}

export default App;
