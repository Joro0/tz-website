import { ReactElement } from "react";

type Props = {
  data: {
    name: string;
    svgLogo: ReactElement;
  }[];
};

function CarouselInfinite({ data }: Props) {
  const copies = 2; // Repeated logo groups

  // Generate the repeated logos
  const repeatedLogos = [];
  for (let i = 0; i < copies; i++) {
    repeatedLogos.push(
      ...data.map((client, index) => (
        <div key={`${i}-${index}`} className="w-10 flex-shrink-0">
          {client.svgLogo}
        </div>
      ))
    );
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-fit flex items-center gap-5 animate-(--animate-scroll-x-infinite)">
        {repeatedLogos}
      </div>
    </div>
  );
}

export default CarouselInfinite;
