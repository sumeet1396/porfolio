"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Scene3DBackground() {
  return <Scene3D />;
}
