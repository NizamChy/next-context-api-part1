"use client"

import { useAppContext } from "@/context";

export default function Home() {

  const { name, setName } = useAppContext();
  return (
    <main className="m-4">
      <div className="">
        <span className="mr-5">{name}</span>
        <br />
        <button
        onClick={() => setName('Mohammed Nizam Uddin Chowdhury')}
        className="border-2 border-pink-500 rounded-lg px-3 bg-cyan-400">Change name</button>
      </div>
    </main>
  );
}
