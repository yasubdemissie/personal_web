import { useState } from "react";

export function useWritedown() {
  const [paragraph, setParagraph] = useState("");
  const [loop, setLoop] = useState(0);
  const [writing, setWriting] = useState(false);

  const writeDown = (text) => {
    const arr = text.split("");
    const length = arr.length;

    setParagraph("");
    setLoop(0);

    if (loop <= length) {
      setWriting(true);
      const timeInterval = setInterval(() => {
        setLoop((loop) => {
          setParagraph((p) => {
            let next =  p + arr[loop]; 
            return next;
          });
          if (loop === length - 1) clearInterval(timeInterval);
          return loop + 1;
        });
      }, 50);
    } 
    setWriting(false);
  };

  return { writeDown, paragraph, writing  };
}
