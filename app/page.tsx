"use client";
import Card from "@/components/Card";
import { cardData } from "@/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-5 bg-slate-200">
      <div className="flex flex-col gap-y-5">
        {cardData.map((cards) => (
          <Card key={cards.appName} cards={cards} />
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
