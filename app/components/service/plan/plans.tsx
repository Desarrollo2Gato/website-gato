import DetailPlan from "./modalDetail";
import SliderPlans from "./sliderPlans";
import { useState } from "react";
import { Plan } from "./iPlan";

type Props = {
  color: string;
  data: Plan[];
};

const plans = (prop: Props) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleViewPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };
  const closePopup = () => {
    setSelectedPlan(null);
  };
  return (
    <div className="w-full" id="plans">
      <div className="w-full max-w-[1440px] mx-auto px-8 py-8 xl:  lg:px:16 lg:py-16">
        <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
        >
          Planes
        </h2>
        <div className="px-8 w-full">
          <SliderPlans
            color={prop.color}
            data={prop.data}
            handleViewPlan={handleViewPlan}
          />
        </div>
      </div>
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 py-16"
          onClick={closePopup}
        >
          <div
            className="relative bg-white p-8 rounded w-[90%] sm:w-[80%] lg:w-[60%] 2xl:w-[50%] max-w-[900px] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={closePopup}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8162 6.83117C40.3779 5.2694 40.3779 2.73309 38.8162 1.17133C37.2544 -0.390442 34.7181 -0.390442 33.1563 1.17133L20 14.3402L6.83117 1.18382C5.2694 -0.377948 2.73309 -0.377948 1.17133 1.18382C-0.390442 2.74559 -0.390442 5.2819 1.17133 6.84367L14.3402 20L1.18382 33.1688C-0.377948 34.7306 -0.377948 37.2669 1.18382 38.8287C2.74559 40.3904 5.2819 40.3904 6.84367 38.8287L20 25.6598L33.1688 38.8162C34.7306 40.3779 37.2669 40.3779 38.8287 38.8162C40.3904 37.2544 40.3904 34.7181 38.8287 33.1563L25.6598 20L38.8162 6.83117Z"
                  fill={prop.color}
                />
              </svg>
            </button>
            <div className="">
            <DetailPlan {...selectedPlan} />
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default plans;
