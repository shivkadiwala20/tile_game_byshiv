import { useEffect, useState } from "react";

interface TileProps {
  num: number;
  isTarget: boolean;
  isBar: boolean;
  isFinished: boolean;
  handleClick: (num: number) => void;
}

export default function Tile({
  num,
  isTarget,
  isBar,
  isFinished,
  handleClick,
}: TileProps) {
  const [addClasses, setAddClasses] = useState("");

  const blinkAnimationFrames = [
    { opacity: "25%" },
    { opacity: "100%" },
    { opacity: "25%" },
    { opacity: "100%" },
    { opacity: "25%" },
    { opacity: "100%" },
  ];

  const blinkTiming = {
    duration: 1000,
    fill: "forwards",
  };

  useEffect(() => {
    if (!isTarget && !isBar) {
      setAddClasses("bg-gray-700 opacity-25");
      return;
    }

    if (isTarget) {
      setAddClasses("bg-blue-700 opacity-100 cursor-pointer");
    }

    if (isBar) {
      if (isFinished) {
        setAddClasses("bg-green-700 opacity-100");
        return;
      }
      setAddClasses("bg-red-700 opacity-100");
    }
  }, [isTarget, isBar, isFinished]);

  return (
    <div
      className={`w-full h-full flex items-center justify-center rounded-lg transition-all ${addClasses}`}
      onClick={(e) => {
        if (!isTarget || isBar) {
          return;
        }
        e.target.animate(blinkAnimationFrames, blinkTiming);
        handleClick(num);
      }}
    />
  );
}
