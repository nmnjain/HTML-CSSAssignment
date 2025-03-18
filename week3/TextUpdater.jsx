import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded-md w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-lg">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
