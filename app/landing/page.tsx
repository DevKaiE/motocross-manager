"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import LoadGameButton from "@/components/gameLoading/load-game-button";
import StartGameButton from "@/components/gameLoading/start-game-button";

export default function LandingPage() {
 

 

  

  return (
    <div>
      <h1>Welcome to the Motocross Manager</h1>
      <p>Lead your motocross team to victory!</p>
      <StartGameButton />
      <LoadGameButton />
    </div>
  );
}
