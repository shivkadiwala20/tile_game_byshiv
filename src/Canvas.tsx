import Tile from "./components/Tile";
import { useEffect, useState } from "react";

export default function Canvas({ className = "" }) {
  const tiles = Array.from(Array(100).keys());
  const [barIndex, setBarIndex] = useState(0);
  const [isBarLeft, setIsBarLeft] = useState(false);
  const [targets, setTargets] = useState<Set<number>>(new Set());
  const [bars, setBars] = useState<Set<number>>(new Set());
  const [isFinished, setIsFinished] = useState(false);

  const handleClick = (num: number) => {
    setTargets((prev) => {
      const temp = new Set(prev);
      temp.delete(num);
      if (temp.size === 0) {
        setIsFinished(true);
      }
      return temp;
    });
  };

  useEffect(() => {
    while (targets.size < 10) {
      const num = Math.floor(Math.random() * 100);
      if (!targets.has(num)) {
        setTargets(targets.add(num));
      }
    }
  }, []);

  useEffect(() => {
    if (isFinished) {
      return;
    }

    const interval = setInterval(() => {
      const idx = barIndex;

      if (isBarLeft) {
        if (idx === 1) {
          setIsBarLeft(false);
        }
        setBarIndex(idx - 1);
      }

      if (!isBarLeft) {
        setBarIndex(idx + 1);
        if (idx === 7) {
          setIsBarLeft(true);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [barIndex, isFinished]);

  useEffect(() => {
    const temp: Set<number> = new Set();
    for (let i = 0; i < 10; i++) {
      temp.add(barIndex + i * 10);
      temp.add(barIndex + 1 + i * 10);
    }
    setBars(temp);
  }, [barIndex]);

  return (
    <div
      className={`w-full md:w-[70%] aspect-square grid grid-cols-10 grid-rows-10 gap-1 md:gap-2 ${className}`}
    >
      {tiles.map((t) => (
        <Tile
          key={t}
          num={t}
          isTarget={targets.has(t)}
          isBar={bars.has(t)}
          handleClick={handleClick}
          isFinished={isFinished}
        />
      ))}
    </div>
  );
}
