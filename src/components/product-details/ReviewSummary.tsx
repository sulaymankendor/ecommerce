import React from "react";
import FiveStars from "../home/FiveStars";
import { Progress } from "../ui/progress";

function ReviewSummary() {
  return (
    <div className="mt-32">
      <h1 className="font-bold text-3xl my-9 ml-8">Reviews</h1>
      <div className="flex gap-7 w-[90%] mx-auto">
        <div className="bg-gray-200 flex-[0.4] p-5 rounded-xl flex flex-col gap-1">
          <h1 className="font-bold text-5xl">4</h1>
          <FiveStars rating={4} />
          <p className="text-gray-600">Average reviews on this product</p>
        </div>
        <div className="bg-gray-200 flex-[0.5] gap-2 grid grid-cols-1 p-5 rounded-xl">
          <div className="flex items-center gap-3">
            <FiveStars rating={5} />
            <Progress value={8} />
            <p>120</p>
          </div>
          <div className="flex items-center gap-3">
            <FiveStars rating={4} />
            <Progress value={23} />
            <p>120</p>
          </div>
          <div className="flex items-center gap-3">
            <FiveStars rating={3} />
            <Progress value={33} />
            <p>120</p>
          </div>
          <div className="flex items-center gap-3">
            <FiveStars rating={2} />
            <Progress value={33} />
            <p>202</p>
          </div>
          <div className="flex items-center gap-3">
            <FiveStars rating={1} />
            <Progress value={33} />
            <p>120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSummary;
