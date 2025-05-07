import { ReactElement } from "react";

type Props = {
  data: {
    name: string;
    svgLogo: ReactElement;
  }[];
  wLogo: number;
  gLogo: number;
  rLogo: number;
};

function CarouselInfinite({ data, wLogo, gLogo, rLogo }: Props) {
  const copies = rLogo; // Repeated logo groups

  // Generate logos and repeat them
  const repeatedLogos = [];
  for (let i = 0; i < copies; i++) {
    repeatedLogos.push(
      ...data.map((client, index) => (
        <div
          key={`${i}-${index}`}
          className="flex-shrink-0 overflow-hidden"
          style={{
            width: `${wLogo}rem`, // width logo
            marginRight: `${gLogo}rem`, // gap logos
          }}
        >
          {client.svgLogo}
        </div>
      ))
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-fit flex items-center animate-(--animate-scroll-x-infinite) hover:pause-animation">
        {repeatedLogos}
      </div>
    </div>
  );
}

export default CarouselInfinite;
