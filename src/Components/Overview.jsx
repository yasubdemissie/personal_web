function Overview({ imgSrc, title, side = "right" }) {
  if (side === "left")
    return (
      <div className="m-5 columns-2 min-h-fit p-3 grid grid-flow-col justify-around align-middle w-full  px-20 py-10 grid-col-reverse">
        <div className="h-72 w-96">
          <img className="rounded-lg h-96 w-96" src={imgSrc} alt="coding" />
        </div>
        <div className="p-20 h-72 w-96">{title}</div>
      </div>
    );
  return (
    <div className="m-5 columns-2 min-h-fit p-3 grid grid-flow-col justify-around align-middle w-full  px-20 py-10 grid-col-reverse">
      <div className="p-20 h-72 w-96">{title}</div>
      <div className="h-72 w-96">
        <img className="rounded-lg h-96 w-96" src={imgSrc} alt="coding" />
      </div>
    </div>
  );
}

export default Overview;
