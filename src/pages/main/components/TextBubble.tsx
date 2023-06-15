import { FunctionComponent } from "react";
import CircleMaskIcon from "./CircleMaskIcon";
import Greeting from "./Greeting";

interface TextBubbleProps {}

const TextBubble: FunctionComponent<TextBubbleProps> = () => {
  return (
    <div className="bg-white drop-shadow-2xl text-black shadow-black w-11/12 h-52 rounded-2xl mt-36 z-40 flex flex-col items-center justify-center relative">
      <CircleMaskIcon />
      <Greeting />
    </div>
  );
};

export default TextBubble;
