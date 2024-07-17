import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/services/AiModel";
import { selectBudgetOptions } from "@/utils/selectBudgetOptions";
import { selectTrevelList } from "@/utils/selectTrevelList";
import { tripPromt } from "@/utils/tripPromt";
import { useState } from "react";
import { toast } from "sonner";
const ItinerarieForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelWith: "",
  });
  const handleSubmit = async () => {
    if (
      !formData.destination ||
      !formData.days ||
      !formData.budget ||
      !formData.travelWith
    ) {
      toast.error("Please fill all fields");
      return;
    }
    const FINAL_PROMT = tripPromt
      .replace("{location}", formData.destination)
      .replace("{days}", formData.days)
      .replace("{treveler}", formData.travelWith)
      .replace("{budget}", formData.budget);

    const result = await chatSession.sendMessage(FINAL_PROMT);
    console.log(result?.response?.text());

    setFormData({ destination: "", days: "", budget: "", travelWith: "" }); // clear form
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h1 className="font-bold text-3xl">Tell us your travel Preferences</h1>
      <p className="mt-3 text-gray-500 text-xl">
        just provide some basic information, and our trip planner will generate
        a customized itinerary on your preferance.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="font-medium my-3 text-xl">
            What is destination of choice?
          </h2>
          <Input
            name={"destination"}
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder={"eg: Jaipur"}
          />
        </div>
        <div>
          <h2 className="font-medium my-3 text-xl">
            How many days are you planing your Trip?
          </h2>
          <Input
            name={"days"}
            value={formData.days}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder={"eg: 5"}
            type={"number"}
          />
        </div>
        <div>
          <h2 className="font-medium my-3 text-xl">What is Your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((option, index) => (
              <div
                onClick={() =>
                  setFormData({ ...formData, budget: option.title })
                }
                className={`p-4 border rounded-lg hover:shadow-lg ${
                  formData.budget == option.title && "shadow-lg border-black"
                } cursor-pointer`}
                key={index}
              >
                <h2 className="text-4xl">{option.icon}</h2>
                <h2 className="font-bold text-lg">{option.title}</h2>
                <h2 className="text-gray-500 text-sm">{option.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-medium my-3 text-xl">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectTrevelList.map((option, index) => (
              <div
                onClick={() =>
                  setFormData({ ...formData, travelWith: option.title })
                }
                className={`p-4 border rounded-lg hover:shadow-lg ${
                  formData.travelWith == option.title &&
                  "shadow-lg border-black"
                } cursor-pointer`}
                key={index}
              >
                <h2 className="text-4xl">{option.icon}</h2>
                <h2 className="font-bold text-lg">{option.title}</h2>
                <h2 className="text-gray-500 text-sm">{option.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button
          onClick={() => handleSubmit()}
          type={"submit"}
          className={"bg-green-500"}
        >
          Generate Trip
        </Button>
      </div>
    </div>
  );
};

export default ItinerarieForm;
