import "./CarouselIntro.css";
import { ReactElement } from "react";

type Props = {
  data: {
    icon: ReactElement;
    title: string;
    descp: string;
  }[];
};

function CarouselIntro({ data }: Props) {
  return (
    <div className="bg-gray-200 w-full overflow-hidden border-y-1 border-text-image/30 my-2">
      <div className={`flex w-[${data.length * 100}%]`}>
        {data.map((info, i) => (
          <div key={i} className="flex flex-col flex-1">
            <div>{info.icon}</div>
            <p className="text-lg font-bold">{info.title}</p>
            <p className="text-lg">{info.descp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselIntro;
