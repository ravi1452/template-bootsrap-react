import React from "react";
import { MainArtical } from "./MainArtical";

export function Artical() {
  let Artical = [
    {
      icons: "ri-store-line",
      title: "Lorem Ipsum",
    },
    {
      icons: "ri-bar-chart-box-line",
      title: "Doalr Sitema",
    },
    {
      icons: "ri-layout-grid-fill",
      title: "Sedare Perspiciatis",
    },
    {
      icons: "ri-file-shred-fill",
      title: "Magni Dolores",
    },
    {
      icons: "ri-phone-camera-fill",
      title: "Nemos Enimade",
    },
  ];
  return Artical.map((e) => <MainArtical icons={e.icons} title={e.title} />);
}
