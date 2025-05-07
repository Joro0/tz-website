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

  // Tailwind scale calculation for width and margin
  const calculateTailwindScale = (value: number) => `${value * 0.25}rem`;

  // Generate logos and repeat them
  const repeatedLogos = [];
  for (let i = 0; i < copies; i++) {
    repeatedLogos.push(
      ...data.map((client, index) => (
        <div
          key={`${i}-${index}`}
          className="flex-shrink-0 overflow-hidden"
          style={{
            width: calculateTailwindScale(wLogo), // Calculate width to match Tailwind
            marginRight: calculateTailwindScale(gLogo), // Calculate margin-right to match Tailwind
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
