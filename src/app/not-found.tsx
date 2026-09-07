import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/coming-soon.jpg" alt="NotFound" width={400} height={400} />
    </div>
  );
};

export default NotFound;
