import IconArrowRight from "../assets/icons/icon_right_arrow.svg?react";

type Props = {
  text?: string;
};

function ArrowButton({ text }: Props) {
  return (
    <button className="flex flex-row items-center gap-3 ml-auto my-10 md:my-12 lg:my-14 xl:my-16 ">
      <IconArrowRight className="w-5 text-highlight stroke-3 inline" />
      <h4 className="text-xl font-medium">{text}</h4>
    </button>
  );
}

export default ArrowButton;
