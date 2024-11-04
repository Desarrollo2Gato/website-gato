import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CardClientPropd = {
  width: string | number;
  height: string | number;
};
export const CardClientSkeleton: React.FC<CardClientPropd> = ({
  width,
  height,
}) => {
  return (
    <div>
      <Skeleton
        width={width}
        height={height}
        className="aspect-square"
      />
    </div>
  );
};
