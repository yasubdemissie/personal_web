import { ReactLenis, useLenis } from "lenis/react";
import { FaLaptopCode, FaPeopleGroup } from "react-icons/fa6";
import Card from "./Components/Card";
import { GiBrain } from "react-icons/gi";
import ChatBox from "./Pages/ChatBox";
import Overview from "./Components/Overview";
import Heading from "./Components/Heading";

const data = [
  {
    question: "Who are you?",
    answer:
      "My name is Yasub Demissie. I'm currently Addis Ababa Science and Technology University software Engineering student",
    id: 0, // to display on the left side of the screen
  },
  {
    question: "who is your hero?",
    answer:
      "My Hero is Somebody who love me eventhough I always disappoint him. His love is beyond my understanding. His name Jesus",
    id: 1, // to display on the left side of the screen
  },
  {
    question: "What are you doing, right now?",
    answer: "I am working on some projects",
    id: 2, // to display on the right side of the screen
  },
  {
    question: "which language you are familiar with?",
    answer:
      "I think Like most of the you programmers -- I am familiar with JavaScript, 👌😉",
    id: 3, // to display on the left side of the screen
  },
];

function App() {
  const questions = data.map((obj) => obj.question);
  function Layout() {
    const lenis = useLenis(({ scroll }) => {
      // called every scroll
    })

  return (
    <ReactLenis>
    <div className="min-h-dvh">
      <Heading />
      <div className="w-full">
        <div className="flex md:flex-row flex-col justify-evenly">
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
        <div className="z-100 hidden">
          <ChatBox>
            <ChatBox.ChatIcon />
            <ChatBox.ChatArea object={data} questions={questions} />
          </ChatBox>
        </div>
      </div>
      <div className="relative top-80 grid gap-y-28">
        <Overview imgSrc={"coding.jpg"} title={"Coding"} />
        <Overview imgSrc={"cyber.png"} title={"Cyber Attack"}  side="left"/>
        <Overview imgSrc={"QRcode.jpeg"} title={"Moutain"}  />
      </div>
    </div>
    </ReactLenis>
  );
}

export default App;
