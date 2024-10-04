import { useState } from "react";

export function useWritedown() {
  const [paragraph, setParagraph] = useState("");
  const [loop, setLoop] = useState(0);

  const writeDown = (text) => {
    const arr = text.split("");
    const length = arr.length;

    setParagraph("");
    setLoop(0);

    console.log(arr[loop], paragraph);

    if (loop <= length) {
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
  };

  return { writeDown, paragraph };
}
