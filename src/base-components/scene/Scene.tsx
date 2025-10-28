/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent, PropsWithChildren } from "react";

export const Scene: FunctionComponent<PropsWithChildren & { props?: any }> = ({
  children,
  props,
}) => {
  return <Canvas {...props}>{children}</Canvas>;
};
