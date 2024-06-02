import React from "react";
import { FlipWords } from "./components/ui/flip-words";

export default function App() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="bg-black h-screen">
      <div className="h-[40rem]  flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-100 dark:text-neutral-100">
          Build
          <FlipWords className="text-gray-300" words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>
    </div>

  );
}
