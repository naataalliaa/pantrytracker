'use client'

import AddItem from "@/components/AddItem";
import ListItems from "@/components/ListItems";






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className='text-5xl p-8 text-center'>PANTRY TRACKER</h1>
        <AddItem/>
        <ListItems/>
      </div>    
    </main>

  );
}
