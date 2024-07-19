import PlanCardBranding from "../planCardBranding";
import { FaCheckCircle } from "react-icons/fa";

type ServiceDetail = {
  item_name?: string;
  sub_items?: { name_sub_item?: string[] }[];
};

type Props = {
  color: string;
  plan: {
    plan_name: string;
    short_description: string;
    long_description?: string;
    items: ServiceDetail[];
    price: string;
  };
};

function redirect() {
  window.open("https://wa.me/+51946380310", "_blank");
}

const detailPlan: React.FC<Props> = ({ color, plan }) => {
  return (
    <div className="h-auto">
      <div className="relative w-full text-center mx-auto">
        <h2
          style={{ color: color }}
          className={`uppercase font-black text-[1.5rem] lg:text-[3.5rem] md:text-[2rem] mb-4 lg:mb-8`}
        >
          {plan.plan_name}
        </h2>
      </div>
      <div className={`font-medium lg:text-lg mb-4 text-[#444] `}>
        {plan.long_description
          ? plan.long_description
          : plan.short_description
          ? plan.short_description
          : ""}
      </div>
      <div className="flex flex-col md:flex-row gap-10 lg:max-h-auto pr-1 pt-1 pb-4 h-fit max-h-[60vh] overflow-y-auto overflow-x-hidden">
        <div className="h-auto md:min-h-[400px] md:max-h-[400px] md:overflow-y-auto w-full md:w-2/4 xl:w-2/3">
          {plan?.items.map((detail, index) => (
            <div key={index} className="mb-4">
              <h3 style={{ color: color }} className={`text-xl font-bold mb-2`}>
                {detail?.item_name}
              </h3>
              <ul className="pl-5 list-none text-[1rem]">
                {detail.sub_items?.map((item, idx) => (
                  <li
                    key={idx}
                    className={`w-full  text-lg flex items-start mb-2 lg:mb-4`}
                  >
                    <FaCheckCircle
                      style={{ color: color }}
                      className="mt-2 mr-2 text-sm lg:text-base  "
                    />

                    <p className="w-full">{item.name_sub_item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col  justify-center items-center w-full md:w-2/4 xl:w-1/3 md:max-h-[400px]  h-fit md:overflow-y-auto">
          <PlanCardBranding
            price={plan.price}
            color={color}
            word="Pago único"
          ></PlanCardBranding>
          '
          <div
            onClick={redirect}
            style={{ backgroundColor: color }}
            className={`detalle font-bold text-white text-xl shadow-xl w-full rounded-md py-2 capitalize flex justify-between px-6 mt-2 items-center`}
          >
            Contratar servicio
            <svg
              className="max-w-[40px]"
              width="100%"
              height="100%"
              viewBox="0 0 80 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79.4142 16.4142C80.1953 15.6332 80.1953 14.3668 79.4142 13.5858L66.6863 0.85787C65.9052 0.0768208 64.6389 0.0768207 63.8579 0.857869C63.0768 1.63892 63.0768 2.90525 63.8579 3.6863L75.1716 15L63.8579 26.3137C63.0768 27.0948 63.0768 28.3611 63.8579 29.1421C64.6389 29.9232 65.9052 29.9232 66.6863 29.1421L79.4142 16.4142ZM-1.56913e-07 17L78 17L78 13L1.56913e-07 13L-1.56913e-07 17Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailPlan;
