import Image from "next/image";
import React, { useState } from "react";
import { CustomerCardProps } from "../lib/definitions";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomerCard({ name }: CustomerCardProps) {
  const [isCustomerImageLoaded, setIsCustomerImageLoaded] = useState(false);
  const [isOrderImageLoaded, setIsOrderImageLoaded] = useState(false);

  const isFullyLoaded = isCustomerImageLoaded && isOrderImageLoaded;

  return (
    <div className="relative">
      {!isFullyLoaded && (
        <div className="absolute inset-0 z-10">
          <div className="h-full w-full p-4 rounded-lg shadow bg-[#d5e0c5]">
            <Skeleton height="100%" width="100%" />
          </div>
        </div>
      )}

      <div
        className={`border p-4 rounded-lg shadow text-center bg-[#d5e0c5] transition-opacity duration-500 ${
          isFullyLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h4 className="font-bold text-lg mb-2">{name}</h4>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={`/${name}.png`}
            alt={`${name}`}
            width={114}
            height={256}
            onLoad={() => setIsCustomerImageLoaded(true)}
            className="mx-auto my-auto"
          />
          <Image
            src={`/${name}_Order.png`}
            alt={`${name} order`}
            width={114}
            height={256}
            onLoad={() => setIsOrderImageLoaded(true)}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
