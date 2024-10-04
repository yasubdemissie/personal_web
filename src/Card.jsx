import { FaLaptopCode } from "react-icons/fa6";

function Card() {
  return (
    <div className="h-80 m-4 rounded-md shadow-md ">
      <div className="h-2/5 bg-black text-slate-100 rounded-t-md px-2 py-1 flex flex-row align-middle justify-center">
        <div className="h-fit">
          <FaLaptopCode size={70} alignmentBaseline="center"  />
        </div>

        <h3 className="h-fit">Programming</h3>
      </div>
      <div className="h-3/5 bg-white text-slate-900 rounded-b-md px-2 py-1 text-center"></div>
    </div>
  );
}

export default Card;
