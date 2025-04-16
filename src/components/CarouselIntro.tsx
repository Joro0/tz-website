import "./CarouselIntro.css";
import { ReactElement } from "react";

type Props = {
  data: {
    icon: ReactElement;
    title: string;
    descp: string;
  }[];
  pos: number;
};

function CarouselIntro({ data, pos }: Props) {
  const totalWidth = `${data.length * 100}%`;
  const translateX = `-${(pos - 1) * (100 / data.length)}%`;

  return (
    <div className="bg-gray-200 w-full overflow-hidden border-y-1 border-text-image/30 my-2">
      <div
        className="flex transform transition-transform duration-500 ease-in-out"
        style={{
          width: totalWidth,
          transform: `translateX(${translateX})`,
        }}
      >
        {data.map((info, i) => (
          <div key={i} className="flex flex-col flex-1">
            <div>{info.icon}</div>
            <p className="font-bold">{info.title}</p>
            <p>{info.descp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselIntro;
