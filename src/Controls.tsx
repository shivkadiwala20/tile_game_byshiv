interface ControlsProps {
  handleEnd: (val: boolean) => void;
}

export default function Controls({ handleEnd }: ControlsProps) {
  return (
    <div className="flex flex-col-reverse md:flex-col m-auto md:px-[20%]">
      <button className="mt-5" onClick={() => handleEnd(false)}>
        End
      </button>
      <div className="mt-5">
        <p className="text-3xl mt-5">Speed:</p>
        <select name="speed" className="mt-2 rounded-md w-full">
          <option value="250">1</option>
          <option value="200">2</option>
          <option value="150">3</option>
          <option value="100">4</option>
          <option value="50">5</option>
        </select>
      </div>
      <div className="mt-5">
        <p className="text-3xl ">Score:</p>
        <p className="text-5xl">100</p>
      </div>
    </div>
  );
}
