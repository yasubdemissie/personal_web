import propType from "prop-types";
import { useWritedown } from "./useWritedown";
import { useRef } from "react";

function DisplayArea({ children }) {
  const area1 = useRef();
 const { writeDown, paragraph } = useWritedown();
  
  return (
    <div className="h-full">
      <p className="bg-slate-950 text-yellow-400 min-h-8 rounded-md px-2 mb-1" ref={area1}>{paragraph}</p>
      <button className="px-2 rounded-md text-green-50 bg-blue-500" onClick={() => writeDown(children)}>who are you</button>
    </div>
  );
}

DisplayArea.propTypes = {
  children: propType.string,
};

export default DisplayArea;
