"use client";

function TimeLineMobile({ data }: { data: any }) {
  return (
    <>
      {data.map((item: any, index: number) => {
        return index % 2 === 0 ? (
          <ItemLeft key={index} item={item} index={index}></ItemLeft>
        ) : (
          <ItemRight key={index} item={item}></ItemRight>
        );
      })}
    </>
  );
}

export default TimeLineMobile;

function ItemLeft({ item, index }: { item: any; index: number }) {
  return (
    <div className="grid  grid-cols-9">
      <div className=" col-span-4 flex gap-2">
        <div className="flex justify-center items-center">
          <p className="text-sm font-light">{item.items[0]}</p>
        </div>
        <div className=" flex justify-center items-center w-6">
          <h4 className="-rotate-90 text-violet-700  leading-none">
            {item.title}
          </h4>
        </div>
      </div>
      <div className=" flex justify-center col-span-1">
        <div className="h-full w-[1px] bg-violet-700 relative">
          <div
            className={`rounded-full w-10 h-10 bg-white border-2 border-violet-700 flex justify-center items-center absolute -left-5 top-[45%]`}
          >
            <div className="w-7 h-7 bg-violet-700 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className=" h-44 col-span-4"></div>
    </div>
  );
}

function ItemRight({ item }: { item: any }) {
  return (
    <div className="grid  grid-cols-9 -mt-[40%] xs:-mt-[20%]">
      <div className=" h-44 col-span-4"></div>

      <div className=" flex justify-center col-span-1">
        <div className="h-full w-[1px] bg-violet-700 relative">
          <div className="rounded-full w-10 h-10 bg-white border-2 border-violet-700 flex justify-center items-center absolute -left-5 top-[45%]  ">
            <div className="w-7 h-7 bg-violet-700 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className=" col-span-4 flex gap-2">
        <div className=" flex justify-center items-center w-6">
          <h4 className="-rotate-90  text-violet-700  leading-none">
            {item.title}
          </h4>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm font-light">{item.items[0]}</p>
        </div>
      </div>
    </div>
  );
}
