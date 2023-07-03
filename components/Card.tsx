"use client";

import { Icard } from "@/types/card";
import Image from "next/image";
import CopyToClipboardButton from "./CopytoClipbord";

const Card: React.FC<{ cards: Icard }> = ({
  cards: { app, title, link, promo, img, appName },
}) => {
  return (
    <div className="card w-80  shadow-xl bg-white text-black">
      <figure>
        <Image priority width={320} height={320} src={img} alt={promo} />
      </figure>
      <div className="card-body justify-center items-center gap-y-4 ">
        <h2 className="card-title">{title}</h2>
        <p>{appName} Most populer app in the world</p>
        <div className="flex flex-col gap-y-3 bg-slate-200 w-full items-center rounded p-3">
          <h1 className="font-bold text-xl">{app}</h1>
          <h2 className="font-bold text-xl text-blue-600">{promo}</h2>
          <CopyToClipboardButton promo={promo} />
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-xl ">{appName} download</h2>
          <a
            href={link}
            className=" link btn btn-outline btn-warning no-underline"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
