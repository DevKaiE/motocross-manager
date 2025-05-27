"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function LoadGameButton() {
     const router = useRouter();
      const fileInputRef = useRef<HTMLInputElement>(null);
    const loadGame = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        if (typeof json !== "object" || json === null) {
          throw new Error("Invalid JSON format");
        }
        // Validate the JSON structure if necessary
        if (!json.gameVersion) {
          throw new Error("Missing required gameVersion property in JSON");
        }

        localStorage.setItem("saveData", JSON.stringify(json));
        router.push("/game");
      } catch (err) {
        console.error("Error parsing JSON file:", err);
        alert(`Error loading game. Please ensure the file is a valid JSON format. Error: ${err}`);
      }
    };
    reader.readAsText(file);
  };
  
  return (
    <div>
      <Button onClick={loadGame} variant="secondary">Load Game</Button>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}