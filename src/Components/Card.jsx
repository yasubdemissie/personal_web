function Card({ icon, title, children }) {
  return (
    <div className="h-80 m-4 rounded-md shadow-md md:w-80 ">
      <div className="h-2/5 bg-black text-slate-100 rounded-t-md px-2 py-1 grid align-middle justify-center">
        <div className="h-fit flex align-middle justify-center">
          {icon}
        </div>

        <h3 className="h-fit font-bold text-xl">{title}</h3>
      </div>
      <div className="h-3/5 bg-white text-slate-900 rounded-b-md px-2 py-1 text-center">
        <p className="h-full text-wrap text-ellipsis overflow-scroll text-left  md:overflow-hidden">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Card;
