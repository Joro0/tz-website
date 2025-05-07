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
  const widthLogo = `w-${wLogo}`; //"w-15"; // Width of each logo (height auto)
  const gapLogo = `mr-${gLogo}`; //"mr-10"; // Space between logos

  const propsLogo = `${widthLogo} flex-shrink-0 ${gapLogo} overflow-hidden`;

  // Generate logos and repeat them
  const repeatedLogos = [];
  for (let i = 0; i < copies; i++) {
    repeatedLogos.push(
      ...data.map((client, index) => (
        <div key={`${i}-${index}`} className={propsLogo}>
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
