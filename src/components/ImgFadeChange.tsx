type Props = {
  carPos: number;
  carPrevPos: number;
  imgDirs: string[];
  animating: boolean;
  onPrevPos: (pos: number) => void;
};

function ImgFadeChange({
  carPos,
  carPrevPos,
  imgDirs,
  animating,
  onPrevPos,
}: Props) {
  return (
    <>
      {/* Mask Layer */}
      <div className="absolute inset-0 bg-black opacity-35 -z-9"></div>

      {/* Background Image Layer */}
      <div
        className={`absolute inset-0 bg-cover bg-center -z-10 ${
          animating ? "animate-(--animate-fade-and-scale)" : ""
        }`}
        onAnimationEnd={() => {
          onPrevPos(carPos);
        }}
        style={{
          backgroundImage: `url('${imgDirs[carPos - 1]}')`,
        }}
      ></div>
      <div
        className={`absolute inset-0 bg-cover bg-center -z-11`}
        style={{
          backgroundImage: `url('${imgDirs[carPrevPos - 1]}')`,
        }}
      ></div>
    </>
  );
}

export default ImgFadeChange;
