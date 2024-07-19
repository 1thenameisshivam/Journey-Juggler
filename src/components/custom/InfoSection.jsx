import { Button } from "../ui/button";
import { TbLocationShare } from "react-icons/tb";
/* eslint-disable react/prop-types */
const InfoSection = ({ data }) => {
  return (
    <div>
      <img
        src="/PlaceHolder.jpg"
        alt="logo"
        className=" h-[300px] w-full object-cover rounded-xl"
      />
      <div className="my-5 flex-col gap-2">
        <h2 className="font-bold text-2xl m-2">{data?.destination}</h2>
        <div className="flex justify-between">
          <div className="flex gap-5 flex-wrap items-center">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🗓️ {data?.days} days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              💰 {data?.budget}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🛫 No. of travelers: {data?.travelWith}
            </h2>
          </div>
          <Button>
            <TbLocationShare className="font-bold text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
