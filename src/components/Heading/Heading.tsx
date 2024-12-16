import React from "react";

function Heading(props: { text: string }) {
  const { text } = props;

  return (
    <div className="w-full text-center sm:text-left">
      <h1 className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] text-[#333333] font-bold mb-[16px] sm:mb-[24px]">
        {text}
      </h1>
    </div>
  );
}

export default Heading;
