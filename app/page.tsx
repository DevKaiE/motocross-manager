"use client";
import { redirect } from "next/navigation";

export default function Home() {
  const saveData = localStorage.getItem("saveData");
  if (saveData) {
    redirect("/game");
  }
  redirect("/landing");
}
