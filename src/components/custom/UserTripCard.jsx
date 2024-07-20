import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const UserTripCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-2 mt-5 border rounded-lg hover:shadow-lg flex flex-col gap-3 justify-between">
        <div className="flex justify-between">
          <h2 className="text-green-500 font-bold">
            📍 {data?.userSelection?.destination}
          </h2>
          <span className="cursor-pointer">❎</span>
        </div>
        <h2 className="text-gray-500 text-xs md:text-sm">
          🌏 {data?.userSelection?.days} Days Trip To{" "}
          {data?.userSelection?.destination} With{" "}
          {data?.userSelection?.travelWith}
        </h2>
        <span className="flex gap-4">
          <h2 className="bg-gray-200 rounded-full px-1 text-gray-500 text-xs md:text-sm">
            💸 {data?.userSelection?.budget}
          </h2>
          <h2 className="bg-gray-200 rounded-full px-1 text-gray-500 text-xs md:text-sm">
            ⛱️ {data?.userSelection?.travelWith}
          </h2>
        </span>
        <Button
          onClick={() => navigate(`/trip/${data?.id}`)}
          className="bg-green-500"
        >
          View Trip
        </Button>
      </div>
    </div>
  );
};

export default UserTripCard;
