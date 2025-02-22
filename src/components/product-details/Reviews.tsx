"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FiveStars from "../home/FiveStars";
import ReviewSummary from "./ReviewSummary";

function Reviews() {
  const [value, setValue] = useState("");
  const [showReviewActions, setShowReviewActions] = useState(false);

  const handleInput = (e: any) => {
    const textarea = e.target;
    textarea.style.height = "30px"; // Reset height to auto to shrink if text is deleted
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value.length > 0) {
      setShowReviewActions(true);
    } else {
      setShowReviewActions(false);
    }
  }, [value]);
  return (
    <div>
      <ReviewSummary />
      <div className="mt-24 w-[35%]">
        <div className="mb-12">
          <div className="flex items-center ml-14 gap-3">
            <Image
              src={"/assets/images/safla.png"}
              alt={"asda"}
              width={40000000}
              height={400000}
              className="size-12 rounded-full object-contain self-start"
            />

            <textarea
              value={value}
              onChange={handleInput}
              placeholder="Add a review"
              className="border-[1px] border-t-0 border-l-0 border-r-0 min-h-1 border-gray-400 w-full outline-none resize-none overflow-hidden"
              style={{ height: "30px" }} // Initial height
            />
          </div>
          {showReviewActions && (
            <div className="flex items-center justify-end gap-3 mt-2">
              <button
                onClick={() => {
                  setValue("");
                }}
                className="px-4 py-2 rounded-full font-medium text-sm"
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium text-sm">
                Submit
              </button>
            </div>
          )}
        </div>
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </div>
    </div>
  );
}

export default Reviews;

const CustomerReview = () => {
  return (
    <div className="ml-14 mt-8">
      <div className="flex items-center w-full">
        <Image
          src={"/assets/images/safla.png"}
          alt={"asda"}
          width={40000000}
          height={400000}
          className="size-12 rounded-full object-contain self-start"
        />
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-base">Sulayman Kendor</h1>
              <FiveStars rating={4} />
            </div>
            <p className="text-gray-500 text-sm">3 hours ago</p>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            ducimus, fugit laudantium labore quis error sit quos distinctio vero
          </p>
        </div>
      </div>
    </div>
  );
};
