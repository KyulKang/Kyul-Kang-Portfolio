import React from 'react';

function Loading() {
  return (
    <div
      id="loading-screen"
      className={`absolute flex flex-col  w-full  h-full bg-inherit justify-center items-center z-[50]`}
    >
      <img
        src="./images/doublek.png"
        id="loading-logo"
        className="relative w-[150px] h-[150px] p-4 translate-y-[0.5em]"
      />
      <p className="text-[36px] translate-x-[0.2em] translate-y-[0.5em]">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
