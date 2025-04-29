import { ReactElement, useState } from "react";

type Props = {
  data: {
    name: string;
    svgLogo: ReactElement;
  }[];
};

function CarouselInfinite({ data }: Props) {
  const [isPaused, setIsPaused] = useState(false);

  const copies = 2; // Repeated logo groups
  const spaceLogo = 5; // Space between logos

  // Generate the repeated logos
  const repeatedLogos = [];
  for (let i = 0; i < copies; i++) {
    repeatedLogos.push(
      ...data.map((client, index) => (
        <div
          key={`${i}-${index}`}
          className={`w-10 flex-shrink-0 mr-${spaceLogo}`}
        >
          {client.svgLogo}
        </div>
      ))
    );
  }

  return (
    <div
      className="w-full overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="w-fit flex items-center animate-(--animate-scroll-x-infinite)"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {repeatedLogos}
      </div>
    </div>
  );
}

export default CarouselInfinite;
