"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function StartGameButton() {
    const router = useRouter();

    const startGame = () => {
        const saveData = localStorage.getItem("saveData");
        if (saveData) {
            router.push("/game");
        } else {
            localStorage.setItem("saveData", JSON.stringify({}));
            router.push("/game");
        }
    };

    return (

            <Button onClick={startGame}>Start Game</Button>
       
    );
}