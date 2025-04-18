type Props = {
  qty: number;
  actualPos: number;
  animating: boolean;
  onChangePos: (pos: number) => void;
};

function CarouselButtons({ qty, actualPos, onChangePos, animating }: Props) {
  return (
    <div className="flex items-center justify-center w-full gap-3">
      {Array.from({ length: qty }).map((_, i) => (
        <button
          key={i}
          className={`${
            actualPos === i + 1 ? "bg-image" : "bg-image/40"
          } rounded-full w-2 h-2`}
          onClick={() => (actualPos === i + 1 ? null : onChangePos(i + 1))}
          disabled={animating}
        ></button>
      ))}
    </div>
  );
}

export default CarouselButtons;
