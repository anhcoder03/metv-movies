import React from "react";
import CelebList from "../components/celeb/CelebList";

const CelebsPage = () => {
  return (
    <div className="no-scrollbar h-screen mt-14 overflow-scroll w-full bg-[#252229] lg:w-[70%] lg:mt-0 lg:ml-[10%]">
      <div className="px-3 py-10 lg:p-10">
        <h2 className="text-center text-white font-bold text-3xl mb-10">
          Celebs
        </h2>
        <CelebList></CelebList>
      </div>
    </div>
  );
};

export default CelebsPage;
