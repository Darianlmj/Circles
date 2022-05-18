import React from "react";
import { Skeleton } from "antd";
import "./index.less";

const SkeletonCard = () => (
  <Skeleton.Button
    className="skeletonCard"
    style={{ width: "20em", height: "8.5em" }}
    active
    round
  />
);

export default SkeletonCard;