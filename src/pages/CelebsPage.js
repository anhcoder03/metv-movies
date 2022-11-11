import React from "react";
import CelebList from "../components/celeb/CelebList";

const CelebsPage = () => {
  return (
    <div className="no-scrollbar ml-[10%] h-screen overflow-scroll w-[68%] bg-[#252229]">
      <div className="p-10">
        <h2 className="text-center text-white font-bold text-3xl mb-10">
          Celebs
        </h2>
        <CelebList></CelebList>
      </div>
    </div>
  );
};

export default CelebsPage;
