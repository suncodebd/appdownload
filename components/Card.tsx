"use client";

import { Icard } from "@/types/card";
import Image from "next/image";
import CopyToClipboardButton from "./CopytoClipbord";

const Card: React.FC<{ cards: Icard }> = ({
  cards: { app, title, link, promo, img, appName },
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image priority width={400} height={300} src={img} alt={promo} />
      </figure>
      <div className="card-body justify-center items-center gap-y-4 ">
        <h2 className="card-title">{title}</h2>
        <p> Most populer app in the world</p>
        <div className="flex flex-col gap-y-3 bg-slate-200 w-full items-center rounded p-3">
          <h1 className="font-bold text-xl">{app}</h1>
          <h2 className="font-bold text-xl text-blue-600">{promo}</h2>
          <CopyToClipboardButton promo={promo} />
        </div>

        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-3xl ">{appName} download</h2>
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
