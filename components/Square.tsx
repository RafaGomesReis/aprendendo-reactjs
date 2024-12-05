import { useEffect } from "react";

export const Square = () =>{

    useEffect(() => {
        console.log("eu adoro cortar o cabelo")

        return () => {
            console.log("rodou o cleanup")
        }
    });

    return (
        <div className="w-40 h-40 bg-red-400">

        </div>
    )
}