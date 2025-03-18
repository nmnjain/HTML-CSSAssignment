import { useState } from "react";

const FormLogger = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded-md w-full"
        placeholder="Enter text..."
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FormLogger;
