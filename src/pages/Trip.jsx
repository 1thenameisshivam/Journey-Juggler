import { useParams } from "react-router-dom";
const Trip = () => {
  const { tripId } = useParams();
  return <div>Trip {tripId}</div>;
};

export default Trip;
