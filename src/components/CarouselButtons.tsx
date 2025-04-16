import "./CarouselButtons.css";

type Props = {
  qty: number;
  onChangePos: (pos: number) => void;
};

function CarouselButtons({ qty, onChangePos }: Props) {
  return (
    <div className="flex items-center justify-center w-full gap-3">
      {Array.from({ length: qty }).map((_, i) => (
        <button
          key={i}
          className="bg-amber-200 rounded-full w-2 h-2"
          onClick={() => onChangePos(i + 1)}
        ></button>
      ))}
    </div>
  );
}

export default CarouselButtons;
