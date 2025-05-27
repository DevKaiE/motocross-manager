"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Save } from "lucide-react";

export default function DownloadGameButton() {
    const [saveData, setSaveData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem("saveData");
        if (savedData) {
            setSaveData(JSON.parse(savedData));
        }
    }, []);

   const saveGame = () => {

   }  
  return (
    <div>
      <Button onClick={saveGame} size={"icon"} variant={"default"}><Save /></Button>
    </div>
  );
}