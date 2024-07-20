import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCard from "@/components/custom/UserTripCard";
const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GetTrips();
  }, []);

  const GetTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    const q = query(
      collection(db, "AiTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setTrips([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setTrips((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5  mt-10">
      <h1 className="font-bold text-3xl">My Trips</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5">
        {trips.map((data, index) => (
          <UserTripCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
