import { useState } from "react";
import Canvas from "./Canvas";
import { motion } from "framer-motion";
import Controls from "./Controls";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-3 my-3">
      <h1>Tile Game</h1>
      <div className="w-full grid grid-cols-1 items-center md:grid-cols-3 gap-5 px-5">
        {!start ? (
          <>
            <div />
            <motion.button
              onClick={() => setStart(true)}
              disabled={start}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              Start Game
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeIn" }}
            className="col-span-2 flex items-center justify-center"
          >
            <Canvas />
          </motion.div>
        )}
        {start && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeIn" }}
          >
            <Controls handleEnd={setStart} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
