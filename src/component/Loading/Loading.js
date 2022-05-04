import React from "react";

const Loading = () => {
  return (
    <div>
      <button
        type="button"
        className="bg-[#89c74a] px-8 py-2 text-white rounded"
        disabled
      >
        Processing...
      </button>
    </div>
  );
};

export default Loading;
