import React from "react";
import Image from "next/image";
import FiveStars from "../home/FiveStars";

function Reviews() {
  return (
    <div className="mt-24">
      <h1 className="font-bold text-3xl my-9 ml-8">
        Reviews <span className="font-normal text-2xl">(20)</span>
      </h1>
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
      <CustomerReview />
    </div>
  );
}

export default Reviews;

const CustomerReview = () => {
  return (
    <div className="ml-14 mt-8">
      <div className="flex items-center w-[35%]">
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
