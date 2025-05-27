"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function DownloadGameButton() {
    const [saveData, setSaveData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem("saveData");
        if (savedData) {
            setSaveData(JSON.parse(savedData));
        }
    }, []);

    const downloadGame = () => {
        if (saveData) {
            // Open a explorer window to save the game
            const fileName = `motocross_manager_save_${new Date().toISOString()}.json`;
            const blob = new Blob([JSON.stringify(saveData)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(url);
        }
    };
  
  return (
    <div>
      <Button onClick={downloadGame} size={"icon"} variant={"outline"}><Download /></Button>
    </div>
  );
}