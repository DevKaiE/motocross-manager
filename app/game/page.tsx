"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  useEffect(() => {
    const saveData = localStorage.getItem("saveData");
    if (!saveData) {
      router.push("/landing");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Motocross Manager</h1>
      <p>GamePage</p>
    </div>
  );
}
