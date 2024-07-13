import PlanCardBranding from "../planCardBranding";

type ServiceDetail = {
  name?: string;
  items?: string[];
};

type Props = {
  name: string;
  description?: string;
  details: ServiceDetail[];
  price: number;
  priceTrimestral?: string;
  color: string;
  word: string;
};
function redirect() {
  window.open("https://wa.me/+51946380310", "_blank");
}

const detailPlan = (prop: Props) => {
  return (
      <div className="h-auto">
        <div  className="relative w-full text-center mx-auto">
          <h2
          style={{ color: prop.color }}
            className={`uppercase font-black text-[1.5rem] lg:text-[3.5rem] md:text-[2rem] mb-4 lg:mb-8`}
          >
            {prop.name}
          </h2>
          {prop.priceTrimestral !== undefined && (
            <div style={{ backgroundColor: prop.color }} className="relative lg:absolute text-center lg:left-1/2 lg:top-2/3 w-fit px-4 py-2 inline-block  rounded-md font-bold shadow-lg">
              <p className=" text-white">Precio Trimestral: <span className="ml-4"> S/ {prop.priceTrimestral}</span> </p>
            </div>
          )}
        </div>
        <div className={`lg:font-semibold lg:text-lg mb-4 `}>{prop.description}</div>
        <div className="flex flex-col md:flex-row gap-10 lg:max-h-auto pr-1 pt-1 pb-4 h-fit max-h-[60vh] overflow-y-auto overflow-x-hidden">
          <div className="h-auto md:min-h-[400px] md:max-h-[400px] md:overflow-y-auto w-full md:w-2/4 xl:w-2/3">
            {prop?.details.map((detail, index) => (
              <div key={index} className="mb-4">
                <h3 style={{ color: prop.color }} className={`text-xl font-bold mb-2`}>{detail?.name}</h3>
                <ul className="pl-5 list-none text-[1rem]">
                  {detail.items?.map((item, idx) => (
                    <li key={idx} className={`w-full  text-lg flex items-start mb-2 lg:mb-4`}> 
                    <svg className="h-[25px] w-[25px] lg:h-[30px] lg:w-[30px] mr-2 mt-1 sm:mt-0"
                    width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" rx="20" fill={`${prop.color}`}/>
                    <path d="M31.9769 11.5934C32.6744 12.2909 32.6744 13.4236 31.9769 14.121L17.6928 28.4052C16.9953 29.1026 15.8626 29.1026 15.1652 28.4052L8.0231 21.2631C7.32563 20.5656 7.32563 19.4329 8.0231 18.7355C8.72057 18.038 9.85325 18.038 10.5507 18.7355L16.4318 24.6109L29.4549 11.5934C30.1523 10.8959 31.285 10.8959 31.9825 11.5934H31.9769Z" fill="white"/>
                    </svg>
                    <p className="w-full">{item}</p>
                     </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col  justify-center items-center w-full md:w-2/4 xl:w-1/3 md:max-h-[400px]  h-fit md:overflow-y-auto">
            <PlanCardBranding
              price={prop.price}
              color={prop.color}
              word={prop.word}
            ></PlanCardBranding>'
            <div
            onClick={redirect}
            style={{ backgroundColor: prop.color }} 
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
