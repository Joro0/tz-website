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
    <div className="w-full overflow-hidden border-y-2 border-image/40 py-6 min-h-60">
      <div
        className="flex transform transition-transform duration-800 ease-in-out"
        style={{
          width: totalWidth,
          transform: `translateX(${translateX})`,
        }}
      >
        {data.map((info, i) => (
          <div key={i} className="flex flex-col flex-1 gap-2">
            <div>{info.icon}</div>
            <p className="font-bold text-image">{info.title}</p>
            <p className="text-image">{info.descp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselIntro;
