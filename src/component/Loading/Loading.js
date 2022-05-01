import React from "react";

const Loading = () => {
  return (
    <div>
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg
          class="motion-reduce:hidden animate-spin ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    </div>
  );
};

export default Loading;
